import axios from 'axios'

export const fetchLiked = () => (dispatch) => {
    axios({
        method: 'GET',
        url: 'http://localhost:4000/liked'
    })
    .then(({data}) => {
        dispatch({
            type: 'FETCH_LIKED',
            payload: data
        })
    })
    .catch(err => console.log(err))
}

export const likePost = (post) => (dispatch) => {
    axios({
        method: 'POST',
        url: 'http://localhost:4000/liked',
        data: post
    })
    .then(({data}) => {
        dispatch({
            type: 'LIKE_POST',
            payload: data
        })
    })
    .catch(err => console.log(err))
}