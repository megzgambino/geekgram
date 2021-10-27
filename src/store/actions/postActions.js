import axios from 'axios'

export const fetchPosts = () => (dispatch) => {
    axios({
        method: 'GET',
        url: 'http://localhost:4000/posts'
    })
    .then(({data}) => {
        dispatch({
            type: 'FETCH_POSTS',
            payload: data
        })
        // console.log(data)
    })
    .catch(err => console.log(err))
}

export const addPost = (post) => (dispatch) => {
    axios({
        method: 'POST',
        url: 'http://localhost:4000/posts',
        data: post
    })
    .then(({data}) => {
        dispatch({
            type: 'ADD_POST',
            payload: data
        })
    })
    .catch(err => console.log(err))
}

export const getDetailPost = (id) => (dispatch) => {

    axios({
        method: 'GET',
        url: `http://localhost:4000/posts/${id}`
    })
    .then(({data}) => {
        console.log(data)
        dispatch({
            type: 'FETCH_DETAIL_POST',
            payload: data
        })
    })
    .catch(err => console.log(err))
}