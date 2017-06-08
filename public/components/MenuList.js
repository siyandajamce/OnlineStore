import React, { PropTypes } from 'react';
import Menu from './Menu';


const MenuList = ({ items }) => (
  <div>
    {items.map(shop =>
      <Menu
        key={shop.id}
        shop={shop}


      />
    )}
  </div>
);
MenuList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
  	id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired
        
   }).isRequired)
}

export default MenuList;
