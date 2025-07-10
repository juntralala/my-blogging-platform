export function PillButton({ children , className}) {
    return <button className={"btn text-lg min-w-10 rounded-full text-violet-50 flex-11/12 h-14 bg-linear-[135deg,#386dff_0%,#0118D8_100%] hover:ease-in hover:transition hover:delay-100 hover:duration-400 hover:-translate-y-1 " + className}>{children}</button>
}