const baseURL = 'http://localhost:9000/api/users/'


// gets all users
export const getUsers = () => {
    return fetch(baseURL)
    .then(res => res.json())
}


// sets all users logged_in state to false
export const logoutUsers = () => {
    return fetch(baseURL ,{    method: 'POST',
    headers: { 'Content-Type': 'application/json' }})
    .then(res => res.json())
}


// logs in user sets one users logged in to true 
export const loginActiveUser = (id) => {
    return fetch(baseURL  + id,{    method: 'POST',
    headers: { 'Content-Type': 'application/json' }})
    .then(res => res.json())
}


export const findActiveUser = () => {
    return featch(baseURL + 'true')
    .then(res => res.json())
}

