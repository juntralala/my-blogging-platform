import { BgBubble } from "@/components/atoms/BgBubble";
import { BgBubbleContainer } from "@/components/molecules/BgBubbleContainer";

export function AuthBackground({ children }) {
    return (
        <div className="absolute bg-linear-[135deg,#386dff_10%,#0118D8_100%] w-screen h-screen -z-10">
            <BgBubbleContainer>
                <BgBubble left="3%" />
                <BgBubble left="15%" size={25} delay="2s" duration="17s"/>
                <BgBubble left="25%" delay="5s"/>
                <BgBubble left="23%" size={7} delay="2s" duration="40s" alpha="0.3"/>
                <BgBubble left="32%" size={36} delay="7s"/>
                <BgBubble left="40%" size={20} duration="22s" alpha="0.25"/>
                <BgBubble left="55%" size={13} delay="15s" duration="40s"/>
                <BgBubble left="70%" delay="5s"/>
                <BgBubble left="80%" size={30} delay="3s" alpha="0.2"/>
                <BgBubble left="75%" size={10} delay="5s" alpha="0.2" duration="50s"/>
                <BgBubble left="90%" size={36} delay="11s"/>
            </BgBubbleContainer>
            {children}
        </div>
    );
}