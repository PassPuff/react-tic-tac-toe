import React from 'react';
import style from './SquareBlock.module.scss';

const Square = ({ value, onSquareClick }) => {
  return (
    <button onClick={onSquareClick} className={style.square}>
      {value}
    </button>
  );
};

export default Square;
