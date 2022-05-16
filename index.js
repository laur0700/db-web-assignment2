async function fetchPosts(URL){
    return await fetch(URL).then((response) => response.json()).then((json) => json)
}

async function fetchUsers(URL){
    return await fetch(URL).then((response) => response.json()).then((json) => json)
}

async function fetchComments(URL){
    return await fetch(URL).then((response) => response.json()).then((json) => json)
}