import React from 'react'
import Login from './Login'
import { Link } from 'react-router-dom'

export const User = () => {
    const handleLogin = (product) => {
        <Login />
    }
    return (
        <div className='profile'>
            {/* <input value={username}
                onChange={(e) => { setUsername(e.target.value); }}
            />
            <button onClick={() => { setUsername(undefined); }}>
                Remove Username
            </button> */}

            {/* <img id='avatar' src="" alt="" /> */}
            User
            {/* <Link to="/User">  User    </Link> */}
            
            <Link to="/Login">Login
            </Link>
            {/* <button onClick={handleLogin}>Login</button> */}
            <button>Register</button>
        </div>
    )
}
