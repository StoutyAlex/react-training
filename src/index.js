import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import MenuSection from './components/Menu/MenuSection';
import './assets/styles.css';

const menuItems = [
  {
    id: '1',
    description: 'desc 1',
    title: 'Title 1',
    price: 20,
  }, {
    id: '2',
    description: 'desc 2',
    title: 'Title 2',
    price: 200,
  }, {
    id: '3',
    description: 'desc 3',
    title: 'Title 3',
    price: 2000,
  }
];

ReactDOM.render(<MenuSection
  id="S001"
  title="Some Title"
  description="Some description"
  menuItems={menuItems}
  onClickMenuItem={() => console.log('Pressed menu item')}
/>, document.getElementById('root'));
