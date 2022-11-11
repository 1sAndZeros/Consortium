import React, { useState } from 'react';
import Title from '../components/Title';
import {leagues} from '../data/leagues';

function Settings() {

  return (
    <>
      <Title title='Settings' />
 {Object.keys(leagues).map((league, index) => {
            return <h2>
              {league}: {leagues[league]}
            </h2>
        })};
    </>
  );
}

export default Settings;
