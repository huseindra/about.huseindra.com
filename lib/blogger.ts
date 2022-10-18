

const BLOGGER_ENDPOINT = `https://www.googleapis.com/blogger/v3/blogs/1045691415956750494/posts?key=${process.env.NEXT_PUBLIC_BLOGGER_CLIENT_KEY}`

export const getListBlog = async() => {
    try {
        const response = await fetch(BLOGGER_ENDPOINT)
        console.log()
        return response.json()
    } catch (error:any) {
        console.log(error.message)
    }
}

// fetch('https://www.googleapis.com/blogger/v3/blogs/1045691415956750494/posts?key=AIzaSyCihre7kjPauXgpwkL9HatXiWN83wyKddA').then(response => {
//     return response.json()
//     }).then(json => {
//       this.setState({
//         fetchData: json.items,
//         loading:false,
//       })
//     })