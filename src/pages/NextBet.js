import React, { useState } from 'react';
import Title from '../components/Title';
import BetEntryForm from '../components/BetEntryForm';

function NextBet() {
  return (
    <>
      <Title title='Next Bet' />
      <BetEntryForm />
    </>
  );
}

export default NextBet;
