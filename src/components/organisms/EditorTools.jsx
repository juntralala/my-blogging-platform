export function EditorTools({className = ""}) {
    return (
        <div className={"bg-[#E9DFC3] fixed h-[80dvh] rounded-full drop-shadow-xl " + className}>
            <ul className="flex flex-col min-w-13 items-center justify-center h-full gap-6">
                <li className="bg-[#1B56FD] hover:bg-[#0118D8] w-9 h-9 flex items-center justify-center rounded-md cursor-pointer">B</li>
                <li className="bg-[#1B56FD] hover:bg-[#0118D8] w-9 h-9 flex items-center justify-center rounded-md cursor-pointer"><i>I</i></li>
                <li className="bg-[#1B56FD] hover:bg-[#0118D8] w-9 h-9 flex items-center justify-center rounded-md cursor-pointer">H1</li>
            </ul>
        </div>
    );
}