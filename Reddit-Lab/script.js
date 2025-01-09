const redditUrl = "https://www.reddit.com/r/aww/.json"

const printAww = async () => {
	const response = await fetch(redditUrl)
	const data = await response.json()
	console.log(data)
}

// printAww()

const getAwwPosts = async () => {
	const response = await fetch(redditUrl)
	const data = await response.json()
    console.log("getAwwPosts", data)
	return data.data.children.map(post => post.data)
}

const addAllTitles = async () => {
	const posts = await getAwwPosts()
    console.log(posts)
	for (const post of posts) {
        const postWrapper = document.createElement("div")
        document.body.appendChild(postWrapper)
        postWrapper.classList.add("postWrapper")

		const div = document.createElement("div")
		div.innerText = post.title
		postWrapper.appendChild(div)
		div.classList.add("title")


        const img = document.createElement("img")
		img.src = post.thumbnail
		postWrapper.appendChild(img)

        const link = document.createElement("a")
        link.innerText = "View Post"
        link.href = post.url
        postWrapper.appendChild(link)
	}
}

addAllTitles()
