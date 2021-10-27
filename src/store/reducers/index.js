const initialState = {
    posts: [],
    likes: [],
    detailPost: {},
    access_token:''
}

function reducer(state = initialState, action) {
    if (action.type === 'FETCH_POSTS') {
        const newState = {
            ...state, posts: action.payload
        }
        return newState
    } else if (action.type === 'ADD_POST') {
        const newState = [
            ...state.posts, action.payload
        ]
        return newState
    } else if (action.type === 'FETCH_LIKED') {
        const newState = {
            ...state, likes: action.payload
        }
        return newState

    } else if (action.type === 'LIKE_POST') {
        const newState = [
            ...state.likes, action.payload
        ]
        return newState

    } else if (action.type === 'FETCH_DETAIL_POST') {
        const newState = {
            ...state, detailPost: action.payload
        }
        return newState
    } else if (action.type === 'LOGIN_USER') {
        const newState = {
            ...state, access_token: action.payload
        }
        return newState
    }

    return state
}

export default reducer