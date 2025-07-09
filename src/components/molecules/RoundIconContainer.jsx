export function RoundIconContainer({ children }) {
    return (
        <div className="bg-blue-600 box-content text-white p-2 rounded-full shadow-xs cursor-pointer hover:drop-shadow-xl">
            {children}
        </div>
    );
}