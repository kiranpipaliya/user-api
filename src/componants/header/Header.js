import React, { useState, useContext } from 'react';
import { TbApi } from 'react-icons/tb';
import LoginModal from '../modal/LoginModal';
import RegisterModal from '../modal/RegisterModal';
import AuthContext from '../../context/AuthContex';
export default function Header() {
  const authCtx = useContext(AuthContext);
  const [modalShow, setModalShow] = useState(false);
  const [loginModalShow, setLoginModalShow] = useState(false);

  const modalShowHandler = () => {
    setModalShow(!modalShow);
  };
  const LoginModalShowHandler = () => {
    setLoginModalShow(!loginModalShow);
  };

  const autBtns = (
    <div className='text-end'>
      <button onClick={LoginModalShowHandler} type='button' className='btn btn-outline-light me-2'>
        Login
      </button>
      <button onClick={modalShowHandler} type='button' className='btn btn-warning'>
        Sign-up
      </button>
    </div>
  );

  return (
    <>
      <header className='p-3 text-bg-dark'>
        <div className='container'>
          <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>
            <a href='/' className='d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none'>
              <TbApi className='logo'></TbApi>
            </a>

            <ul className='nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0'>
              <li>
                <a href='#' className='nav-link px-2 text-secondary'>
                  Home
                </a>
              </li>
              <li>
                <a href='#' className='nav-link px-2 text-white'>
                  Features
                </a>
              </li>
              <li>
                <a href='#' className='nav-link px-2 text-white'>
                  Pricing
                </a>
              </li>
              <li>
                <a href='#' className='nav-link px-2 text-white'>
                  FAQs
                </a>
              </li>
              <li>
                <a href='#' className='nav-link px-2 text-white'>
                  About
                </a>
              </li>
            </ul>

            <form className='col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3' role='search'>
              <input type='search' className='form-control form-control-dark text-bg-dark' placeholder='Search...' aria-label='Search' />
            </form>
            {authCtx.token == '' && autBtns}
            {authCtx.token !== '' && <p style={{ color: 'white' }}>Avatar</p>}
          </div>
        </div>
      </header>
      <RegisterModal modalShow={modalShow} modalHide={modalShowHandler} />
      <LoginModal modalShow={loginModalShow} modalHide={LoginModalShowHandler} />
    </>
  );
}
