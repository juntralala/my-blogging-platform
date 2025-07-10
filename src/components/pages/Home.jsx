import Link from "next/link";
import FloatNavbarContainer from "../atoms/FloatNavbarContainer";
import { BlankImage } from "../atoms/icons/BlankImage";
import { MainBackground } from "../organisms/background/MainBackground";
import { Navbar } from "../organisms/Navbar";

export default async function Home() {
    return (
        <MainBackground>
            <FloatNavbarContainer>
                <Navbar />
            </FloatNavbarContainer>
            <div className="pt-20"></div>
            <div className="ps-18 pe-18">
                <div className="grid md:grid-cols-2 gap-5 text-black">
                    <div className="bg-[#FFF8F8] mt-1 flex justify-around shadow-md gap-4 ps-5 pe-5 pt-2 pb-2 items-stretch rounded-2xl h-80">
                        <div className="self-center flex-1">
                            <BlankImage width="100%" />
                        </div>
                        <div className="pt-8 pb-7 flex flex-col flex-1">
                            <h1 className="text-3xl font-semibold text-[#0118D8]">Title Of Article</h1>
                            <p className="text-base text-gray-600">20 mei 2025</p>
                            <p className="text-lg wrap-anywhere overflow-y-clip text-ellipsis max-h-[60%]">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum laborum provident in voluptas earum velit fugit placeat voluptatem optio! Cum.
                            </p>
                            <p className="text-[#1B56FD] font-medium cursor-pointer text-lg mt-auto">
                                <Link href="/blogs/dummy">Read more &raquo;</Link>
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#FFF8F8] mt-1 flex justify-around shadow-md gap-4 ps-5 pe-5 pt-2 pb-2 items-stretch rounded-2xl h-80">
                        <div className="self-center flex-1">
                            <BlankImage width="100%" />
                        </div>
                        <div className="pt-8 pb-7 flex flex-col flex-1">
                            <h1 className="text-3xl font-semibold text-[#0118D8]">Title Of Article</h1>
                            <p className="text-base text-gray-600">20 mei 2025</p>
                            <p className="text-lg wrap-anywhere overflow-y-clip text-ellipsis max-h-[60%]">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum laborum provident in voluptas earum velit fugit placeat voluptatem optio! Cum.
                            </p>
                            <p className="text-[#1B56FD] font-medium cursor-pointer text-lg mt-auto">
                                <Link href="/blogs/dummy">Read more &raquo;</Link>
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#FFF8F8] mt-1 flex justify-around shadow-md gap-4 ps-5 pe-5 pt-2 pb-2 items-stretch rounded-2xl h-80">
                        <div className="self-center flex-1">
                            <BlankImage width="100%" />
                        </div>
                        <div className="pt-8 pb-7 flex flex-col flex-1">
                            <h1 className="text-3xl font-semibold text-[#0118D8]">Title Of Article</h1>
                            <p className="text-base text-gray-600">20 mei 2025</p>
                            <p className="text-lg wrap-anywhere overflow-y-clip text-ellipsis max-h-[60%]">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum laborum provident in voluptas earum velit fugit placeat voluptatem optio! Cum.
                            </p>
                            <p className="text-[#1B56FD] font-medium cursor-pointer text-lg mt-auto">
                                <Link href="/blogs/dummy">Read more &raquo;</Link>
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#FFF8F8] mt-1 flex justify-around shadow-md gap-4 ps-5 pe-5 pt-2 pb-2 items-stretch rounded-2xl h-80">
                        <div className="self-center flex-1">
                            <BlankImage width="100%" />
                        </div>
                        <div className="pt-8 pb-7 flex flex-col flex-1">
                            <h1 className="text-3xl font-semibold text-[#0118D8]">Title Of Article</h1>
                            <p className="text-base text-gray-600">20 mei 2025</p>
                            <p className="text-lg wrap-anywhere overflow-y-clip text-ellipsis max-h-[60%]">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum laborum provident in voluptas earum velit fugit placeat voluptatem optio! Cum.
                            </p>
                            <p className="text-[#1B56FD] font-medium cursor-pointer text-lg mt-auto">
                                <Link href="/blogs/dummy">Read more &raquo;</Link>
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#FFF8F8] mt-1 flex justify-around shadow-md gap-4 ps-5 pe-5 pt-2 pb-2 items-stretch rounded-2xl h-80">
                        <div className="self-center flex-1">
                            <BlankImage width="100%" />
                        </div>
                        <div className="pt-8 pb-7 flex flex-col flex-1">
                            <h1 className="text-3xl font-semibold text-[#0118D8]">Title Of Article</h1>
                            <p className="text-base text-gray-600">20 mei 2025</p>
                            <p className="text-lg wrap-anywhere overflow-y-clip text-ellipsis max-h-[60%]">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum laborum provident in voluptas earum velit fugit placeat voluptatem optio! Cum.
                            </p>
                            <p className="text-[#1B56FD] font-medium cursor-pointer text-lg mt-auto">
                                <Link href="/blogs/dummy">Read more &raquo;</Link>
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#FFF8F8] mt-1 flex justify-around shadow-md gap-4 ps-5 pe-5 pt-2 pb-2 items-stretch rounded-2xl h-80">
                        <div className="self-center flex-1">
                            <BlankImage width="100%" />
                        </div>
                        <div className="pt-8 pb-7 flex flex-col flex-1">
                            <h1 className="text-3xl font-semibold text-[#0118D8]">Title Of Article</h1>
                            <p className="text-base text-gray-600">20 mei 2025</p>
                            <p className="text-lg wrap-anywhere overflow-y-clip text-ellipsis max-h-[60%]">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum laborum provident in voluptas earum velit fugit placeat voluptatem optio! Cum.
                            </p>
                            <p className="text-[#1B56FD] font-medium cursor-pointer text-lg mt-auto">
                                <Link href="/blogs/dummy">Read more &raquo;</Link>
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#FFF8F8] mt-1 flex justify-around shadow-md gap-4 ps-5 pe-5 pt-2 pb-2 items-stretch rounded-2xl h-80">
                        <div className="self-center flex-1">
                            <BlankImage width="100%" />
                        </div>
                        <div className="pt-8 pb-7 flex flex-col flex-1">
                            <h1 className="text-3xl font-semibold text-[#0118D8]">Title Of Article</h1>
                            <p className="text-base text-gray-600">20 mei 2025</p>
                            <p className="text-lg wrap-anywhere overflow-y-clip text-ellipsis max-h-[60%]">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum laborum provident in voluptas earum velit fugit placeat voluptatem optio! Cum.
                            </p>
                            <p className="text-[#1B56FD] font-medium cursor-pointer text-lg mt-auto">
                                <Link href="/blogs/dummy">Read more &raquo;</Link>
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#FFF8F8] mt-1 flex justify-around shadow-md gap-4 ps-5 pe-5 pt-2 pb-2 items-stretch rounded-2xl h-80">
                        <div className="self-center flex-1">
                            <BlankImage width="100%" />
                        </div>
                        <div className="pt-8 pb-7 flex flex-col flex-1">
                            <h1 className="text-3xl font-semibold text-[#0118D8]">Title Of Article</h1>
                            <p className="text-base text-gray-600">20 mei 2025</p>
                            <p className="text-lg wrap-anywhere overflow-y-clip text-ellipsis max-h-[60%]">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum laborum provident in voluptas earum velit fugit placeat voluptatem optio! Cum.
                            </p>
                            <p className="text-[#1B56FD] font-medium cursor-pointer text-lg mt-auto">
                                <Link href="/blogs/dummy">Read more &raquo;</Link>
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#FFF8F8] mt-1 flex justify-around shadow-md gap-4 ps-5 pe-5 pt-2 pb-2 items-stretch rounded-2xl h-80">
                        <div className="self-center flex-1">
                            <BlankImage width="100%" />
                        </div>
                        <div className="pt-8 pb-7 flex flex-col flex-1">
                            <h1 className="text-3xl font-semibold text-[#0118D8]">Title Of Article</h1>
                            <p className="text-base text-gray-600">20 mei 2025</p>
                            <p className="text-lg wrap-anywhere overflow-y-clip text-ellipsis max-h-[60%]">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum laborum provident in voluptas earum velit fugit placeat voluptatem optio! Cum.
                            </p>
                            <p className="text-[#1B56FD] font-medium cursor-pointer text-lg mt-auto">
                                <Link href="/blogs/dummy">Read more &raquo;</Link>
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#FFF8F8] mt-1 flex justify-around shadow-md gap-4 ps-5 pe-5 pt-2 pb-2 items-stretch rounded-2xl h-80">
                        <div className="self-center flex-1">
                            <BlankImage width="100%" />
                        </div>
                        <div className="pt-8 pb-7 flex flex-col flex-1">
                            <h1 className="text-3xl font-semibold text-[#0118D8]">Title Of Article</h1>
                            <p className="text-base text-gray-600">20 mei 2025</p>
                            <p className="text-lg wrap-anywhere overflow-y-clip text-ellipsis max-h-[60%]">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum laborum provident in voluptas earum velit fugit placeat voluptatem optio! Cum.
                            </p>
                            <p className="text-[#1B56FD] font-medium cursor-pointer text-lg mt-auto">
                                <Link href="/blogs/dummy">Read more &raquo;</Link>
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#FFF8F8] mt-1 flex justify-around shadow-md gap-4 ps-5 pe-5 pt-2 pb-2 items-stretch rounded-2xl h-80">
                        <div className="self-center flex-1">
                            <BlankImage width="100%" />
                        </div>
                        <div className="pt-8 pb-7 flex flex-col flex-1">
                            <h1 className="text-3xl font-semibold text-[#0118D8]">Title Of Article</h1>
                            <p className="text-base text-gray-600">20 mei 2025</p>
                            <p className="text-lg wrap-anywhere overflow-y-clip text-ellipsis max-h-[60%]">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum laborum provident in voluptas earum velit fugit placeat voluptatem optio! Cum.
                            </p>
                            <p className="text-[#1B56FD] font-medium cursor-pointer text-lg mt-auto">
                                <Link href="/blogs/dummy">Read more &raquo;</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </MainBackground>
    );
} 