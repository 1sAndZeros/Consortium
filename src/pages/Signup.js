import React from 'react';
import Title from '../components/Title';
import { useForm } from 'react-hook-form';

function Signup() {
  const year = new Date().getFullYear();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <main className='d-flex justify-content-center text-center'>
        <form
          className='form-signup p-3 bg-primary bg-gradient shadow rounded-4 mt-3'
          onSubmit={handleSubmit(onSubmit)}
        >
          <img className='logo-main' src='/logo-sm.png' alt='' height='192' />
          <h1 className='h1 mb-4 fw-normal'>THE CONSORTIUM</h1>
          <h3 className='h3 mb-4 fw-normal'>REGISTER HERE</h3>
          <div className='form-floating'>
            <input
              type='email'
              className='form-control'
              id='floatingInput'
              placeholder='name@example.com'
              {...register('email', { required: true })}
            />
            <label htmlFor='floatingInput'>Email address</label>
          </div>
          <div className='form-floating'>
            <input
              type='password'
              className='form-control'
              id='floatingPassword'
              placeholder='Password'
              {...register('password', { required: true })}
            />
            <label htmlFor='floatingPassword'>Password</label>
          </div>
          <button className='w-100 mt-4 btn btn-lg btn-success' type='submit'>
            Register
          </button>
          <p className='mt-5 mb-3 text-muted'>
            Consortium <i className='fa-regular fa-futbol'></i> {year}
          </p>
        </form>
        <div className='m-2 bg-img'>
          <img
            className='rounded'
            width='1050px'
            src='\img\football-488714.jpg'
          />
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
