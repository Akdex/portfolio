import { ReactNode } from 'react';

export interface GradientTextProps {
    children: ReactNode;
    className?: string;
    colors?: string[];
    animationSpeed?: number;
    showBorder?: boolean;
}

export default function GradientText(props: GradientTextProps): JSX.Element;
