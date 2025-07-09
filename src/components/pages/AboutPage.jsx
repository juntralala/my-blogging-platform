import FloatNavbarContainer from "../atoms/FloatNavbarContainer";
import { SearchIcon } from "../atoms/icons/SearchIcon";
import { MainBackground } from "../organisms/background/MainBackground";
import { Navbar } from "../organisms/Navbar";

export function AboutPage() {
    return (
        <MainBackground>
            <FloatNavbarContainer>
                <Navbar searchIcon={false}/>
            </FloatNavbarContainer>
            <div className="h-[10vh]">
            </div>
            <div className="mt-10 flex justify-center text-gray-700">
                <div className="bg-[rgba(255,255,220,0.2)] min-w-[80dvw] min-h-120 rounded-2xl">
                    <h1 className="text-7xl font-medium text-center"><span className="font-bold text-[#1B56FD] text-rotate">Another</span><br />Blogging Website</h1>
                    <p className="mt-10 ps-60 pe-60 self-center text-xl text-center text-clip">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, minus. Neque, eos qui? Repudiandae molestiae libero incidunt optio unde tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ad, rerum nemo, alias dolorem vitae beatae ut asperiores quidem, eligendi adipisci? Saepe corporis rerum sapiente eligendi at adipisci reprehenderit cum consequatur qui expedita, facilis incidunt sint itaque harum repudiandae optio.</p>
                </div>
            </div>
        </MainBackground>
    );
}