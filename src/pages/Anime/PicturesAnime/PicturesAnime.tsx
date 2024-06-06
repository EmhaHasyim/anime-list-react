import PicturesAnimeIN from "@/utils/Interface/PicturesAnime"

const PicturesAnime = ({ pictures }: { pictures: PicturesAnimeIN | null }) => {
    return (
        <section className="overflow-x-auto">
            <ul className="whitespace-nowrap flex gap-1 md:gap-1.5 lg:gap-2">
                {pictures?.data.map((pictures, index) => {
                    return (
                        <li key={index}>
                            <section className="relative aspect-[2/3] h-52 overflow-hidden rounded-sm md:h-60 lg:h-[275px]">
                            <img src={pictures.webp.image_url} alt={`${index}`} className="w-full h-full"/>
                            </section>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default PicturesAnime