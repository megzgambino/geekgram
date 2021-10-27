import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const access_token = useSelector(state => state.access_token)
    const dispatch = useDispatch()
    function handleLogOut() {
        // console.log(access_token)
        dispatch({
            type: 'LOGIN_USER',
            payload: ''
        })
    }
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h1 className="navbar-brand">
                GeekGram
            </h1>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/home" className="nav-link" href={{}}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/add" className="nav-link" href={{}}>
                            Add
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/liked" className="nav-link" href={{}}>
                            Liked Post
                        </Link>
                    </li>
                    {!access_token? <li className="nav-item">
                        <Link to="/" className="nav-link" href={{}}>
                            Login
                        </Link>
                    </li>
                    : <li className="nav-item">
                    <button onClick={handleLogOut} className="nav-link">
                        Logout
                    </button>
                </li> }
                </ul>
            </div>
        </nav>
    )
}
