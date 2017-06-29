import React, { PropTypes } from 'react';
import Menu from './Menu';


const MenuList = ({ shop, onDeleteClick}) => (
  <div>
    {shop.menu.items.map(item=>
      <Menu
        key={item.id}
        item={item}
        onDeleteClick={onDeleteClick}


      />
    )}
  </div>
);
MenuList.propTypes = {
  shop: PropTypes.shape({
    id: PropTypes.number.isRequired,
    itemName: PropTypes.string.isRequired,
    itemImage:PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired
        
   }).isRequired,
    onDeleteClick: PropTypes.func.isRequired,
}


export default MenuList;
