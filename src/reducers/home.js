const initialState = {
    banners: []
}

const homeResp = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_HOME_RECEIVE":
            return {banners: action.res.data.bannerList};
        default:
            return state;
    }
}

export default homeResp;