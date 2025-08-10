"use client";
import {Button} from "@mui/material";
import React, {useState} from "react";
import styles from "./ResponsiveMenu.module.scss"

interface ResponsiveMenuProps {
    children: React.ReactNode;
}

const ResponsiveMenu: React.FC<ResponsiveMenuProps> = ({children}) => {
    const [open, setOpen] = useState(false);
    console.log(open);

    return (
        <nav tabIndex={-1} className="w-full">
            {/* Desktop/Tablet */}
            <ul className={"hidden lg:flex flex-row gap-6 py-4 justify-end " + styles.menuDesktop}>
                {children}
            </ul>
            {/* Mobile */}
            <div className="lg:hidden flex float-right">
                <Button
                    color='inherit'
                    aria-label="Open menu"
                    onClick={() => setOpen(true)}
                    className="p-2 focus:outline-none"
                >
                    <span className="material-icons text-4xl">☰</span>
                </Button>
                {/* Overlay */}
                {open && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-40 z-40"
                        onClick={() => setOpen(false)}
                    />
                )}
                {/* Sliding Menu */}
                <div
                    className={`fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ${styles.menuMobile} ${open ? styles.menuOpen : styles.menuClose}`}
                >
                    <div className='absolute right-0'>
                        <Button
                            color='inherit'
                            aria-label="Close menu"
                            onClick={() => {
                                setOpen(false)
                            }}
                            className="p-4 focus:outline-none"
                        >
                            <span className="material-icons text-3xl font-bold">✕</span>
                        </Button>
                    </div>
                    <ul className="flex flex-col gap-4 m-4 p-4">
                        {children}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default ResponsiveMenu;

