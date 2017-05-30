import React, { PropTypes } from 'react';
import Shop from './Shop';

const ShopList = ({ shops, onShopClick, onDeleteClick }) => (
  <div>
    {shops.map(shop =>
      <Shop
        key={shop.id}
        shop={shop}
        onClick={() => onShopClick(shop.id)}
        onDeleteClick={onDeleteClick}


      />
    )}
  </div>
);

ShopList.propTypes = {
  shops: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onShopClick: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired,
}

export default ShopList;
