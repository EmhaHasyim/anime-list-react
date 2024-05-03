interface AnimeCharacter {
    "data": [
        {
            "character": {
                "mal_id": 0,
                "url": "string",
                "images": {
                    "jpg": {
                        "image_url": "string",
                        "small_image_url": "string"
                    },
                    "webp": {
                        "image_url": "string",
                        "small_image_url": "string"
                    }
                },
                "name": "string"
            },
            "role": "string",
            "voice_actors": [
                {
                    "person": {
                        "mal_id": 0,
                        "url": "string",
                        "images": {
                            "jpg": {
                                "image_url": "string"
                            }
                        },
                        "name": "string"
                    },
                    "language": "string"
                }
            ]
        }
    ]
}

export default AnimeCharacter