export function setOne(name) {
    return {
        type: 'SET_NAME_PLAYER_ONE',
        payload: name
    }
}

export function setTwo(name) {
    return {
        type: 'SET_NAME_PLAYER_TWO',
        payload: name
    }
}