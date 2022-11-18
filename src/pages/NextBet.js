import React, { useState } from 'react';
import Title from '../components/Title';
import BetEntryForm from '../components/BetEntryForm';

function NextBet() {
  return (
    <>
      <Title title='Next Bet' />
      <div className='text-center d-flex justify-content-center'>
        <BetEntryForm />
      </div>
    </>
  );
}

export default NextBet;
