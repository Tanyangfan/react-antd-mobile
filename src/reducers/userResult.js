const initialState = {
    userInfo: void 0
}

const userResult = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_USER_RECEIVE":
            return {
                userInfo: action.res
            }
        case "FETCH_USER_CANCEL":
            return {
                userInfo: void 0
            }
        default:
            return state;
    }
}

export default userResult;