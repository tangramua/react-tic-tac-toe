export const getUsers = () => {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch({
                type: 'FETCH_USERS_SUCCESS',
                payload: json
            }))
            .catch(()=> dispatch({
                type: 'FETCH_USERS_FAILURE',
                payload: null
            }))
    }
}