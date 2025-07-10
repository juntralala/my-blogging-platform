'use client';

import { useEffect, useState } from "react";


export default function FloatNavbarContainer({ children }) {
    const [isShow, setIsShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(function () {
        const handleScroll = function () {
            const scrollY = window.scrollY;
            if (scrollY > lastScrollY && lastScrollY > 140) {
                setIsShow(false);
            } else {
                setIsShow(true);
            }
            setLastScrollY(scrollY);
        }

        window.addEventListener("scroll", handleScroll);
        return function () { window.removeEventListener("scroll", handleScroll) };
    }, [lastScrollY]);

    return <div key="main-navbar" className={`fixed top-2 flex justify-center w-dvw duration-700 ease-in ${isShow ? "translate-y-0" : "-translate-y-20"}`}>
        {children}
    </div>;
}