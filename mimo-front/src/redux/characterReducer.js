const defaultState = {
    active: null
}

const characterReducer = (prevState=defaultState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {...prevState, active: action.payload}
        default:
            return prevState
    }
}

export default characterReducer