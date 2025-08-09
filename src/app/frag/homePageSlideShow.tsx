'use client';

import AnimationWrapper from "@components/Animation/AnimationWrapper";
import React, {useEffect, useState} from "react";
import {Box} from "@mui/system";
import {Fade} from "@mui/material";
import Image from "next/image";

export default function HomePageSlideShow() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        '/uploads/imgs/Dr.StephanieL.Skinner-FamilyDentistry-001.jpg',
        '/uploads/imgs/Dr.StephanieL.Skinner-FamilyDentistry-002.jpg',
        '/uploads/imgs/Dr.StephanieL.Skinner-FamilyDentistry-003.jpg',
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 9000); // Change slide every 9 seconds
        return () => clearInterval(timer);
    }, [slides.length]);


    return <Box className={'relative bg-white md:h-[28rem] lg:h-[32rem]'}>

        <Box className='relative h-[32vw] md:w-full md:h-full'>
            {slides.map((slideURL, index) => (
                <Fade in={index === currentSlide} key={slideURL} timeout={2000}>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            display: index === currentSlide ? 'flex' : 'none', // Control visibility
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '2rem',
                        }}
                    >
                        <Image src={slideURL} alt={slideURL} fill objectFit='cover'/>
                    </Box>
                </Fade>
            ))}
        </Box>
        <div className="md:absolute md:top-0 z-10" style={{}}>
            <div className="">
                <div
                    className="md:max-w-[20rem] lg:max-w-[30rem] bg-[#5d829bcc] text-wrap text-white p-6 py-8 md:m-[4rem] md:rounded-md"
                >
                    <div id="" className="text">
                        <p className="text-[26px] md:text-[36px] lg:text-[50px] leading-[1.1em] text-left text-white font-extrabold mb-[30px]">
                            Compassionate Dental Care
                            <br/>
                            For the Entire Family
                        </p>
                    </div>
                    <AnimationWrapper method='zoom-in'>
                        <a
                            id="m4529"
                            className="module button2 animated animationDone"
                            href="/meet-the-team"
                            title=""
                            role="button"
                            data-track-event="click"
                            data-track-action="internal_link_clicked"
                        >
                            {" "}
                            <span className="buttonLabel labelRight">LEARN MORE</span>{" "}
                        </a>
                    </AnimationWrapper>
                </div>
            </div>
        </div>
    </Box>;
}
