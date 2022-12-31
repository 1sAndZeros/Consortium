import React from 'react';

function Footer() {
  return (
    <footer className='text-center text-white bg-primary fixed-bottom'>
      <div className='container'>
        <section>
          <a
            className='btn btn-link btn-floating btn-lg text-light m-1'
            href='#!'
            role='button'
            // data-mdb-ripple-color="dark"
          >
            <i className='fab fa-google link-light'></i>
          </a>
          <a
            className='btn btn-link btn-floating btn-lg text-light m-1'
            href='#!'
            role='button'
            // data-mdb-ripple-color="dark"
          >
            <i className='fab fa-instagram link-light'></i>
          </a>

          <a
            className='btn btn-link btn-floating btn-lg text-light m-1'
            href='#!'
            role='button'
            // data-mdb-ripple-color="dark"
          >
            <i className='fab fa-linkedin link-light'></i>
          </a>
          <a
            className='btn btn-link btn-floating btn-lg m-1'
            href='#!'
            role='button'
            // data-mdb-ripple-color="dark"
          >
            <i className='fab fa-github link-light'></i>
          </a>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
