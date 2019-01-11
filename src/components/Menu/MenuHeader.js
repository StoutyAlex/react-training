import React from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';

const MenuHeader = ({ title, address, imgUrl, reviews, rating }) => {
  return (
    <div className="media">
      <div className="media-left">
        <img className="mr-3" src="https://www.seriouseats.com/recipes/images/2015/07/20150728-homemade-whopper-food-lab-35.jpg" alt="Halo" width="120" height="100" />
      </div>
      <div className="media-body">
        <div className="row">
          <div className="col-sm-12">
            <h2>{title}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2">
            <span>
              <StarRatings 
              rating={rating}
              starRatedColor="gold"
              starDimension="25px"
              starSpacing="1px"/>
            </span>
          </div>
          <div className="col-sm-10">
            <span>{reviews} reviews</span>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <span>{address}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

MenuHeader.displayName = 'MenuHeader';

MenuHeader.defaultProps = {
  imgUrl: "",
  reviews: 0,
  rating: 0,
}

MenuHeader.propTypes = {
  title: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  reviews: PropTypes.number,
  rating: PropTypes.number,
};

export default MenuHeader;