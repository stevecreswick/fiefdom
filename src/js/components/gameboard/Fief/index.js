import React, { Component } from 'react';
import { render } from 'react-dom';
// import { buildGameBoard } from '../../../actions/gameboard';
import Space from '../spaces/Space';
import CastleSpace from '../spaces/CastleSpace';

const firstRow = [ 0, 0, 0, 0, 0, 0, 0 ];
const columns = [ 0, 0, 0, 0, 0, 0, 0 ];
const fiefRow = [ 0, 0, 0, 0, 0, 0, 0 ];

const castleOrGrass = ( rowIndex ) => {
  if (rowIndex % 2 === 0 ) {
    return <Space key={rowIndex}></Space>;
  }
  else {
    return <CastleSpace key={rowIndex}></CastleSpace>;
  }
};

const Fief = () =>
  <div className="board">
    {columns.map(function(column, columnIndex){
      return <div key={columnIndex} className="row fief-row">
        {fiefRow.map(function(fiefRow, rowIndex){
          return castleOrGrass( rowIndex );
        })}
      </div>
    })}
  </div>;

export default Fief;


// border    // Fiefdom  // border

// Fiefdom   // border   // Fiefdom

// border    // Fiefdom  // border

// Fiefdom   // border   // Fiefdom

// border    // Fiefdom  // border
