import React, { Component } from 'react';
import Cart from './Cart';
import CartItem from './Cart/CartItem';
import CartTotals from './Cart/CartTotals';
import Menu from './Menu';
import data from '../assets/data';
import menuHelper from '../helpers/menuHelper';
import cartHelper from '../helpers/cartHelper';

class App extends Component {
  constructor(props) {
    super(props);

    /* bind functions if needed here */
    /* define application state here */
  }

  componentDidMount() {
    /* fetch data from the server and update state here */
    /* if you are using local data then update state with local data here */
  }

  onClickCartItem(/* event */) {
    /* remove cart item from the list of cart items */
    /* recalculate the totals */
    /* update state */
  }

  onClickMenuItem(/* event */) {
    /* add cart item to the list of cart items */
    /* recalculate the totals */
    /* update state */
  }

  render() {
    /* If the loading state is true then render loading */
    /* If the error state is true then render error */
    /* Note: If no items have been selected then do not render the Cart. */
    /* return the populated app template and replace the bottom return statement */
    return (
      <div className="container">
        {/* <Menu {...data} onClickMenuItem={() => {}}/> */}
        {/* <CartItem
          id='S10'
          title="Test"
          price={10}
          onClick={() => console.log('Cart item')}
        /> */}
        <Cart
          subTotal={10}
          taxes={1}
          delivery={0}
          total={11}
          selectedItems={[{
            id: "1",
            title: "Something",
            price: 4.99,
            onClick: () => {}
          }]}
          onClickCartItem={() => {}}
        />
        {/* <CartTotals
          subTotal={10}
          taxes={1}
          delivery={0}
          total={11}
        /> */}
      </div>
    );
  }
}

export default App;