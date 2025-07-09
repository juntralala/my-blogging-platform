import Link from "next/link";
import { SearchIcon } from "../atoms/icons/SearchIcon";

export function Navbar({ searchIcon = true }) {
    return (
        <nav className="self-center z-50 rounded-full bg-[rgba(1,24,216,0.8)] pt-2 pb-2 ps-8 pe-8 w-[95%] border-2 border-[#d5e5f5] hover:bg-[rgba(1,24,216,1)] duration-150 ease-in-out">
            <div className="self-center opacity-100 flex gap-3 justify-between">
                <div className="self-center">
                    <span className="text-center text-3xl font-semibold">
                        <Link href="/">Another Blogging Website</Link>
                    </span>
                </div>
                <div className="self-center flex gap-6 items-center content-center text-xl">
                    {
                        searchIcon &&
                        <div className="cursor-pointer">
                            <SearchIcon size={24} />
                        </div>
                    }
                    <div className="ps-4 pe-4 pt-2 pb-2 cursor-pointer">
                        <Link href="/">Home</Link>
                    </div>
                    <div className="ps-4 pe-4 pt-2 pb-2 cursor-pointer">
                        <Link href="/about" prefetch={false}>About</Link>
                    </div>
                    <div className="self-stretch text-center grid place-items-center box-border w-36 bg-[#FFF8F8] text-[#0118D8] rounded-lg cursor-pointer hover:border-3 hover:border-[#FFF8F8] hover:bg-[#0118D8] hover:text-gray-50 hover:duration-150 hover:ease-linear hover:delay-100 hover:shadow-md">
                        <Link href="/blogs/editor">Start Writing</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}