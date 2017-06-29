import React, { PropTypes } from 'react';
import Shop from './Shop';


const ShopList = ({ shops, onDeleteClick }) => (
  <div>
    {shops.map(shop =>
      <Shop
        key={shop.id}
        shop={shop}
        onDeleteClick={onDeleteClick}


      />

    )}
  </div>
);

ShopList.propTypes = {
  shops: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    contactNumber: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired

  }).isRequired).isRequired,
    onDeleteClick: PropTypes.func.isRequired,
}

export default ShopList;
