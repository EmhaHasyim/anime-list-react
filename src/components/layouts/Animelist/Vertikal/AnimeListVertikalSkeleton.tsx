const AnimeListVertikalSkeleton = () => {

    return (
        <>
            <section className="overflow-y-auto">
                <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {Array(25).fill(0).map((_, index) => (
                        <li key={index}>
                            <div className='w-full h-64 aspect-[2/3] rounded dark:bg-skeleton-dark bg-skeleton-light animate-pulse sm:h-80 md:h-96'></div>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}

export default AnimeListVertikalSkeleton