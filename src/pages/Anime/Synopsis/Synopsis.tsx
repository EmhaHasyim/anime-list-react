import { Triangle } from "@phosphor-icons/react";
import { useState } from "react";

const Synopsis = ({ synopsis, background }: { synopsis: string | undefined, background: string | undefined }) => {

    const [readMoreBtn, setReadMoreBtn] = useState("Read More");
    const readMore = () => {
        const synopsis = document.getElementById("synopsis");
        const triangleReadMoreBtn = document.getElementById("triangleReadMoreBtn");
        triangleReadMoreBtn?.classList.toggle("rotate-180");
        synopsis?.classList.toggle("h-[100px]");
        synopsis?.classList.contains("h-[100px]")
            ? setReadMoreBtn("Read More")
            : setReadMoreBtn("Close");
    };
    return (
        <>
            <section
                id="synopsis"
                className="h-[100px] bg-light-background-secondary dark:bg-dark-background-secondary mt-1.5 overflow-hidden relative px-2 py-1 pb-7"
            >
                <h1 className="text-primary font-semibold">Synopsis</h1>
                <p className="text-wrap text-start whitespace-pre-line">
                    {synopsis}
                </p>
                <h1 className="text-primary font-semibold mt-5">Backround</h1>
                <p className="text-wrap text-start whitespace-pre-line">
                    {background}
                </p>
                <section className="bg-gradient-to-t from-dark-background-primary to-dark-background-secondary h-7 w-full absolute -bottom-0 z-10 left-0">
                    <button
                        className="absolute -bottom-0 end-3 text-primary flex items-center gap-1"
                        onClick={() => readMore()}
                    >
                        {readMoreBtn}
                        <Triangle
                            size={12}
                            weight="fill"
                            id="triangleReadMoreBtn"
                            className="rotate-180 text-theme-dark hover:text-theme-light dark:text-theme-light dark:hover:text-theme-dark"
                        />
                    </button>
                </section>
            </section>
        </>
    )
}

export default Synopsis