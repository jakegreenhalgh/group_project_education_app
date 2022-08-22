const baseURL = 'http://localhost:9000/api/categories/'

export const getCategories = () => {
    return fetch(baseURL)
    .then(res => res.json())
}

    // (req, res => res.json(categories[req.params.id]) ??



