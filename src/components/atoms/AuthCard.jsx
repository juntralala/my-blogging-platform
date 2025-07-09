export function AuthCard({children, title, description}) {
    return  <div className="flex justify-center content-center h-dvh text-gray-800 duration-1000 animate-[fadeIn_1s_linear]">
            <div className="bg-violet-50 w-110 h-160 self-center rounded-2xl">
                <div className="flex flex-col justify-center text-center p-10">
                    <h1 className="text-gray-900 text-3xl mb-2 font-semibold">{title}</h1>
                    <p className="text-gray-600">{description}</p>
                </div>
                <form action="" className="ps-10 pe-10">
                    {children}
                </form>
            </div>
        </div>
}