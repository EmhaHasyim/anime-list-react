import React, { useState, useEffect, useRef } from 'react';

interface LazyImageProps {
    src: string;
    alt: string;
    [prop: string]: any;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, ...props }) => {
    const [imageSrc, setImageSrc] = useState<string>('');
    const imageRef = useRef<HTMLImageElement>(null);

    const onLoad = (event: React.SyntheticEvent<HTMLImageElement, Event>): void => {
        event.currentTarget.classList.add('loaded');
    };

    const onError = (event: React.SyntheticEvent<HTMLImageElement, Event>): void => {
        event.currentTarget.classList.add('has-error');
    };

    useEffect(() => {
        let observer: IntersectionObserver;
        let didCancel = false;

        if (imageRef.current && imageSrc !== src) {
            if ('IntersectionObserver' in window) {
                observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (!didCancel && (entry.intersectionRatio > 0 || entry.isIntersecting)) {
                                setImageSrc(src);
                                if (observer && imageRef.current) {
                                    observer.unobserve(imageRef.current);
                                }
                            }
                        });
                    },
                    {
                        threshold: 0.01,
                        rootMargin: '75%',
                    }
                );
                if (imageRef.current) {
                    observer.observe(imageRef.current);
                }
            } else {
                // Fallback for browsers without IntersectionObserver support
                setImageSrc(src);
            }
        }
        return () => {
            didCancel = true;
            // Make sure we cancel the subscription to the observer
            if (observer && imageRef.current) {
                observer.unobserve(imageRef.current);
            }
        };
    }, [src, imageSrc]);

    return (
        <img
            ref={imageRef}
            src={imageSrc}
            alt={alt}
            onLoad={onLoad}
            onError={onError}
            {...props}
        />
    );
};

export default LazyImage;
