import React, { PropTypes } from 'react';
import {Link} from 'react-router'

const Shop = ({ onClick, shop,other, onDeleteClick }) => (
  <div
    onClick={onClick}
    >

    {shop.text}


    <Link to="/menu">
      <button>Add Menu</button>
    </Link>

    <Link to={"/shops/" + shop.id + "/edit"}>Edit</Link>
    
    <button style={{color: "#7650"}}
    onClick={()=>onDeleteClick(shop.id)}
    type="button">delete</button>

    </div>


);

Shop.propTypes = {
  onClick: PropTypes.func.isRequired,
  shop: PropTypes.object.isRequired,
  onDeleteClick: PropTypes.func.isRequired
}

module.exports= Shop;
