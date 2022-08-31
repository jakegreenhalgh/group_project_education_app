const baseURL = 'http://localhost:9000/api/categories/'
const worldURL = 'http://localhost:9000/api/ourWorld'

export const getCategories = () => {
    return fetch(baseURL)
    .then(res => res.json())
}
export const showCategory = (id) => {
    return fetch(baseURL + id)
    .then(res => res.json())
}

export const showContent = (categoryId, contentId) => {
    return fetch(baseURL + categoryId + contentId)
    .then(res => res.json())
}


export const getOurWorld = () => {
    return fetch(worldURL)
    .then(res => res.json())
}



