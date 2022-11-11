import React from 'react';
import Title from '../components/Title';
import Table from '../components/Table'

function Leagues() {
  return (
    <>
      <Title title='Leagues' />
      <h2>Prem</h2>
      <Table />
      <h2>Non League</h2>
      <Table className='non-league-table' />
    </>
  );
}

export default Leagues;
