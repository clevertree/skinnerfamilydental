import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavLink from '@components/Navigation/NavLink';
import ResponsiveMenu from "@components/Navigation/ResponsiveMenu";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretDown, faPhone} from '@fortawesome/free-solid-svg-icons';
import Editable from "@components/Editable/Editable";
import {CONTACT_PHONE} from "@constants";

const Header: React.FC = () => {
    return (
        <header>
            <div id="r3894" className="row ">
                <div
                    className="flex flex-col gap-2 sm:gap-8 sm:flex-row justify-between sm:justify-end items-center">
                    <div className="">
                        <p className="text leading-[1.1em] text-xl text-right font-extrabold">
                            <a href="/contact">
                                <Editable name='HEADER_MAKE_APPOINTMENT'/>
                            </a>
                        </p>
                    </div>
                    <div className="">
                        <p className="text leading-[1.1em] text-xl text-right font-extrabold">
                            <a href={`tel:+1${CONTACT_PHONE.replace(/\D+/g, '')}`}>
                                <FontAwesomeIcon width={18} height={18} icon={faPhone} className='mr-2'/>
                                <Editable name='CONTACT_PHONE'/>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div id="r5000" className="row ">
                <div className="container container-fixed colsStack">
                    <div id="c5000" className="col col-md-3 col-sm-6 col-lg-3 flexCol">
                        <div id="m3175" className="module autospacer"></div>
                        <div className="flexWrap">
                            <Link href="/" title="" aria-label="" className="imageModuleWrap" id="w_m3130"
                                  data-track-action="internal_link_clicked">
                                <Image src="/assets/imgs/site-logo.png"
                                       alt="Stephanie L. Skinner Family Dental Logo" width={200} height={119} priority/>
                            </Link>
                        </div>
                        <div id="m4279" className="module autospacer"></div>
                    </div>
                    <div id="c4354" className="col col-sm-6 col-lg-9 col-md-9 flexCol">
                        <div id="m4218" className="module autospacer"></div>
                        <div className="flexWrap">
                            <ResponsiveMenu>
                                <li><NavLink href="/">HOME</NavLink>
                                </li>
                                <li><NavLink href="/meet-the-team">MEET THE TEAM</NavLink>
                                </li>
                                <li><NavLink href="/service">
                                    SERVICE
                                    <FontAwesomeIcon width={12} height={12}
                                                     icon={faCaretDown}
                                                     className='ml-2'/>
                                </NavLink>
                                    <ul>
                                        <li><NavLink href="/service/dental-hygiene">Dental
                                            Hygiene</NavLink>
                                        </li>
                                        <li><NavLink href="/service/dental-fillings-and-crowns"
                                        >Dental Fillings and
                                            Crowns</NavLink></li>
                                        <li><NavLink href="/service/cosmetic-implants">Cosmetic
                                            Implants</NavLink>
                                        </li>
                                        <li><NavLink href="/service/full-and-partial-dentures"
                                        >Full and Partial
                                            Dentures</NavLink></li>
                                        <li><NavLink href="/service/sedation-dentistry">Sedation
                                            Dentistry</NavLink></li>
                                        <li><NavLink href="/service/emergency-dentistry">Emergency
                                            Dentistry</NavLink></li>
                                        <li><NavLink href="/service/paperwork">Patient
                                            Paperwork</NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li><NavLink href="/the-office">THE OFFICE</NavLink></li>
                                <li className="hidden">
                                    <NavLink href="/blog"
                                             data-track-action="internal_link_clicked">BLOG</NavLink>
                                </li>
                                <li><NavLink href="/contact">CONTACT</NavLink></li>
                            </ResponsiveMenu>
                        </div>
                        <div id="m4149" className="module autospacer"></div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
