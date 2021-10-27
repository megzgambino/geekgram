import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { LoginUser } from '../store/actions/userActions'

export default function LoginPage() {
    const dispatch = useDispatch()
    const history = useHistory()

    const [input, setInput] = useState()

    function handleOnChangeInput (e) {
        const { name, value } = e.target
        setInput({...input, [name]:value})
    }

    function handleOnClickForm (e) {
        e.preventDefault()
        dispatch(LoginUser(input))
        history.push('/home')
    }
    return (
        <div className="card w-50 mx-auto">
        <form>
            <div className="form-group">
                <label for="exampleFormControlInput1">Username</label>
                <input
                    onChange={(e) =>
                        handleOnChangeInput(e)
                    }
                    name="username"
                    type="username"
                    className="form-control"
                    id="exampleFormControlInput1"
            
                />
            </div>
            <div className="form-group">
                <label for="exampleFormControlSelect2">Password</label>
                <input
                    onChange={(e) =>
                        handleOnChangeInput(e)
                    }
                    name="password"
                    type="password"
                    className="form-control"
                    id="exampleFormControlInput2"
                    
                />
            </div>
            <button
                onClick={handleOnClickForm}
                type="submit"
                className="btn btn-primary"
            >
                Login
            </button>
        </form>
    </div>
    )
}
