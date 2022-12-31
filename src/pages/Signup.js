import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Joi from 'joi';

function Signup() {
  // const year = new Date().getFullYear();
  const { register, handleSubmit } = useForm();
  const [errorMsg, setErrorMsg] = useState();
  const [signingUp, setSigningUp] = useState(false);
  const navigate = useNavigate();

  const SIGNUP_URL = 'https://consortium-api.onrender.com/auth/signup';

  const schema = Joi.object({
    firstName: Joi.string()
      .pattern(/^[a-z ,.'-]+$/i)
      .min(3)
      .max(30)
      .trim()
      .required(),
    lastName: Joi.string()
      .pattern(/^[a-z ,.'-]+$/i)
      .min(3)
      .max(30)
      .required(),
    // Password requires a minimum of 8 and maximum of 30 characters, at least one
    // uppercase letter, one lowercase letter, one number and one special character.
    password: Joi.string().pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/,
    ),
    repeat_password: Joi.ref('password'),
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net'] },
    }),
  })
    .with('email', 'password')
    .with('password', 'repeat_password');

  const onSubmit = (data) => {
    setErrorMsg('');
    if (validUser(data)) {
      // send data to server
      const validUser = {
        firstName: data.firstName,
        lastName: data.lastName,
        password: data.password,
        email: data.email,
      };
      setSigningUp(true);
      fetch(SIGNUP_URL, {
        method: 'POST',
        body: JSON.stringify(validUser),
        headers: {
          'content-type': 'application/json',
        },
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
          localStorage.token = result.token;
          setTimeout(() => {
            setSigningUp(false);
            navigate('/');
          }, 1000);
        })
        .catch((error) => {
          setTimeout(() => {
            setSigningUp(false);
            setErrorMsg(error.message);
          }, 1000);
        });
    }
  };

  function validUser(user) {
    // check if user is valid. if so return true
    if (user.password !== user.repeat_password) {
      setErrorMsg('Passwords do not match 🙈');
      return false;
    }
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
      <main className='d-flex justify-content-center text-center mb-5'>
        <form
          className='form-signup p-3 bg-primary bg-gradient shadow rounded-4 m-3'
          onSubmit={handleSubmit(onSubmit)}
          autoComplete='off'
          method='POST'
        >
          <img className='logo-main' src='/logo-sm.png' alt='' height='192' />
          <h1 className='h1 mb-4 fw-normal'>THE CONSORTIUM</h1>

          {!signingUp ? (
            <>
              <h3 className='h3 mb-4 fw-normal'>SIGN UP HERE</h3>
              <div className='form-floating'>
                <input
                  type='text'
                  className='form-control'
                  id='firstName'
                  autoComplete='off'
                  placeholder='First Name'
                  {...register('firstName', { required: true })}
                />
                <label htmlFor='firstName'>First Name</label>
              </div>
              <div className='form-floating'>
                <input
                  type='text'
                  className='form-control'
                  id='lastName'
                  autoComplete='off'
                  placeholder='Last Name'
                  {...register('lastName', { required: true })}
                />
                <label htmlFor='firstName'>Last Name</label>
              </div>
              <div className='form-floating'>
                <input
                  type='email'
                  className='form-control'
                  id='email'
                  autoComplete='off'
                  placeholder='name@example.com'
                  {...register('email', { required: true })}
                />
                <label htmlFor='email'>Email address</label>
              </div>
              <div className='form-floating'>
                <input
                  type='password'
                  className='form-control'
                  id='floatingPassword'
                  autoComplete='off'
                  placeholder='Password'
                  {...register('password', { required: true })}
                />
                <label htmlFor='floatingPassword'>Password</label>
              </div>
              <div className='form-floating'>
                <input
                  onFocus={() => {
                    // do this
                  }}
                  type='password'
                  className='form-control'
                  id='repeatPassword'
                  autoComplete='off'
                  placeholder='Confirm Password'
                  {...register('repeat_password', { required: true })}
                />
                <label htmlFor='repeatPassword'>Confirm Password</label>
              </div>
              <div className='form-helper bg-info bg-gradient m-2 rounded-3'>
                Password requires a minimum of 8 characters, at least one
                uppercase and one lowercase letter, one number and one special
                character.
              </div>
              {errorMsg ? <p className='p-1 form-error'>{errorMsg}</p> : null}
              <button
                className='w-100 mt-1 btn btn-lg btn-success'
                type='submit'
              >
                Register
              </button>
            </>
          ) : (
            <img
              className='loading'
              src='\img\Infinity-2s-200px.svg'
              alt='loading_logo'
            />
          )}
        </form>
        <div className='m-2 bg-img'>
          <img className='img-child' src='\img\football-488714.jpg' />
          <div className='credit text-light'>
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
      </main>
    </>
  );
}

export default Signup;
