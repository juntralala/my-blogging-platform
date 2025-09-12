'use client';
import Link from "next/link";
import { SearchIcon } from "../atoms/icons/SearchIcon";
import { useState } from "react";
import { RoundInputField } from "../molecules/RoundInputField";

export function Navbar({ searchIcon = true }) {
    const [showSearch, setShowSearch] = useState(false);

    function onClickHandler() {
        setShowSearch(!showSearch);
    }

    return (
        <nav className="self-center z-50 rounded-full bg-[rgba(1,24,216,0.8)] pt-2 pb-2 ps-8 pe-9 w-[95%] border-2 border-[#d5e5f5] hover:bg-[rgba(1,24,216,1)] duration-150 ease-in-out">
            <div className="self-center opacity-100 flex gap-3 justify-between">
                <div className="self-center">
                    <span className="text-center text-3xl font-semibold">
                        <Link href="/">Another Blogging Website</Link>
                    </span>
                </div>
                <div className="self-center flex gap-6 items-center content-center text-xl">
                    {
                        searchIcon &&
                        <div className="cursor-pointer" onClick={onClickHandler}>
                            <SearchIcon size={24} />
                        </div>
                    }
                    <div className="ps-4 pe-4 pt-2 pb-2 cursor-pointer">
                        <Link href="/">Home</Link>
                    </div>
                    <div className="ps-4 pe-4 pt-2 pb-2 cursor-pointer">
                        <Link href="/about" prefetch={false}>About</Link>
                    </div>
                    <div className="self-stretch text-center grid place-items-center box-border w-36 bg-[#FFF8F8] text-[#0118D8] rounded-lg cursor-pointer hover:border-2 hover:border-[#FFF8F8] hover:bg-[#0118D8] hover:text-gray-50 hover:duration-150 hover:ease-linear hover:delay-100 hover:shadow-md">
                        <Link href="/blogs/editor">Start Writing</Link>
                    </div>
                </div>
            </div>
                <div className={`duration-300 ease-in-out ${
                    showSearch ? "mt-2 opacity-100 max-h-20 translate-0":"mt-0 opacity-0 max-h-0 -translate-4"
                }`}>
                    <RoundInputField icon={<SearchIcon/>} className="m-0 ps-0 pb-0 pt-0 pe-0" inputClassName="text-base"/>
                </div>
        </nav>
    );
}