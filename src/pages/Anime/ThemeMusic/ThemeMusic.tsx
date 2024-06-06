import { Triangle } from "@phosphor-icons/react"
import { useState } from "react"


interface Theme {
    "openings":
    [
        "string"
    ],
    "endings":
    [
        "string"
    ]
}

const ThemeMusic = ({ theme }: { theme: Theme | undefined }) => {

    const [seeMoreBtn, setSeeMoreBtn] = useState('See More')
    const seeMore = () => {
        const themeMusic = document.getElementById('themeMusic')
        const triangleSeeMoreBtn = document.getElementById("triangleSeeMoreBtn");
        themeMusic?.classList.toggle('h-28')
        triangleSeeMoreBtn?.classList.toggle("rotate-180");
        setSeeMoreBtn(themeMusic?.classList.contains('h-28') ? 'See More' : 'See Less')
    }

    return (
        <>
            <section id="themeMusic"
            className="h-28 relative overflow-hidden flex justify-start items-start flex-col w-full bg-light-background-secondary dark:bg-dark-background-secondary px-2 py-1 rounded-sm">
                <h1 className="text-center w-full text-light-text-secondary dark:text-dark-text-secondary font-bold text-lg">Theme Music</h1>
                <div className="flex justify-start items-start flex-col lg:flex-row">
                <div>
                    <h2 className="text-light-text-secondary dark:text-dark-text-secondary font-bold">Opening</h2>
                    <ul>
                        {theme?.openings.map((opening, index) => {
                            return (
                                <li key={index} className="">
                                    {opening}
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div>
                    <h2 className="text-light-text-secondary dark:text-dark-text-secondary font-bold">Ending</h2>
                    <ul>
                        {theme?.endings.map((endings, index) => {
                            return (
                                <li key={index} className="md:mt-1">
                                    {endings}
                                </li>
                            )
                        })}
                    </ul>
                </div>
                </div>
                <section className="bg-gradient-to-t from-light-background-primary to-light-background-secondary dark:from-dark-background-primary dark:to-dark-background-secondary h-7 w-full absolute -bottom-0.5 z-10 left-0 md:h-9 lg:h-10">
                    <button
                        className="absolute -bottom-0 end-3 text-primary flex items-center gap-1"
                        onClick={() => seeMore()}
                    >
                        {seeMoreBtn}
                        <Triangle
                            size={12}
                            weight="fill"
                            id="triangleSeeMoreBtn"
                            className="rotate-180 text-theme-dark hover:text-theme-light dark:text-theme-light dark:hover:text-theme-dark"
                        />
                    </button>
                </section>
            </section>
        </>
    )
}

export default ThemeMusic