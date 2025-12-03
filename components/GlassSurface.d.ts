import { ReactNode, CSSProperties } from 'react';

export interface GlassSurfaceProps {
    children?: ReactNode;
    width?: string | number;
    height?: string | number;
    borderRadius?: number;
    borderWidth?: number;
    brightness?: number;
    opacity?: number;
    blur?: number;
    displace?: number;
    backgroundOpacity?: number;
    saturation?: number;
    distortionScale?: number;
    redOffset?: number;
    greenOffset?: number;
    blueOffset?: number;
    xChannel?: string;
    yChannel?: string;
    mixBlendMode?: string;
    className?: string;
    style?: CSSProperties;
}

export default function GlassSurface(props: GlassSurfaceProps): JSX.Element;
