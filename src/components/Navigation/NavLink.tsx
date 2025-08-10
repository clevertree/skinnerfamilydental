"use client";
import React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    activeClassName?: string;
    className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({
                                             href,
                                             children,
                                             activeClassName = "text-black font-bold",
                                             className = ""
                                         }) => {
    const pathname = usePathname();
    const isActive = pathname === href;
    return (
        <Link
            href={href}
            className={
                className + (isActive ? ` ${activeClassName}` : "")
            }
            aria-current={isActive ? "page" : undefined}
        >
            {children}
        </Link>
    );
};

export default NavLink;

