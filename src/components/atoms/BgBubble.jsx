export function BgBubble({ children = null, size = 20, left = "0%", duration = "25s", delay = "0s", alpha = "0.15" }) {
    return (
        <>
            {children || (
                <div
                    className={`absolute -bottom-60 rounded-md animate-[bubbleUp_linear_infinite]`}
                    style={{
                        width: `calc(var(--spacing) * ${size})`,
                        height: `calc(var(--spacing) * ${size})`,
                        left: left,
                        animationDuration: duration,
                        animationDelay: delay,
                        backgroundColor: `rgba(255,255,255,${alpha})`
                    }}
                ></div>
            )}
        </>
    );
}