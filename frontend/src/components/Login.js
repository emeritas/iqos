import React from 'react';
import '../scss/login.scss';

function Login() {
    return (
     
            <div className="modal fade" id="modalFullscreen" tabIndex="-1" aria-labelledby="LoginModal" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title" id="exampleModalLiveLabel">Prašome prisijungti</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="form-signin">
                        <form>
                            <div className="form-floating">
                                <input type="email" className="form-control" id="floatingInput" placeholder="vardas@pavyzdys.lt" autoComplete="off" />
                                <label htmlFor="floatingInput">El.paštas</label>
                            </div>
                            <div className="form-floating">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Slaptažodis" autoComplete="off" />
                                <label htmlFor="floatingPassword">Slaptažodis</label>
                            </div>

                            <div className="checkbox mb-3">
                                <label className="text-muted">
                                    <input type="checkbox"  value="remember-me" /> Prisiminti mane
                                </label>
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
