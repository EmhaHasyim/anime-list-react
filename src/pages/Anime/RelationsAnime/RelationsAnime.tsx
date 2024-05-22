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
    console.log(relation)
    return (
        <>
            <section className="w-full p-2 rounded-sm bg-light-background-secondary dark:bg-dark-background-secondary">
                <ul className="flex gap-2 flex-col">
                    {relation?.map((relation) => {
                        return (
                            <li>
                                <h1 className="text-light-text-secondary dark:text-dark-text-secondary font-bold bg-theme-light dark:bg-theme-dark px-2 w-fit rounded-full">{relation.relation}</h1>
                                    {relation.entry.map((entry, index) => {
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
                    })}
                </ul>
            </section>
        </>
    )
}

export default RelationAnime