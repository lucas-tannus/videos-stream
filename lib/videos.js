const BASE_YOUTUBE_URL = "https://youtube.googleapis.com/youtube/v3"

const parseVideoData = (data) => data.items.map(item => ({
        id: item?.id?.videoId || item.id,
        imgUrl: item?.snippet?.thumbnails?.high?.url || "",
        title: item?.snippet?.title || "",
        description: item?.snippet?.description || "",
        publishedAt: item?.snippet?.publishedAt || ""
    }))

export const getPopularVideos = async (pageSize = 25) => {
    try {
        const url = BASE_YOUTUBE_URL 
            + `/videos?chart=mostPopular&regionCode=BR&part=snippet&maxResults=${pageSize}&key=${process.env.YOUTUBE_API_KEY}`
    
        const response = await fetch(url)
        const data = await response.json()
    
        if (data?.error) return []
        
        return parseVideoData(data)
    } catch (error) {
        console.error("Something went wrong searching popular videos!")
        return []
    }
}

export const getCommonVideos = async (query, pageSize = 25) => {
    try {
        const url = BASE_YOUTUBE_URL 
            + `/search?q=${query}&type=video&part=snippet&maxResults=${pageSize}&key=${process.env.YOUTUBE_API_KEY}`

        const response = await fetch(url)
        const data = await response.json()

        if (data?.error) return []
    
        return parseVideoData(data)
    } catch (error) {
        console.error("Something went wrong searching videos!")
        return []
    }
}
