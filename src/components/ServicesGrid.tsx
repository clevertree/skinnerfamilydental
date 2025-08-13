import React from 'react';
import AnimationWrapper from "@components/Animation/AnimationWrapper";
import Image from "next/image";

const services = [
    {
        href: "/service",
        img: "/uploads/img/Dr.StephanieL.Skinner-FamilyDentistry-0051.jpg",
        title: "General Dentistry",
        desc: "We are a complete family dental practice offering dentistry to children and adults of all ages."
    },
    {
        href: "/service",
        img: "/uploads/img/Dr.StephanieL.Skinner-FamilyDentistry-0053.jpg",
        title: "Hygiene & Whitening",
        desc: "Our dental hygienists consult with each patient to educate you on proper dental habits."
    },
    {
        href: "/service",
        img: "/uploads/img/Dr.StephanieL.Skinner-FamilyDentistry-0054.jpg",
        title: "Emergency Care",
        desc: "Emergency appointments are available if you need to be seen right away or are in pain."
    },
    {
        href: "/service",
        img: "/uploads/img/Dr.StephanieL.Skinner-FamilyDentistry-0056.jpg",
        title: "Sedation Dentistry",
        desc: "We are happy to offer sedation services to help make your procedure more comfortable."
    },
    {
        href: "/service",
        img: "/uploads/img/Dr.StephanieL.Skinner-FamilyDentistry-0057.jpg",
        title: "Cosmetic Implants",
        desc: "We offer a variety of implant dental services customized to your specific needs."
    },
    {
        href: "/service",
        img: "/uploads/img/Dr.StephanieL.Skinner-FamilyDentistry-0058.jpg",
        title: "In-house Membership Plan",
        desc: "In-house Membership Plan"
    }
];

const ServicesGrid: React.FC = () => (
    <div id="r2961" className="row ">
        <div className="container container-fluid colsStack">
            {services.map((service) => (
                <div key={service.title}
                     className="col col-lg-4 col-md-6 col-sm-12 flexCol my-4 bg-white border-b-[1px] border-l-[1px] border-gray-200">
                    <div className="text-center">
                        <AnimationWrapper method='zoom-in'>
                            <a href={service.href} className="imageModuleWrap" style={{}}>
                                <Image src={service.img} alt={service.title} width={150} height={150}
                                       className="mb-8 m-auto rounded-3xl"/>
                            </a>
                        </AnimationWrapper>
                        <div className="module text">
                            <h2 className="subtitle" style={{textAlign: "center"}}>{service.title}</h2>
                        </div>
                        <div className="module text">
                            <p className="bodytext" style={{textAlign: "center"}}>{service.desc}</p>
                        </div>
                    </div>
                    <div className="module autospacer"/>
                </div>
            ))}
        </div>
    </div>
);

export default ServicesGrid;

