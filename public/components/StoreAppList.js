import React, { PropTypes } from 'react';
import StoreApp from './StoreApp';

const StoreAppList = ({ shops, onShopClick, onDeleteClick }) => (
  <div>
    {shops.map(shop =>
      <StoreApp
        key={shop.id}
        shop={shop}
        onClick={() => onShopClick(shop.id)}
        onDeleteClick={onDeleteClick}


      />
    )}
  </div>
);

StoreAppList.propTypes = {
  shops: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onShopClick: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired,
}

export default StoreAppList;
