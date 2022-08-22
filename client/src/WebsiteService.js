const baseURL = 'http://localhost:9000/api/categories/'

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

    // (req, res => res.json(categories[req.params.id]) ??

    // (req, res => res.json(categories[req.params.id]) ??



