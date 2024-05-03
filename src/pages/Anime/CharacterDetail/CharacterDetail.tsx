import AnimeCharacter from "@/utils/Interface/AnimeCharacter"
import {DotsThreeOutline } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

const CharaterDetail = ({ character }: { character: AnimeCharacter | null }) => {
    return (
        <>
            <section className="overflow-x-auto mt-3">
                <ul className="whitespace-nowrap flex gap-1">
                    {character?.data.map((character, index) => {
                        if (index >= 15) { return <></> }
                        return (
                            <li key={character.character.mal_id}>
                                <section className="relative h-36 aspect-[2/3] rounded-sm overflow-hidden">
                                    <img src={character.character.images.webp.image_url} alt={character.character.name} loading="lazy" />
                                    <Link to={`/charaters/${character.character.mal_id}`} className="w-full h-full absolute top-0 left-0" />
                                    <p className="text-xs text-left px-1 py-0.5 truncate align-middle bg-black bg-opacity-80 absolute left-0 -bottom-0 w-full">
                                        {character.character.name}
                                    </p>
                                </section>
                                {character.voice_actors.filter((voiceActors) => {
                                    const language: string = 'Japanese'
                                    return voiceActors.language === language
                                }).map((data, index) => {
                                    if (index > 0) { return null }
                                    return (
                                        <>
                                            <section key={data.person.mal_id} className="relative h-36 aspect-[2/3] rounded-sm overflow-hidden">
                                                <img src={data.person.images.jpg.image_url} alt={data.person.name} loading="lazy" />
                                                <Link to={`/people/${data.person.mal_id}`} className="w-full h-full absolute top-0 left-0"/>
                                                <p className="text-xs text-left px-1 py-0.5 truncate align-middle bg-black bg-opacity-80 absolute left-0 -bottom-0 w-full">
                                                    {data.person.name}
                                                </p>
                                            </section>
                                        </>
                                    )
                                })
                                }
                            </li>
                        )
                    })}
                    <li className="h-72 aspect-[2/4]">
                        <section className="h-full flex items-center justify-center">
                            <Link to={`charater`} className="w-full h-full flex justify-center items-center flex-col text-theme-light dark:text-theme-dark hover:text-theme-dark dark:hover:text-theme-light underline">
                                <DotsThreeOutline size={32}/> See More
                            </Link>
                        </section>
                    </li>
                </ul>
            </section>
        </>
    )
}

export default CharaterDetail