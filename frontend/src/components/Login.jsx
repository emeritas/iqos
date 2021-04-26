import React, { useRef } from 'react';
import { useHistory } from "react-router-dom";

function Login() {

    const history = useHistory()
    const passwordInputValue = useRef(null)

    const handleLogin = async e => {
        e.preventDefault()
        const body = {
            password: passwordInputValue.current.value
        }
        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(body)
        })
        const data = await response.json()
        if (data === "login success") {
            sessionStorage.setItem('token', JSON.stringify(response.headers.get('token')))
            history.push('/admin')
        }
    }

    return (
            <div className="modal fade" id="modalFullscreen" tabIndex="-1" aria-labelledby="LoginModal" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title" id="exampleModalLiveLabel">Prašome prisijungti</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="form-signin">
                        <form onSubmit={handleLogin}>
                            <div className="form-floating">
                                <input ref={passwordInputValue} type="password" className="form-control" id="floatingPassword" placeholder="Slaptažodis" autoComplete="off" />
                                <label htmlFor="floatingPassword">Slaptažodis</label>
                            </div>

                            <button className="w-100 button btn-lg button--primary" type="submit">Prisijungti</button>
                        </form>
                    </div>     
                </div>
            </div>
            </div>
    )
}

export default Login
