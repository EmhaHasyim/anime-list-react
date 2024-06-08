const Trailer = ({ LinkVideo, title }: { LinkVideo: string | undefined, title: string | undefined }) => {
    return (
        <>
            <section className="h-full w-full aspect-video flex justify-center items-center">
                <iframe className="aspect-video rounded-md w-full" src={LinkVideo} title={title} allowFullScreen>
                </iframe>
            </section>
        </>
    )
}

export default Trailer