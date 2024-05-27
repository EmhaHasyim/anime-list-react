import PicturesAnimeIN from "@/utils/Interface/PicturesAnime"

const PicturesAnime = ({ pictures }: { pictures: PicturesAnimeIN | null }) => {
    return (
        <section className="overflow-x-auto">
            <ul className="whitespace-nowrap flex gap-1 md:gap-1.5 lg:gap-2">
                {pictures?.data.map((pictures, index) => {
                    return (
                        <li key={index}>
                            <section className="relative aspect-[2/3] h-64 overflow-hidden rounded-sm sm:h-72 md:h-80 lg:h-96">
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