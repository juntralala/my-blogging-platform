export function EditorTools({ className = "", editor }) {
    return (
        <div className={"bg-[#FFF8F8] fixed h-[80dvh] rounded-full drop-shadow-xl " + className}>
            <ul className="flex flex-col min-w-13 items-center justify-center h-full gap-6">
                <li  onClick={() => editor.chain().focus().toggleBold().run()} className="bg-[#1B56FD] hover:bg-[#0118D8] w-9 h-9 flex items-center justify-center rounded-md cursor-pointer">B</li>
                <li  onClick={() => editor.chain().focus().toggleItalic().run()} className="bg-[#1B56FD] hover:bg-[#0118D8] w-9 h-9 flex items-center justify-center rounded-md cursor-pointer"><i>I</i></li>
                <li onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className="bg-[#1B56FD] hover:bg-[#0118D8] w-9 h-9 flex items-center justify-center rounded-md cursor-pointer">H1</li>
            </ul>
        </div>
    );
}