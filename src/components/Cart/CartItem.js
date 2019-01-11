import React from 'react';
import PropTypes from 'prop-types';

const CartItem = ({ id, title, price, onClick }) => {
  if (id && title && price && onClick ) {
    return (
      <div className="cart_item">
        <div className="row">
          <div className="col-sm-10 cart_item--title">
            <span>{title}</span>
          </div>
          <div className="col-sm-1 cart_item--price">
            <span>£{price}</span>
          </div>
          <div className="col-sm-1">
            <button type="button" className="btn btn-danger qa-cart-item-button" id={id} onClick={onClick}>-</button>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

CartItem.displayName = 'CartItem';

CartItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CartItem;