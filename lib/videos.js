
export const getVideos = async (query, pageSize = 10) => {
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${pageSize}&q=${query}&type=video&key=${process.env.YOUTUBE_API_KEY}`)
    const data = await response.json()

    return data.items.map(item => ({
        id: item?.id?.videoId,
        imgUrl: item.snippet.thumbnails.high.url,
        title: item.snippet.title,
        description: item.snippet.description,
        publishedAt: item.snippet.publishedAt
    }))
}
