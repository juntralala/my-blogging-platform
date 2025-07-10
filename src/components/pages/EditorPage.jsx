'use client';
import { useRef, useState, useEffect } from "react";
import { MainBackground } from "../organisms/background/MainBackground";
import { EditorTools } from "../organisms/EditorTools";
import { BlankImage } from "../atoms/icons/BlankImage";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { PillButton } from "../atoms/PillButton";
import { LeftArrow } from "../atoms/icons/LeftArrow";
import { useRouter } from "next/navigation";

export function EditorPage() {
    const [image, setImage] = useState(null);
    const imgRef = useRef(null);
    const router = useRouter();

    const editor = useEditor({
        extensions: [StarterKit],
        content: "Mulai menulis blog kamu!"
    });

    function handleSelectedImage(e) {
        let file = URL.createObjectURL(e.target.files[0]);
        setImage(file);
        imgRef.current.src = file;
    }

    useEffect(() => {
        imgRef.current.style.display = (image !== null) ? "block" : "none";
    }, [image]);

    return (
        <MainBackground>
            <div className="absolute h-[40dvh]">
                <div onClick={() => router.back()} className="p-1.5 sticky top-2 ms-2 bg-[#1B56FD] rounded-full cursor-pointer">
                    <div className="text-white">
                        <LeftArrow />
                    </div>
                </div>
            </div>
            <div className="flex fixed h-screen items-center">
                <EditorTools className="ms-3 mt-auto" editor={editor} />
            </div>
            <div className="flex w-screen justify-center">
                <div className="ps-10 pe-10 pb-5 pt-5 w-225 bg-[#FFF8F8] rounded-lg border-2 border-gray-200 text-gray-800 mt-10 shadow-sm">
                    <form action="" className="flex flex-col gap-6">
                        <div>
                            <label id="fileLabel" htmlFor="thumbnail" className="cursor-pointer">
                                <input type='file' onChange={handleSelectedImage} accept="image/*" title="Choose a image please" id="thumbnail" className="file-input w-100" />
                                <div className="w-80 h-80 overflow-hidden mt-2">
                                    <img ref={imgRef} className="h-full w-full object-cover" />
                                    <div className="opacity-20"><BlankImage width="100%" /></div>
                                </div>
                            </label>
                        </div>
                        <input type="text" placeholder="Judul Blog Kamu..." className="text-3xl font-bold bg-white p-1 border-3 rounded-lg border-gray-300 focus:border-[#1B56FD] outline-0" />
                        <div className="prose max-w-none">
                            {/* <div contentEditable className="text-xl bg-white min-h-150 rounded-lg border-3 border-gray-300 focus:border-[#1B56FD] outline-0 empty:before:content-[attr(data-placeholder)] empty:before:text-gray-400 empty:before:pointer-events-none"></div> */}
                            <EditorContent editor={editor} onClick={() => editor.commands.focus()} className="text-xl ps-2 pe-2 bg-white min-h-80 rounded-lg border-3 border-gray-300 focus-within:border-[#1B56FD]" />
                        </div>
                        <PillButton className="text-6xl flex-none">Submit</PillButton>
                    </form>
                </div>
            </div>
        </MainBackground>
    );
}