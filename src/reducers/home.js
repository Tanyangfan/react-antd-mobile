const initialState = {
    banners: [],
    categoryList: [],
    exchangeInfoList: []        
}

const homeResp = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_HOME_RECEIVE":
            return {
                banners: action.res.data.bannerList,
                categoryList: action.res.data.categoryList,
                exchangeInfoList: action.res.data.exchangeInfoList,
            };
        default:
            return state;
    }
}

export default homeResp;