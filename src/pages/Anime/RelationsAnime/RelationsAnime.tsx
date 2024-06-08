import { Triangle } from "@phosphor-icons/react"
import { useState } from "react"
import { Fragment } from "react/jsx-runtime"

type Relations = [
    {
        "relation": "string",
        "entry":
        [
            {
                "mal_id": 0,
                "type": "string",
                "name": "string",
                "url": "string"
            }
        ]
    }

]

const RelationAnime = ({ relation }: { relation: Relations | undefined }) => {

    const [seeMoreBtn, setSeeMoreBtn] = useState('See More')
    const seeMore = () => {
        const relationsAnime = document.getElementById('relationsAnime')
        const triangleSeeMoreBtnR = document.getElementById("triangleSeeMoreBtnR");
        relationsAnime?.classList.toggle('h-28')
        triangleSeeMoreBtnR?.classList.toggle("rotate-180");
        setSeeMoreBtn(relationsAnime?.classList.contains('h-28') ? 'See More' : 'See Less')
    }

    return (
        <>
            <section id="relationsAnime"
                className="h-28 relative overflow-hidden w-full p-2 rounded-sm bg-light-background-secondary dark:bg-dark-background-secondary lg:full">
                <h1 className="text-center w-full text-light-text-secondary dark:text-dark-text-secondary font-bold text-lg">Relations</h1>
                <ul className="flex gap-2 flex-col">
                    {relation?.length ? relation?.map((relation, index) => {
                        return (
                            <li key={index}>
                                <h1 className="text-light-text-secondary dark:text-dark-text-secondary font-semibold">{relation.relation}</h1>
                                {relation?.entry.map((entry, index) => {
                                    return (
                                        <Fragment key={entry.mal_id}>
                                            {index > 0 && <>, </>}
                                            <a
                                                href={`/${entry.type}/${entry.mal_id}`}
                                                className="text-theme-light hover:text-theme-dark dark:text-theme-dark dark:hover:text-theme-light font-medium"
                                            >
                                                {entry.name} ({entry.type})
                                            </a>
                                        </Fragment>
                                    )
                                })}
                            </li>
                        )
                    }) : <p>Unknown</p>}
                </ul>
                <section className="bg-gradient-to-t from-light-background-primary to-light-background-secondary dark:from-dark-background-primary dark:to-dark-background-secondary h-7 w-full absolute z-10 left-0 -bottom-0.5 md:h-9 lg:h-10">
                    <button
                        className="absolute -bottom-0 end-3 text-primary flex items-center gap-1"
                        onClick={() => seeMore()}
                    >
                        {seeMoreBtn}
                        <Triangle
                            size={12}
                            weight="fill"
                            id="triangleSeeMoreBtnR"
                            className="rotate-180 text-theme-dark hover:text-theme-light dark:text-theme-light dark:hover:text-theme-dark"
                        />
                    </button>
                </section>
            </section>
        </>
    )
}

export default RelationAnime