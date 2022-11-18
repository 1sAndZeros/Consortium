import React from 'react';
import Title from '../components/Title';

function Signin() {
  const year = new Date().getFullYear();

  return (
    <>
      <main className='text-center d-flex justify-content-center'>
        <form className='form-signin position-absolute vw-100 p-3 bg-primary bg-gradient shadow rounded-4 m-5'>
          <img className='logo-main' src='/logo-sm.png' alt='' height='192' />
          <h1 className='h1 mb-4 fw-normal'>THE CONSORTIUM</h1>

          <div className='form-floating'>
            <input
              type='email'
              className='form-control'
              id='floatingInput'
              placeholder='name@example.com'
            />
            <label htmlFor='floatingInput'>Email address</label>
          </div>
          <div className='form-floating'>
            <input
              type='password'
              className='form-control'
              id='floatingPassword'
              placeholder='Password'
            />
            <label for='floatingPassword'>Password</label>
          </div>

          <div className='checkbox mb-3'>
            <label>
              <input type='checkbox' value='remember-me' /> Remember me
            </label>
          </div>
          <button className='w-100 btn btn-lg btn-primary' type='submit'>
            Sign in
          </button>
          <p className='mt-5 mb-3 text-light form-footer'>
            Consortium <img src='logo-sm.png'></img> {year}
          </p>
        </form>
      </main>
    </>
  );
}

export default Signin;
