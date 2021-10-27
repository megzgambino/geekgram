import axios from 'axios'

export const LoginUser = (user) => (dispatch) => {
    axios({
        method: 'POST',
        url: 'https://tasklogin.herokuapp.com/api/login',
        data: user
    })
    .then(({data}) => {
        if (data.access_token) {
            dispatch({
                type: 'LOGIN_USER',
                payload: data.access_token
            })
        }else {
            console.log('user not registered!')
        }
    })
    .catch(err => console.log(err))
}