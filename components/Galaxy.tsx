"use client";

import { useEffect, useRef } from "react";
import { Renderer, Camera, Geometry, Program, Mesh } from "ogl";
import "./Galaxy.css";

interface GalaxyProps {
    particlesCount?: number;
    alpha?: number;
    size?: number;
    speed?: number;
    color?: string;
}

export default function Galaxy({
    particlesCount = 500,
    alpha = 0.5,
    size = 0.02,
    speed = 0.05,
    color = "#ffffff",
}: GalaxyProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const renderer = new Renderer({ alpha: true, depth: false });
        const gl = renderer.gl;
        containerRef.current.appendChild(gl.canvas);

        const camera = new Camera(gl, { fov: 45 });
        camera.position.set(0, 0, 5);

        const scene = new Mesh(gl);

        const count = particlesCount;
        const positions = new Float32Array(count * 3);
        const randoms = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            const r = Math.random() * 2 + 0.5;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(Math.random() * 2 - 1);

            positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = (r * Math.sin(phi) * Math.sin(theta)) * 0.2; // Flatten
            positions[i * 3 + 2] = r * Math.cos(phi);

            randoms[i * 3] = Math.random();
            randoms[i * 3 + 1] = Math.random();
            randoms[i * 3 + 2] = Math.random();

            colors[i * 3] = 1;
            colors[i * 3 + 1] = 1;
            colors[i * 3 + 2] = 1;
        }

        const geometry = new Geometry(gl, {
            position: { size: 3, data: positions },
            random: { size: 3, data: randoms },
            color: { size: 3, data: colors },
        });

        const vertex = `
      attribute vec3 position;
      attribute vec3 random;
      attribute vec3 color;
      uniform float uTime;
      uniform float uSize;
      uniform mat4 modelViewMatrix;
      uniform mat4 projectionMatrix;
      varying vec3 vColor;

      void main() {
        vColor = color;
        
        // Rotate
        float angle = uTime * 0.2 * (1.0 - length(position) * 0.2);
        float c = cos(angle);
        float s = sin(angle);
        mat2 rotate = mat2(c, -s, s, c);
        
        vec3 pos = position;
        pos.xz = rotate * pos.xz;

        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        gl_PointSize = uSize * (300.0 / -mvPosition.z) * (1.0 + random.x);
      }
    `;

        const fragment = `
      precision highp float;
      uniform float uAlpha;
      uniform vec3 uColor;
      varying vec3 vColor;

      void main() {
        vec2 uv = gl_PointCoord.xy - 0.5;
        float d = length(uv);
        if (d > 0.5) discard;
        float alpha = (0.5 - d) * 2.0 * uAlpha;
        gl_FragColor = vec4(uColor * vColor, alpha);
      }
    `;

        const program = new Program(gl, {
            vertex,
            fragment,
            uniforms: {
                uTime: { value: 0 },
                uSize: { value: size },
                uAlpha: { value: alpha },
                uColor: { value: new Float32Array([1, 1, 1]) }, // Default white
            },
            transparent: true,
            depthTest: false,
        });

        const particles = new Mesh(gl, { mode: gl.POINTS, geometry, program });
        particles.setParent(scene);

        function resize() {
            if (!containerRef.current) return;
            renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
            camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
        }
        window.addEventListener("resize", resize);
        resize();

        let animationId: number;
        function update(t: number) {
            animationId = requestAnimationFrame(update);
            program.uniforms.uTime.value = t * speed * 0.01;
            renderer.render({ scene, camera });
        }
        animationId = requestAnimationFrame(update);

        const container = containerRef.current;
        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationId);
            if (container && container.contains(gl.canvas)) {
                container.removeChild(gl.canvas);
            }
        };
    }, [particlesCount, alpha, size, speed, color]);

    return <div ref={containerRef} className="galaxy-canvas-container" />;
}
