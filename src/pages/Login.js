import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import Joi from 'joi';

function Login() {
  const { register, handleSubmit } = useForm();
  const [errorMsg, setErrorMsg] = useState();
  const [loggingIn, setLoggingIn] = useState(false);
  const [passwordIcon, setPasswordIcon] = useState('fa fa-eye-slash');
  const [passwordType, setPasswordType] = useState('password');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const LOGIN_URL = 'https://consortium-api.onrender.com/auth/login';

  const schema = Joi.object({
    password: Joi.string().pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/,
    ),
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net'] },
    }),
  }).with('email', 'password');

  const onSubmit = (data) => {
    setErrorMsg('');
    if (validUser(data)) {
      setLoggingIn(true);
      const body = {
        email: data.email,
        password: data.password,
      };
      // send data to server
      fetch(LOGIN_URL, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(body),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          return response.json().then((error) => {
            throw new Error(error.message);
          });
        })
        .then((result) => {
          // result.token is the JWT from the successful login
          localStorage.token = result.token;
          setTimeout(() => {
            setLoggingIn(false);
            navigate('/');
          }, 1000);
        })
        .catch((error) => {
          setTimeout(() => {
            setLoggingIn(false);
            setErrorMsg(error.message);
          }, 1000);
        });
    }
  };

  function validUser(user) {
    // check if user is valid. if so return true
    const result = schema.validate(user);
    if (!result.error) {
      return true;
    } else {
      if (result.error.message.includes('password')) {
        setErrorMsg('Password is invalid');
      } else {
        setErrorMsg(`${result.error.details[0].path[0]} is invalid`);
      }
      return false;
    }
  }


  return (
    <>
      <main>
        <div className='d-flex justify-content-center'>
          <form
            className='form-login text-center p-3 bg-primary bg-gradient shadow rounded-4 m-3'
            onSubmit={handleSubmit(onSubmit)}
            method='POST'
          >
            {loggingIn ? (
              <img
                className='loading'
                src='\img\Infinity-2s-200px.svg'
                alt='loading_logo'
                height='200'
              />
            ) : (
              <img
                className='logo-main'
                src='/logo-sm.png'
                alt=''
                height='192'
              />
            )}
            <h1 className='h1 mb-4 fw-normal'>THE CONSORTIUM</h1>
            <h3 className='h3 mb-4 fw-normal'>LOG IN HERE</h3>
            <div className='form-floating mb-2'>
              <input
                type='email'
                className='form-control'
                id='email'
                placeholder='name@example.com'
                {...register('email', { required: true })}
              />
              <label htmlFor='email'>Email address</label>
            </div>
            <div class='input-group mb-3'>
              <div class='form-floating'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className='form-control'
                  id='passwordInput'
                  placeholder='Password'
                  {...register('password', { required: true })}
                />
                <label htmlFor='passwordInput'>Password</label>
              </div>
              <span
                onClick={() => setShowPassword(!showPassword)}
                className='input-group-text'
              >
                <i
                  id='password-icon'
                  class={showPassword ? 'fa fa-eye' : 'fa fa-eye-slash'}
                  aria-hidden='true'
                ></i>
              </span>
            </div>
            <Link to='/register' className='text-info'>
              Not signed up? Register here
            </Link>
            {errorMsg ? <p className='p-1 form-error'>{errorMsg}</p> : null}
            <button className='w-100 mt-3 btn btn-lg btn-success' type='submit'>
              Log in
            </button>
          </form>
          <div className='m-2 bg-img'>
            {/* <img className='img-child' src='\img\football-488714.jpg' /> */}
            <div className='credit text-light justify-content-start align-items-end'>
              Image by{' '}
              <a href='https://pixabay.com/users/jarmoluk-143740/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=488714'>
                Michal Jarmoluk
              </a>{' '}
              from{' '}
              <a href='https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=488714'>
                Pixabay
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Login;
