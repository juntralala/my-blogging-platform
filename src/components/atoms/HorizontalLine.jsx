export function HorizontalLine({ children }) {
    return (
        <>

            <div className="flex-1 border-t border-gray-300"></div>
            <p className="text-gray-400 font-medium">{children}</p>
            <div className="flex-1 border-t border-gray-300"></div>
        </>
    );
}