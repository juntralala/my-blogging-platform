'use client';
import { useRef, useState } from "react";
import { MainBackground } from "../organisms/background/MainBackground";
import { EditorTools } from "../organisms/EditorTools";

export function EditorPage() {
    return (
        <MainBackground>
            <div className="relative bg-amber-400">

            </div>
            <div className="flex fixed h-screen items-center">
                <EditorTools className="ms-3 mt-auto" />
            </div>
            <div className="flex w-screen justify-center">
                <div className="ps-10 pe-10 pb-5 w-225 bg-[#FFF8F8] rounded-lg border-2 border-gray-200 text-gray-800 mt-10 shadow-sm">
                    <form action="" className="flex flex-col gap-6">
                        <div>
                            <label id="fileLabel" htmlFor="thumbnail">
                            <input type='file' accept="image/*" title="Choose a video please" id="thumbnail" className="file-input w-100 text-[rgba(0,0,0,0)]" />
                            </label>
                        </div>
                        {/* <label htmlFor="thumbnail" className="">
                            <span>Choose Your file</span>
                            <input type="file" id="thumbnail" accept="image/*" className="file-input" />
                        </label> */}
                        <input type="text" placeholder="Judul Blog Kamu..." className="text-5xl bg-white border-3 rounded-lg border-gray-300 focus:border-[#1B56FD] outline-0" />
                        <div contentEditable data-placeholder="Mulai menulis blog kamu..." className="text-xl bg-white min-h-150 rounded-lg border-3 border-gray-300 focus:border-[#1B56FD] outline-0 empty:before:content-[attr(data-placeholder)] empty:before:text-gray-400 empty:before:pointer-events-none"></div>
                    </form>
                </div>
            </div>
        </MainBackground>
    );
}