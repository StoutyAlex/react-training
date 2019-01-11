import React from 'react';
import PropTypes from 'prop-types';

const CartTotals = ({ subTotal, taxes, delivery, total }) => {
  if (subTotal != null && taxes != null && delivery != null && total != null) {
      return (
        <div className="cart_totals">
          <div className="row">
            <div className="col-sm-6 cart_totals--info">
              <span>Sub-Total:</span>
            </div>
            <div className="col-sm-6 cart_totals--price">
              <span>£{subTotal}</span>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 cart_totals--info">
              <span>Taxes:</span>
            </div>
            <div className="col-sm-6 cart_totals--price">
              <span>£{taxes}</span>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 cart_totals--info">
              <span>Delivery:</span>
            </div>
            <div className="col-sm-6 cart_totals--price">
              <span>£{delivery}</span>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 cart_totals--info">
              <span>TOTAL:</span>
            </div>
            <div className="col-sm-6 cart_totals--price">
              <span>£{total}</span>
            </div>
          </div>
        </div>
      );
  }
  return null;
};

/* display name for the component */
CartTotals.displayName = 'CartTotals';

CartTotals.propTypes = {
  subTotal: PropTypes.number.isRequired,
  taxes: PropTypes.number.isRequired,
  delivery: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default CartTotals;