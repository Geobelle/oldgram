const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let section = document.getElementById("section")
/*rendering*/ 
for (let i = 0; i < posts.length; i++) {
    let details = posts[i] 
    const newPost = document.createElement("article")

    newPost.innerHTML = `
                    <div class="top"> 
                        <img class="avatar" src="${details.avatar}" >
                        <div class="name-location">
                            <h2> ${details.name} </h2>
                            <p> ${details.location}</p> 
                        </div>
                    </div>
                    <img class="post" id="${details.post}" src="${details.post}">
                    <div class = "icon-container">
                        <svg class="icon lover" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                        <img class="icon" src="images/icon-comment.png">
                        <img class="icon" src="images/icon-dm.png">
                    </div>
                    <div class="likecommment">
                        <h2 class="like"> ${details.likes} likes</h2>
                        <p> <span class="username">${details.username}</span> ${details.comment}</p>
                    </div>    
                    `
   
    section.append(newPost)

/*adjusting the like icon and the like number*/ 
    function like(){
     
    lover = document.getElementsByClassName("lover")[i]
    if (lover.classList.contains("love")){
        lover.classList.remove("love")
        details.likes = details.likes - 1
    }
    else{
        lover.classList.add("love")
        details.likes += 1
    }
    document.getElementsByClassName("like")[i].textContent = `${details.likes} likes`
}

    let post = document.getElementById(details.post)
    post.addEventListener("dblclick", like)

   let lover = document.getElementsByClassName("lover")[i]
   lover.addEventListener("click", like) 
}
