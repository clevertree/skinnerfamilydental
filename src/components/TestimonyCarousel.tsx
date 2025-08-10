'use client'

import React from "react";
import Carousel from "react-material-ui-carousel";

const testimonies = [
    {
        text: `I have been with Dr. Skinner for years. I really don't like going to the dentist until I went to this office. Her entire staff is wonderful and Dr. Skinner is phenomenal. I had been to two other dentists and am so fortunate that I found such a great one with Dr. Skinner and her staff.`,
        author: "Jo Ann",
    },
    {
        text: `Mrs. Lori is the BEST! I've been going to her for years! We have the best conversations! Such a sweet and kind person! And Mrs. Toni is Awesome! She always finds a way to fit me in when I have to reschedule! It's a pleasure being a client at such a great establishment! The whole staff is great!`,
        author: "Jenna P",
    },
    {
        text: `I love Dr. Skinner and the staff at the office, have been going for years and my family and I have always had the very best of care! I trust her and recommend her and her staff very highly.`,
        author: "Patty B",
    },
];

const TestimonyCarousel: React.FC = () => (
    <div className="py-8 bg-[#7ac0b4cc]">
        <Carousel
            height={240}
            autoPlay
            interval={7000}
            indicators={true}
            navButtonsAlwaysInvisible={false}
            animation="slide"
        >
            {testimonies.map((item, idx) => (
                <div key={idx} className='py-10 max-w-[60vw] mx-auto'>
                    <p className="lightpreamble text-center">{item.text}</p>
                    <p className="lightpreamble text-center font-bold pt-8">{item.author}</p>
                </div>
            ))}
        </Carousel>
    </div>
);

export default TestimonyCarousel;

