const baseURL = 'http://localhost:9000/api/categories/'

export const getCategories = () => {
    return fetch(baseURL)
    .then(res => res.json())
}








// export const getSightings = () => {
//     return fetch(baseURL)
//         .then(res => res.json())
// }