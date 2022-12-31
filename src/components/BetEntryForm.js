import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useForm } from 'react-hook-form';

import { chosenLeagues } from '../data/leagues';
import { users } from '../data/users';
import { fixtures } from '../data/currentFixtures';
import { betTypes } from '../data/betTypes';

function BetEntryForm() {
  const [selectedLeague, setSelectedLeague] = useState();
  const [selectedMatch, setSelectedMatch] = useState();
  const [fixtureList, setFixtureList] = useState([]);
  const [betTypeOptions, setBetType] = useState([]);
  const leagueList = chosenLeagues;
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    console.log('current league is:', selectedLeague);
    console.log('about to update matches');
    const filteredFixtureList = fixtures.response.filter((match) => {
      return match.league.id === selectedLeague;
    });
    if (filteredFixtureList) {
      setFixtureList(filteredFixtureList);
    }
  }, [selectedLeague]);

  const updateFixture = (event) => {
    const fixtureId = parseInt(event.target.value);
    setSelectedLeague(fixtureId);
  };

  const updateMatch = (event) => {
    const matchId = parseInt(event.target.value);
    const selectedOption = fixtureList.filter((match) => {
      return match.fixture.id === matchId;
    })[0];
    setSelectedMatch(selectedOption);
  }

  const updateBetType = async (event) => {
    const betTypeId = parseInt(event.target.value)
    let betTypeValues = betTypes.find((element) => element.id === betTypeId).values;
    console.log(betTypeValues);
    setBetType(betTypeValues)
  }

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form
      className='betchoice p-4 bg-primary bg-gradient shadow rounded-4 m-5'
      onSubmit={handleSubmit(onSubmit)}
    >
    <h3 className='form-header'>Pick Your Team</h3>
      <Form.Group as={Row} className='mb-3'>
        <Form.Label column sm={3}>
          Player
        </Form.Label>
        <Col sm={9}>
          <Form.Select {...register('player', { required: true })}>
            <option></option>
            {users.map((user, index) => {
              return <option key={index}>{user}</option>;
            })}
          </Form.Select>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className='mb-3'>
        <Form.Label column sm={3}>
          League
        </Form.Label>
        <Col sm={9}>
          <Form.Select
            {...register('chosenLeagueId', { required: true })}
            onChange={updateFixture}
            className='form-select'
          >
            <option></option>
            {leagueList.map((league, index) => {
              return (
                <option key={index} value={league.league.id}>
                  {league.league.name}
                </option>
              );
            })}
          </Form.Select>
        </Col>
        <Form.Label column sm={3}>
          Fixture
        </Form.Label>
        <Col sm={9}>
          <Form.Select
            {...register('chosenFixtureId', { required: true })}
            onChange={updateMatch}
          >
            <option></option>
            {fixtureList.map((match, index) => {
              return (
                <option
                  key={match.fixture.id}
                  value={match.fixture.id}
                >{`${match.teams.home.name} vs ${match.teams.away.name}`}</option>
              );
            })}
          </Form.Select>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className='mb-3'>
        <Form.Label column sm={3}>
          Bet Type
        </Form.Label>
        <Col sm={9}>
          <Form.Select
            {...register('chosenBetType', { required: true })}
            onChange={updateBetType}
          >
            <option></option>
            {betTypes.map((betType, index) => {
              return (
                <option key={index} value={betType.id}>
                  {betType.name}
                </option>
              );
            })}
          </Form.Select>
        </Col>
        <Form.Label column sm={3}>
          Prediction
        </Form.Label>
        <Col sm={9}>
          <Form.Select
            placeholder='Select'
            {...register('chosenPrediction', { required: true })}
            // onChange={updatePrediction}
          >
            <option></option>
            {betTypeOptions.map((option, index) => {
              return (
                <option key={index} value={option}>
                  {option}
                </option>
              );
            })}
          </Form.Select>
        </Col>
      </Form.Group>
      <div className='d-grid gap-2'>
        <Button variant='light' type='submit'>
          Submit
        </Button>
      </div>
    </Form>
  );
}

export default BetEntryForm;
