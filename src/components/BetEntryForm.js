import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import { leagues } from '../data/leagues';
import { users } from '../data/users';
import { fixtures } from '../data/currentFixtures';

function BetEntryForm() {
  const [selectedLeague, setSelectedLeague] = useState();
  const [selectedMatch, setSelectedMatch] = useState();
  const [fixtureList, setFixtureList] = useState(fixtures.response);

  useEffect(() => {
    console.log('useEffect ran and selected match is', selectedMatch);
  }, [selectedLeague]);

  function updateFixture() {

  }

  function updateMatch(event) {
    const matchId = parseInt(event.target.value);
    const selectedOption = fixtureList.filter((match) => {return match.fixture.id === matchId})[0];
    setSelectedMatch(selectedOption);
  }

  const betTypes = [
    'Match Winner',
    'Draw',
    'Both Teams to Score (BTTS)',
    'Over',
    'Under',
    'Handicap',
    'Match Winner and BTTS',
  ];

  return (
    <div className='betchoice text-center p-4 text-bg-dark bg-gradient rounded-4 w-auto m-5'>
      <Form>
        <Form.Group as={Row} className='mb-3' controlId='formHorizontalPlayer'>
          <Form.Label column sm={3}>
            Player
          </Form.Label>
          <Col sm={9}>
            <Form.Select required aria-label='Select Player'>
              <option></option>
              {users.map((user, index) => {
                return <option key={index}>{user}</option>;
              })}
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-3' controlId='formHorizontalLeague'>
          <Form.Label column sm={3}>
            League
          </Form.Label>
          <Col sm={9}>
            <Form.Select required aria-label='Select League'>
              <option></option>
              {Object.keys(leagues).map((league, index) => {
                return <option key={index}>{league}</option>;
              })}
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-3' controlId='formHorizontalFixture'>
          <Form.Label column sm={3}>
            Fixture
          </Form.Label>
          <Col sm={9}>
            <Form.Select required onChange={updateMatch}>
              <option></option>
              {fixtureList.map((match, index) => {
                return (
                  <option
                    key={index}
                    value={match.fixture.id}
                  >{`${match.teams.home.name} vs ${match.teams.away.name}`}</option>
                );
              })}
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-3' controlId='formHorizontalBetType'>
          <Form.Label column sm={3}>
            Bet Type
          </Form.Label>
          <Col sm={9}>
            <Form.Select placeholder='Select Bet Type' required>
              <option></option>
              {betTypes.map((betType, index) => {
                return <option key={index}>{betType}</option>;
              })}
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-3' controlId='formHorizontalBetType'>
          <Form.Label column sm={3}>
            Prediction
          </Form.Label>
          <Col sm={9}>
            <Form.Select required aria-label='Select Prediction'>
              <option selected></option>
              <option>
                {selectedMatch ? selectedMatch.teams.home.name : null}
              </option>
              <option>
                {selectedMatch ? selectedMatch.teams.away.name : null}
              </option>
            </Form.Select>
          </Col>
        </Form.Group>
        <Button variant='success' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default BetEntryForm;
