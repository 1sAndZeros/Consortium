import React from 'react';
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';

const headings = ['Pos','Name','Overall Correct', 'Round Score']
const users = ['Rikie','Paul','Jake','Nick']

function MainTable() {
  return (
    <Container>
      <Table responsive variant='dark'>
        <thead>
          <tr>
            <th>#</th>
            {Array.from(headings).map((_, index) => (
              <th key={index}>Table heading</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: users.length }).map((name, rowNum) => (
            <tr>
              <td>{rowNum}</td>
              {Array.from({ length: headings.length }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default MainTable;
