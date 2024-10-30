"use client";

import { useState } from "react";
import Link from "next/link";

const NAVBAR_ITEMS = [
    {
        link: "/",
        name: "Intro",
    },
    {
        link: "/",
        name: "Work",
    },
    {
        link: "/",
        name: "Projects",
    },
    {
        link: "/",
        name: "Education",
    },
    {
        link: "/",
        name: "Skills",
    },
    {
        link: "/",
        name: "Certification",
    },
    {
        link: "/",
        name: "Contact",
    },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="sticky top-0 w-full">
            <div className="mx-auto py-4 max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <Link
                            href="/"
                            className="py-2 font-bold text-white md:text-3xl lg:text-4xl"
                        >
                            Nikhil Pinto
                        </Link>
                    </div>
                    <div className="hidden items-center space-x-8 md:flex">
                        {NAVBAR_ITEMS.map((navItem) => (
                            <Link
                                key={navItem.name}
                                href={navItem.link}
                                className="text-white hover:text-gray-300 md:text-xl lg:text-2xl"
                            >
                                {navItem.name}
                            </Link>
                        ))}
                    </div>
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={toggleMenu}
                            className={`transform text-white transition-transform duration-300 focus:outline-none ${isOpen ? "rotate-90" : ""}`}
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d={
                                        isOpen
                                            ? "M6 18L18 6M6 6l12 12"
                                            : "M4 6h16M4 12h16M4 18h16"
                                    }
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={`overflow-hidden transition-all duration-1000 ease-in-out md:hidden ${isOpen ? "max-h-screen" : "max-h-0"}`}
            >
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                    {NAVBAR_ITEMS.map((navItem) => (
                        <Link
                            key={navItem.name}
                            href={navItem.link}
                            className="block rounded-md px-3 py-2 text-base font-medium text-white"
                        >
                            {navItem.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
