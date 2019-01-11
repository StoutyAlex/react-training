import React from 'react';
import PropTypes from 'prop-types';
import MenuHeader from './MenuHeader';
import MenuSection from './MenuSection';

const renderMenuSections = (menuSections, onClickMenuItem) => 
  menuSections.map(menuSection => (
    <MenuSection
      {...menuSection}
      onClickMenuItem={onClickMenuItem}
      key={menuSection.id}
    />
  ));

const Menu = ({ id, title, address, imgUrl, reviews, rating, menuSections, onClickMenuItem }) => {
  if (id && title && address && imgUrl && reviews && rating && menuSections && menuSections.length >= 1 && onClickMenuItem) {
    return (
      <div className="restaurant">
        <MenuHeader
          title={title}
          address={address}
          imgUrl={imgUrl}
          reviews={reviews}
          rating={rating}
        />
        <div className="menu">
        {
          renderMenuSections(menuSections, onClickMenuItem)
        }
        </div>
      </div>
    );
  }
  return null;
};

Menu.displayName = 'Menu';

Menu.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  reviews: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  menuSections: PropTypes.array.isRequired,
  onClickMenuItem: PropTypes.func.isRequired,
};

export default Menu;