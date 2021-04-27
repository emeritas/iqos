import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (

    <footer className="pb-3 pt-2 text-muted bg-light-grey">

    <div className="container p-4">

      <ul className="list-unstyled text-center mb-0 footer-menu d-flex justify-content-center">
          <li>
            <Link className="footer-menu__link" to="/apidocs">API Docs</Link>
          </li>
          <li>
            <Link className='footer-menu__link' to='/career'>Karjera</Link>
          </li>
          <li>
            <Link className='footer-menu__link' to='/new-partner'>Naujiems partneriams</Link>
          </li>
       </ul>

    </div>



    <div className="text-center p-3">
      <p className="mb-0 text-center">Visos teisės saugomos © {new Date().getFullYear()} - IQOS</p>
    </div>

    </footer>
  )
}
