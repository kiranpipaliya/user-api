import React, { useRef } from 'react';
import * as api from '../../axiosApi/methods';
export default function RegisterModal(props) {
  const emailInput = useRef();
  const passworInput = useRef();
  const registeFormSubmit = (e) => {
    e.preventDefault();
    if (emailInput.current.value !== '' || passworInput.current.value !== '') {
      const data = {
        email: emailInput.current.value,
        password: passworInput.current.value,
      };
      api.register(data);
    }
  };
  return (
    <>
      <div className={`modal fade ${props.modalShow ? 'show d-block' : ''} `} id='exampleModal'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>
                New message
              </h5>
              <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
            </div>
            <div className='modal-body'>
              <form onSubmit={registeFormSubmit}>
                <div className='mb-3'>
                  <label for='exampleInputEmail1' className='form-label'>
                    Email address
                  </label>
                  <input ref={emailInput} type='email' className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' />
                  <div id='emailHelp' className='form-text'>
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className='mb-3'>
                  <label for='exampleInputPassword1' className='form-label'>
                    Password
                  </label>
                  <input ref={passworInput} type='password' className='form-control' id='exampleInputPassword1' />
                </div>

                <div className='modal-footer'>
                  <button onClick={props.modalHide} type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
                    Close
                  </button>
                  <button type='submit' className='btn btn-primary'>
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
