import { ReactNode } from 'react';

export interface TiltedCardProps {
    imageSrc: string;
    altText?: string;
    captionText?: string;
    containerHeight?: string;
    containerWidth?: string;
    imageHeight?: string;
    imageWidth?: string;
    scaleOnHover?: number;
    rotateAmplitude?: number;
    showMobileWarning?: boolean;
    showTooltip?: boolean;
    overlayContent?: ReactNode | null;
    displayOverlayContent?: boolean;
}

export default function TiltedCard(props: TiltedCardProps): JSX.Element;
