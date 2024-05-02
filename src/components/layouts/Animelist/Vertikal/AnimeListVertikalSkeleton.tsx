const AnimeListVertikalSkeleton = () => {

    return (
        <>
            <section className="overflow-y-auto">
                <ul className="grid grid-cols-2 gap-2">
                    {Array(25).fill(0).map((_, index) => (
                        <li key={index}>
                            <div className='w-full h-64 aspect-[2/3] rounded dark:bg-skeleton-dark bg-skeleton-light animate-pulse'></div>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}

export default AnimeListVertikalSkeleton