export function RoundInputField({icon, inputName, placeholder, type = "text", children}) {
    return (
        <div htmlFor={inputName} className="bg-white shadow-sm focus-within:drop-shadow-lg rounded-full flex ps-3 pt-2 pb-2 focus-within:duration-200 focus-within:ease-in focus-within:transition">
            <span className="icon inline-block rounded-full self-center text-blue-600 ms-2">
                {icon}
            </span>
            <input type={type} id={inputName} name={inputName} placeholder={placeholder} className="ps-2 pe-2 pt-1.5 pb-1.5 align-middle w-[85%] text-lg text-gray-700 bg-none focus:outline-0" />
            {children}
        </div>
    );
}