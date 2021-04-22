import React from 'react';
import '../scss/login.scss';

function Login() {
    return (
     
            <div class="modal fade" id="modalFullscreen" tabindex="-1" aria-labelledby="LoginModal" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="exampleModalLiveLabel">Prašome prisijungti</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
