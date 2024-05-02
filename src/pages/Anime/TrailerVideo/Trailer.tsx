const Trailer = ({ LinkVideo, title }: { LinkVideo: string | undefined, title: string | undefined }) => {
    return (
        <>
            <iframe className="aspect-video rounded-md" src={LinkVideo} title={title} allowFullScreen>
            </iframe>
        </>
    )
}

export default Trailer