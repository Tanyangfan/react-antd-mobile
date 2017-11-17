const initialState = {
    data: [],
}

const tipListResp = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_TIP_LIST_RECEIVE":
            return {
                data: action.res.data,
            };
        default:
            return state;
    }
}

export default tipListResp;