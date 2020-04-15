const initialState = {
    userOne: '',
    userTwo: ''
}

export const playerReducer = (state = initialState, action) => {

    switch(action.type){
        case 'SET_NAME_PLAYER_ONE':
            return { ...state, userOne: action.payload }

        case 'SET_NAME_PLAYER_TWO':
            return { ...state, userTwo: action.payload }

        default:
            return state
      }
}