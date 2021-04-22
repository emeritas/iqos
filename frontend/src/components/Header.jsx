import React, { Fragment } from 'react';
import '../scss/header.scss';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='p-3 bg-blue text-white'>
      <nav className='navbar navbar-expand-lg navbar-light'>
        <div className='container'>
          <a
            href='/'
            className='d-flex main-logo align-items-center mb-2 mb-lg-0 text-white text-decoration-none'
          >
            <svg
              viewBox='65 124.6 768 202.3'
              width='250'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='m146.1 126.7c-2.6.6-5.5 2.2-6.8 3.8l-2.3 2.6v52.1c0 48.9.1 52.5 2 60.5 2.1 8.4 5.9 16.7 10.7 23 5.3 6.9 18 14.6 30 18.1 14.8 4.3 18.5 4.5 82.4 4.9l61.7.4 16.1 16.4c16.6 16.9 18.8 18.4 24.9 17 3.9-.9 7.9-4.7 9.8-9.5 2.4-6.1.9-8.6-14.3-24.1l-13.3-13.6v-50.4c0-56-.2-57.8-7-70.4-3.2-6.1-12.8-16.9-16.5-18.6-1.1-.5-3.3-1.7-5-2.7-3.9-2.4-13.1-5.5-22.5-7.8-6.7-1.6-14.4-1.9-76.4-2.4-50.3-.4-70.2-.2-73.5.7zm139.4 22.9c19 3.1 27.9 10 32.8 25.4 1.6 5 1.8 9.7 1.5 49.5l-.3 44-54.1.3c-53 .2-67.3-.3-76.4-2.9-7.3-2-14.6-7.3-18.3-13.1-6-9.5-6.1-10.1-6.4-58.3-.2-24.2-.1-44.5.1-45.2.4-1 11.9-1.3 55.8-1.3 46.4 0 56.8.3 65.3 1.6zm-213.7-22.5c-1.5.6-3.6 2.5-4.8 4.3-2 3.3-2 4.6-2 78.1v74.8l3.5 3.3c5.3 5 11.3 5.5 17.3 1.6 5.2-3.4 5.2-2.7 5.2-81.2v-72.7l-2.3-3.4c-3.7-5.5-9.9-7.3-16.9-4.8zm378.5-.1c-5 .4-9.6 1.1-10.1 1.4-.6.3-3.4 1.1-6.3 1.6-9.2 1.8-21.6 8.5-28.6 15.6-3.5 3.4-6.7 7.3-7.3 8.6-.5 1.2-1.4 3-1.8 3.8-2.6 4.5-3.4 6.6-4.3 11.3-.6 2.9-1.5 7-2 9.2-.4 2.2-.8 15.7-.8 30s.4 27.8.8 30c.5 2.2 1.4 6.2 1.9 9 2.6 12.3 14.5 28 25.2 33.2 7.1 3.4 11.7 5.3 13 5.3.6 0 3.2.6 5.8 1.4 9.5 2.8 22.2 3.6 58.3 3.6 35.9 0 55.9-1.3 60.9-4 1-.6 2.7-1 3.6-1 2.2 0 13.6-5.5 19.1-9.2 7.8-5.3 16-16.8 18.3-25.7.5-2 1.4-5.4 1.9-7.6 1.3-5.1 1.4-64.7.1-69.8-.6-2-1.4-5.2-1.8-7-3.3-12.4-13.6-24.7-25.7-30.6-9.5-4.6-9.8-4.7-19.5-7.2-7.9-1.9-11.5-2.1-50-2.4-22.8-.2-45.6 0-50.7.5zm90 22.6c17 3.6 24.8 9.8 30.3 23.9 1.7 4.6 1.9 7.7 1.9 35s-.2 30.4-1.9 35c-5 12.7-11.9 19-25.6 23.1-6 1.8-9.8 1.9-51 1.9-43.2 0-44.7-.1-51.2-2.2-9.2-3-11.6-4.4-16.4-9.5-4.8-5-6.5-8.1-8.8-16-2.3-8.2-2.3-56.4 0-64.6 4.4-15.2 12.3-22.4 28.9-26.3 10.2-2.4 83-2.7 93.8-.3zm152.2-22.7c-22.2 1.8-39 8.6-45.1 18.2-4.7 7.5-5.8 12.4-5.8 26.4.1 28.7 8.3 41.3 29.9 45.7 2.8.6 30.1 1.3 62 1.7 55.9.7 57.1.8 61.5 2.9 2.5 1.2 5.2 2.8 6.1 3.4 4.8 3.9 6.6 11.8 5.4 24.3-.6 7.1-1 8-4.4 11.4-2.5 2.5-5.6 4.2-10.1 5.6-6.1 1.9-9.6 2-59 2-52.1 0-52.5 0-57-2.2-6.1-3-7.5-4.2-9.9-9-4.4-8.4-11.3-11.2-19.3-7.9-5.3 2.2-6.3 4.1-6.2 11 .2 12.6 8.8 21.7 24.9 26.6 13.3 3.9 22.1 4.5 71 4.5s55-.4 67.5-4.5c7.6-2.5 10.8-4.3 15.9-8.6 9.3-8 13.1-18.1 13.1-34.9 0-21.6-6.4-33.8-21.4-40.9-11.2-5.3-17.4-5.8-74.8-6.3-60.1-.5-59.5-.5-65.5-8.3-3.3-4.1-3.3-4.3-3.3-15 0-9.2.3-11.4 2.1-14.4 2.8-4.9 7-7.1 16.6-9.1 7-1.4 14.3-1.6 52-1.3 38.4.3 44.4.6 49 2.1 5.7 1.9 10.4 6 12.9 11.2 2.3 4.8 7 7.5 13.1 7.5 12.2 0 15.7-11.8 7.5-25.1-4.1-6.6-12.6-11.5-26.2-15.1-6.9-1.8-11.2-2-50.5-2.3-23.6-.2-47 0-52 .4z'
                fill='#fff'
              />
            </svg>
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0 text-white'>
              <Fragment>
                <li className='nav-item'>
                  <Link className='nav-link text-white' to='/'>
                    Pagrindinis
                  </Link>{' '}
                </li>

                <li className='nav-item'>
                  <Link className='nav-link text-white' to='/about'>
                    Apie
                  </Link>
                </li>

                <li className='nav-item'>
                  <Link className='nav-link text-white' to='/informal'>
                    Neformalus švietimas
                  </Link>{' '}
                </li>

                <li className='nav-item'>
                  <Link className='nav-link text-white' to='/new-partner'>
                    Naujas partneris
                  </Link>{' '}
                </li>

                <li className='nav-item'>
                  <Link className='nav-link text-white' to='/news'>
                    Naujienos
                  </Link>{' '}
                </li>

                <li className='nav-item'>
                  <Link className='nav-link text-white' to='/partners'>
                    Partneriai
                  </Link>{' '}
                </li>

                <li className='nav-item'>
                  <Link className='nav-link text-white' to='/search'>
                    Paieška
                  </Link>{' '}
                </li>

                <li className='nav-item '>
                  <Link className='nav-link text-white' to='/career'>
                    Karjera
                  </Link>{' '}
                </li>
              </Fragment>
            </ul>
            <div className='text-end'>
              <button type='button' className='btn btn-outline-light me-2'>
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
