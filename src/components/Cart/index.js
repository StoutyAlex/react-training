import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';
import CartTotals from './CartTotals';

const renderCartItem = (cartItems, onClick) => 
  cartItems.map(cartItem => 
    <CartItem
      key={cartItem.id}
      {...cartItem}
      onClick={onClick}
    />);

const Cart = ({selectedItems, onClickCartItem, subTotal, taxes, delivery, total}) => {
  return (
    <div className="cart">
      <div className="card">
        <div className="card-body">
          <span className="cart--title">Cart</span>
          <hr />
          {
            renderCartItem(selectedItems, onClickCartItem)
          }
          <CartTotals
            subTotal={subTotal}
            total={total}
            taxes={taxes}
            delivery={delivery}
          />
        </div>
      </div>
    </div>
  );
};

Cart.displayName = 'Cart';

Cart.propTypes = {
  subTotal: PropTypes.number.isRequired,
  taxes: PropTypes.number.isRequired,
  delivery: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  selectedItems: PropTypes.array.isRequired,
  onClickCartItem: PropTypes.func.isRequired,
};

export default Cart;