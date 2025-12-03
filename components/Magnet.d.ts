import { ReactNode, HTMLAttributes } from 'react';

export interface MagnetProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    padding?: number;
    disabled?: boolean;
    magnetStrength?: number;
    activeTransition?: string;
    inactiveTransition?: string;
    wrapperClassName?: string;
    innerClassName?: string;
}

export default function Magnet(props: MagnetProps): JSX.Element;
