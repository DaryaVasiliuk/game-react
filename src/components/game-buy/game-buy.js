import React from 'react';
import './game-buy.css';
import {Button} from "../button";

export const GameBuy = ({ game }) => {
  return (
    <div className='game-buy'>
      <span className='game-buy__price'>{game.price} $</span>
      <Button
        type = 'primary'
        onClick={ () => null }
      >
        В корзину
      </Button>
    </div>
  );
}