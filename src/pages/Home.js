import React from 'react';
import Title from '../components/Title';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {

  const [user, setUser] = useState({});
  const navigate = useNavigate();
  
useEffect(() => {
  const API_URL = 'http://localhost:5000/';
  fetch(API_URL, {
    headers: {
      authorization: 'Bearer ' + localStorage.token,
    },
  })
    .then((res) => res.json())
    .then((result) => {
      if (result.user) {
        setUser(result.user)
      } else {
        localStorage.removeItem('token');
        navigate('/login')
      }
    });
}, []);


  return (
    <>
      <Title title={user.email} />
    </>
  );
}

export default Home;
