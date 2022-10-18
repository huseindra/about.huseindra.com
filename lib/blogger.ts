

const BLOGGER_ENDPOINT = `https://www.googleapis.com/blogger/v3/blogs/${process.env.NEXT_PUBLIC_BLOGGER_ID}/posts?key=${process.env.NEXT_PUBLIC_BLOGGER_CLIENT_KEY}`

export const getListBlog = async() => {
    try {
        const response = await fetch(BLOGGER_ENDPOINT)
        console.log()
        return response.json()
    } catch (error:any) {
        console.log(error.message)
    }
}
