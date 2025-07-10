import FloatNavbarContainer from "../atoms/FloatNavbarContainer";
import { BlankImage } from "../atoms/icons/BlankImage";
import { MainBackground } from "../organisms/background/MainBackground";
import { Navbar } from "../organisms/Navbar";

export function BlogPage() {

    let writer = {
        profile: "/person.svg",
        name: "Si Anu"
    };

    let blog = {
        title: "Hello My Blog",
        image: "https://bucket.google.com/image1.png",
        content: (
            <div>
                <h2>Hello1</h2>
                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet corporis a tempore sed accusamus laborum debitis, rerum quibusdam repellat, sapiente provident distinctio adipisci inventore exercitationem minus? Incidunt quam, esse blanditiis adipisci voluptate non, fugit eaque maxime dolore quibusdam id magni?"</p>
                <h2>Hello2</h2>
                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet corporis a tempore sed accusamus laborum debitis, rerum quibusdam repellat, sapiente provident distinctio adipisci inventore exercitationem minus? Incidunt quam, esse blanditiis adipisci voluptate non, fugit eaque maxime dolore quibusdam id magni?"</p>
                <h2>Hello3</h2>
                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet corporis a tempore sed accusamus laborum debitis, rerum quibusdam repellat, sapiente provident distinctio adipisci inventore exercitationem minus? Incidunt quam, esse blanditiis adipisci voluptate non, fugit eaque maxime dolore quibusdam id magni?"</p>
            </div>
        )
    };

    return (
        <MainBackground>
            <FloatNavbarContainer>
                <Navbar />
            </FloatNavbarContainer>
            <div className="pt-25"></div>
            <article className="grid grid-cols-12">
                <div className="col-span-6 col-start-4 bg-[#FFF8F8] p-2 ps-4 pe-4 rounded-md">
                    <h1 className="text-black text-5xl font-bold">{blog.title}</h1>
                    <div className="text-gray-800 mt-2">
                        <img src={writer.profile} alt="" className="h-6 w-6 inline rounded-full bg-gray-200"/>
                        <span className="ms-1 text-sm">{writer.name}</span>
                        <span className="mx-2"></span>
                        <span className="text-gray-500 text-xs"> 20 Mei 2025</span>
                    </div>
                    <figure>
                        <div className=" h-60 w-60 overflow-hidden">
                            <BlankImage width="100%" />
                        </div>
                    </figure>
                    <div className="prose prose-p:text-lg">
                        {blog.content}
                    </div>
                </div>
            </article>
        </MainBackground>
    );
}