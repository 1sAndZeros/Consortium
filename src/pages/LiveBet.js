import React from 'react';
import Title from '../components/Title';
import players from '../data/dartsPlayers';

function LiveBet() {
  return (
    <>
      <Title title='Live Bet' />
      <div className='darts-list'>
        {players.map((player) => {
          return (
            <div>{`${player.rank} ${player.name} (${
              player.owner.split(' ')[0][0]
            }${player.owner.split(' ')[1][0]})`}</div>
          );
        })}
      </div>
    </>
  );
}

export default LiveBet;
