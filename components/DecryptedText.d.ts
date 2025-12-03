import { HTMLAttributes } from 'react';

export interface DecryptedTextProps extends HTMLAttributes<HTMLSpanElement> {
    text: string;
    speed?: number;
    maxIterations?: number;
    sequential?: boolean;
    revealDirection?: 'start' | 'end' | 'center';
    useOriginalCharsOnly?: boolean;
    characters?: string;
    className?: string;
    parentClassName?: string;
    encryptedClassName?: string;
    animateOn?: 'view' | 'hover' | 'both';
}

export default function DecryptedText(props: DecryptedTextProps): JSX.Element;
