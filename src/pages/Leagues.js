import React from 'react';
import Title from '../components/Title';
import Table from '../components/Table'
import { DataGrid } from '@mui/x-data-grid';

function Leagues() {

const columns = [
  {
    field: 'col1',
    headerName: 'Column 1',
    width: 150,
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
  },
  {
    field: 'col2',
    headerName: 'Column 2',
    width: 150,
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
  },
];

const rows = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 3, col1: 'MUI', col2: 'is Amazing' },
];

  return (
    <>
      <Title title='Leagues' />
      <h2>Prem</h2>
      <Table />
      <h2>Non League</h2>
      <Table className='non-league-table' />
      <div style={{ height: 300, width: '50%', margin: 'auto' }}>
        <DataGrid rows={rows} columns={columns} autoHeight={true} />
      </div>
    </>
  );
}

export default Leagues;
