import { combineReducers }  from 'redux'
import { usersReducer } from './usersReducer'
import { playerReducer } from './playerReducer'

export const rootReducer = combineReducers({
    users: usersReducer,
    name: playerReducer,
})