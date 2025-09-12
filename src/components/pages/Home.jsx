import Link from "next/link";
import FloatNavbarContainer from "../atoms/FloatNavbarContainer";
import { BlankImage } from "../atoms/icons/BlankImage";
import { MainBackground } from "../organisms/background/MainBackground";
import { Navbar } from "../organisms/Navbar";

let blogDatas = [
    {
        id: "b001",
        thumbnailUrl: "http://localhost:3000/blank_image.svg",
        title: "Ucup Bermain di Nebula",
        summry: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vel aspernatur deleniti, dolor quasi fugit, ullam totam consequuntur, at laborum ab. Amet sit maiores non? Voluptates ad ab sunt aut!",
        blogUrl: "http://localhost:3000/blogs/dummy",
        publihedAt: "20 Mei 2025"
    },
    {
        id: "b002",
        thumbnailUrl: "http://localhost:3000/blank_image.svg",
        title: "Amat Memancing Belut di Sawah",
        summry: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vel aspernatur deleniti, dolor quasi fugit, ullam totam consequuntur, at laborum ab. Amet sit maiores non? Voluptates ad ab sunt aut!",
        blogUrl: "http://localhost:3000/blogs/dummy",
        publihedAt: "21 Mei 2025"
    },
    {
        id: "b003",
        thumbnailUrl: "http://localhost:3000/blank_image.svg",
        title: "Megawati Turun Tahta",
        summry: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vel aspernatur deleniti, dolor quasi fugit, ullam totam consequuntur, at laborum ab. Amet sit maiores non? Voluptates ad ab sunt aut!",
        blogUrl: "http://localhost:3000/blogs/dummy",
        publihedAt: "22 Mei 2025"
    },
    {
        id: "b004",
        thumbnailUrl: "http://localhost:3000/blank_image.svg",
        title: "Opposite Democracy",
        summry: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vel aspernatur deleniti, dolor quasi fugit, ullam totam consequuntur, at laborum ab. Amet sit maiores non? Voluptates ad ab sunt aut!",
        blogUrl: "http://localhost:3000/blogs/dummy",
        publihedAt: "23 Mei 2025"
    }
];

export default async function Home() {
    return (
        <MainBackground>
            <FloatNavbarContainer>
                <Navbar />
            </FloatNavbarContainer>
            <div className="pt-20"></div>
            <div className="ps-18 pe-18">
                <div className="grid md:grid-cols-2 gap-5 text-black">
                    {blogDatas.map(blog => <BlogCard key={blog.id} title={blog.title} thumbnail={blog.thumbnailUrl} summary={blog.summry} url={blog.blogUrl} published={blog.publihedAt}/>)}
                </div>
            </div>
        </MainBackground>
    );
}

function BlogCard({title, thumbnail, summary, url, published}) {
    return (
        <div className="bg-[#FFF8F8] mt-1 flex justify-around shadow-md gap-2 ps-5 pe-5 pb-2 items-stretch rounded-2xl h-80">
            <div className="self-center flex-1">
                <img src={thumbnail}/>
            </div>
            <div className="pt-8 pb-7 flex flex-col flex-1">
                <h1 className="text-3xl font-semibold text-[#0118D8]">{title}</h1>
                <p className="text-base text-gray-600">{published}</p>
                <p className="text-lg wrap-anywhere overflow-y-clip text-ellipsis max-h-[60%]">
                {summary}
                </p>
                <p className="text-[#1B56FD] font-medium cursor-pointer text-lg mt-auto">
                    <Link href={url} >Read more &raquo;</Link>
                </p>
            </div>
        </div>
    );
}