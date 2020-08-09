export const getPlaylist = (data, tracks) => (
    data.items.map(item => {
        return tracks.push({
            album: {
                artists: item.track.album.artists,
                images: item.track.album.images,
                href: item.track.album.href,
                id: item.track.album.id,
                type: item.track.album.type,
                name: item.track.album.name,
                albumType: item.track.album.album_type
            },
            artists: item.track.artists,
            duration: item.track.duration_ms,
            href: item.track.href,
            id: item.track.id,
            name: item.track.name,
            popularity: item.track.popularity
        })
    })
)

export const getAlbum = (data, tracks) => (
    data.items.map(item => {
        return tracks.push({
            artists: item.artists,
            duration: item.duration_ms,
            href: item.href,
            id: item.id,
            name: item.name
        })
    })
)