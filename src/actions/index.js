export const fetchReposRequest = keyword => {
    return {
        type: 'FETCH_REPOSITOYIES_REQUEST',
        keyword
    }
}

export const fetchUserRequest = userName => {
    return {
        type: 'FETCH_USER_REQUEST',
        userName
    }
}

export const fetchUserCancel = () => {
    return {
        type: 'FETCH_USER_CANCEL',
    }
}

export const fetchReposReceive = res => {
    return {
        type: 'FETCH_REPOSITOYIES_RECEIVE',
        res
    }
}

export const fetchUserReceive = res => {
    return {
        type: 'FETCH_USER_RECEIVE',
        res
    }
}

export const fetchHomeRequest = () => {
    return {
        type: 'FETCH_HOME_REQUEST',
    }
}

export const fetchHomeReceive = res => {
    return {
        type: 'FETCH_HOME_RECEIVE',
        res
    }
}

export const createError = (error) => {
    return
}