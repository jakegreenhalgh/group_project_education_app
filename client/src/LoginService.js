const baseURL = 'http://localhost:9000/api/users/'
const saveUrl = 'http://localhost:9000/api/users/save/'


// gets all users
export const getUsers = () => {
    return fetch(baseURL)
    .then(res => res.json())
}


// sets all users logged_in state to false
export const logoutUsers = () => {
    return fetch(baseURL + "out",
    {method: 'PUT',
    headers: { 'Content-Type': 'application/json' }})
    .then(res => res.json())
}


// logs in user sets one users logged in to true 
export const loginActiveUser = (id) => {
    return fetch(baseURL  + id,    {method: 'PUT',
    headers: { 'Content-Type': 'application/json' }})
    .then(res => res.json())
}


export const findActiveUser = () => {
    return fetch(baseURL + 'true')
    .then(res => res.json())
}

export const saveUserQuizData = (id, payload) => {
    return fetch(saveUrl + "saved_quiz/" + id,
    {method: 'PUT',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'application/json' }})
    .then(res => res.json())
    
}

export const saveUserFavData = (id, payload) => {
    return fetch(saveUrl + "favourites/" + id,
    {method: 'PUT',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'application/json' }})
    .then(res => res.json())
}

export const postUser = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}

