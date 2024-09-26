'use client'

import { ImageField } from '@prismicio/client';
import { PrismicImage } from '@prismicio/react';
import Link from 'next/link';
import React, { useState } from 'react';
// import { Menu, X } from 'lucide-react';

const Hamburger = () => {
    return (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="path-1-inside-1_56_436" fill="white">
                <path d="M25.812 0H10.206C4.104 0 0 4.284 0 10.656V25.362C0 31.716 4.104 36 10.206 36H25.812C31.914 36 36 31.716 36 25.362V10.656C36 4.284 31.914 0 25.812 0Z" />
            </mask>
            <path d="M25.812 0H10.206C4.104 0 0 4.284 0 10.656V25.362C0 31.716 4.104 36 10.206 36H25.812C31.914 36 36 31.716 36 25.362V10.656C36 4.284 31.914 0 25.812 0Z" fill="white" />
            <path d="M25.812 -1H10.206V1H25.812V-1ZM10.206 -1C6.91222 -1 4.08968 0.161756 2.09258 2.24678C0.0990597 4.32807 -1 7.25323 -1 10.656H1C1 7.68677 1.95294 5.28393 3.53692 3.63022C5.11731 1.98024 7.39778 1 10.206 1V-1ZM-1 10.656V25.362H1V10.656H-1ZM-1 25.362C-1 28.7565 0.0995097 31.6772 2.093 33.7559C4.08998 35.8383 6.91226 37 10.206 37V35C7.39774 35 5.11702 34.0197 3.5365 32.3716C1.95249 30.7198 1 28.3215 1 25.362H-1ZM10.206 37H25.812V35H10.206V37ZM25.812 37C29.1059 37 31.9242 35.8381 33.9169 33.755C35.9058 31.6758 37 28.7553 37 25.362H35C35 28.3227 34.0512 30.7212 32.4716 32.3725C30.8958 34.0199 28.6201 35 25.812 35V37ZM37 25.362V10.656H35V25.362H37ZM37 10.656C37 7.25445 35.9062 4.32941 33.9173 2.24769C31.9245 0.161924 29.106 -1 25.812 -1V1C28.62 1 30.8955 1.98008 32.4712 3.62931C34.0508 5.28259 35 7.68555 35 10.656H37Z" fill="#090909" fillOpacity="0.06" mask="url(#path-1-inside-1_56_436)" />
            <rect x="10" y="11" width="16" height="1.33333" rx="0.666667" fill="black" />
            <rect x="10" y="17.6665" width="16" height="1.33333" rx="0.666667" fill="black" />
            <rect x="10" y="24.3335" width="16" height="1.33333" rx="0.666667" fill="black" />
        </svg>

    )
}

const Navigation = ({ links, siteLogo }: { links: { label: string; link: string }[]; siteLogo: ImageField }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav>
            <div className="flex justify-between h-16">
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6 md:gap-10">
                    {links.map((item) => (
                        <Link
                            key={item.label}
                            href={item.link}
                            className="hover:underline font-semibold tracking-tight text-slate-800"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={toggleDrawer}
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    >
                        <Hamburger />
                    </button>
                </div>
            </div>


            {/* Mobile Navigation Drawer */}
            <div className={`fixed inset-y-0 left-0 max-w-xs w-full bg-[#FFF7F7] shadow-lg z-50 transform ease-in-out transition-all duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex items-center justify-between p-4">
                    <PrismicImage field={siteLogo} className="h-5" />
                    <button onClick={toggleDrawer} className="px-2 py-0.5 bg-white border rounded">
                        <span className="text-[1.5rem] leading-[1.5rem]">&times;</span>
                    </button>
                </div>
                <div className="px-4 py-2">
                    {links.map((item) => (
                        <Link
                            key={item.label}
                            href={item.link}
                            onClick={() => toggleDrawer()}
                            className="block py-2 text-base font-medium text-gray-700 hover:text-gray-900"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>

            {
                isOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleDrawer}></div>
                )
            }
        </nav>
    );
};

export default Navigation;