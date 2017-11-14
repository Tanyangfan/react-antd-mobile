const initialState = {
    banners: [],
    categoryList: []    
}

const homeResp = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_HOME_RECEIVE":
            return {
                banners: action.res.data.bannerList,
                categoryList: action.res.data.categoryList
            };
        default:
            return state;
    }
}

export default homeResp;