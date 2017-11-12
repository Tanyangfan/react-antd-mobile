const initialState = {
    res: {
        incomplete: false,
        items: []
    }
}

const searchResult = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_REPOSITOYIES_RECEIVE":
            return {
                res: {
                    incomplete: action.res.incomplete_result,
                    items: action.res.items
                }
            }
        default:
            return state;
    }
}

export default searchResult;