import React, { Component } from 'react';
import Cart from './Cart';
import Menu from './Menu';
import data from '../assets/data';
import menuHelper, { getSelectedItem } from '../helpers/menuHelper';
import cartHelper from '../helpers/cartHelper';

class App extends Component {
  constructor(props) {
    super(props);
    this.onClickMenuItem = this.onClickMenuItem.bind(this);
    this.onClickCartItem = this.onClickCartItem.bind(this);
    this.state = {
      data: {},
      selectedItems: [],
    };
    
  }

  componentWillMount() {
    /* fetch data from the server and update state here */
    /* if you are using local data then update state with local data here */
    this.setState({data})
  }

  onClickCartItem(/* event */) {
    /* remove cart item from the list of cart items */
    /* recalculate the totals */
    /* update state */
  }

  onClickMenuItem(event) {
    const selectedItem = getSelectedItem(this.state.data.menuSections, event.target.id);
    this.setState({
      selectedItems: [...this.state.selectedItems, selectedItem],
    });
    console.log(event);
  }

  render() {
    /* If the loading state is true then render loading */
    /* If the error state is true then render error */
    /* Note: If no items have been selected then do not render the Cart. */
    /* return the populated app template and replace the bottom return statement */
    return (
      <div className="container">
        <Menu {...this.state.data} onClickMenuItem={this.onClickMenuItem}/>
        <Cart
          subTotal={10}
          taxes={1}
          delivery={0}
          total={11}
          selectedItems={this.state.selectedItems}
          onClickCartItem={() => {}}
        />
      </div>
    );
  }
}

export default App;