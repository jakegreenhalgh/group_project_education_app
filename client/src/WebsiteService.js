const baseURL = 'http://localhost:9000/api/categories/'

export const getCategories = () => {
    return fetch(baseURL)
    .then(res => res.json())
}
export const showCategory = (id) => {
    return fetch(baseURL + id)
    .then(res => res.json(id))
}
    // (req, res => res.json(categories[req.params.id]) ??



