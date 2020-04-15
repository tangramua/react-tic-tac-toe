const initialState = {}

export function usersReducer(state = initialState, action) {

    switch(action.type){
        case 'FETCH_USERS_FAILURE':
            return console.error('error article')

        case 'FETCH_USERS_SUCCESS':
            return { ...state, users: action.payload }

        case 'FETCH_USERS_REQUEST':
            return console.log('Loading...')

        default:
            return state
    }
}