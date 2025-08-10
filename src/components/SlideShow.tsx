'use client';

import React from 'react';
import Image from 'next/image';
import Carousel from 'react-material-ui-carousel';

interface SlideShowProps {
    images: { src: string; alt?: string; width: number; height: number }[];
    interval?: number;
}

const SlideShow: React.FC<SlideShowProps> = ({images, interval = 4000}) => {
    return (
        <Carousel
            height={images[0]?.height || 400}
            autoPlay
            interval={interval}
            indicators={true}
            navButtonsAlwaysInvisible={false}
            animation="fade"
        >
            {images.map((img) => (
                <div key={img.src} style={{width: img.width, height: img.height, position: 'relative'}}>
                    <Image src={img.src} alt={img.alt || ''} width={img.width} height={img.height}
                           style={{objectFit: 'contain', width: '100%', height: '100%'}}/>
                </div>
            ))}
        </Carousel>
    );
};

export default SlideShow;
