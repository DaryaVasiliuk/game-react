import React, {useCallback, useState} from 'react';
import {BiCartAlt} from 'react-icons/bi';
import {useSelector} from "react-redux";
import { CartMenu } from '../cart-menu';
import {calcTotalPrice} from "../utils"
import {ItemsInCart} from '../items-in-cart';
import {useHistory} from 'react-router';
import './cart-block.css';

export const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector(state => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  const history  = useHistory()

  const handleClick = useCallback(() => {
  setIsCartMenuVisible(false);
  history.push('/order');
  }, [history]);

  return (
    <div className='cart-block'>
      <ItemsInCart quantity={items.length}/>
      <BiCartAlt
                 size={25}
                 className='cart-block__icon'
                 onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}/>
      { totalPrice > 0 ?
        <span className='cart-block__total-price'> {totalPrice} $ </span>
        : null }
      { isCartMenuVisible && <CartMenu items={items} onClick={handleClick}/>}
    </div>
  )
}