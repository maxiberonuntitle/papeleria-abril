import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ScrollAnimateProps {
  children: React.ReactNode;
  animation?: 'fade' | 'left' | 'right' | 'up' | 'scale' | 'rotate' | 'flip' | 'bounce' | 'slide' | 'zoom' | 'float';
  delay?: number;
  className?: string;
  threshold?: number;
  triggerOnce?: boolean;
}

export const ScrollAnimate: React.FC<ScrollAnimateProps> = ({
  children,
  animation = 'fade',
  delay = 0,
  className = '',
  threshold = 0.3,
  triggerOnce = true
}) => {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold,
    triggerOnce
  });

  const getAnimationClass = () => {
    switch (animation) {
      case 'left':
        return 'scroll-animate-left';
      case 'right':
        return 'scroll-animate-right';
      case 'up':
        return 'scroll-animate-up';
      case 'scale':
        return 'scroll-animate-scale';
      case 'rotate':
        return 'scroll-animate-rotate';
      case 'flip':
        return 'scroll-animate-flip';
      case 'bounce':
        return 'scroll-animate-bounce';
      case 'slide':
        return 'scroll-animate-slide';
      case 'zoom':
        return 'scroll-animate-zoom';
      case 'float':
        return 'scroll-animate-float';
      default:
        return 'scroll-animate';
    }
  };

  const getDelayClass = () => {
    if (delay === 0) return '';
    if (delay <= 0.2) return 'scroll-delay-1';
    if (delay <= 0.4) return 'scroll-delay-2';
    if (delay <= 0.6) return 'scroll-delay-3';
    if (delay <= 0.8) return 'scroll-delay-4';
    return 'scroll-delay-5';
  };

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClass()} ${getDelayClass()} ${className} ${
        isVisible ? 'active' : ''
      }`}
      style={delay > 0 ? { transitionDelay: `${delay}s` } : {}}
    >
      {children}
    </div>
  );
};
