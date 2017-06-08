import React, { PropTypes } from 'react';
import {Link} from 'react-router'



const Shop = ({ onClick, shop, onDeleteClick}) => (
  <div
    onClick={onClick}
    >


    <div>
    Store Name:{shop.name}
    <br/>
    Location:{shop.location}
    <br/>
    Contact Number:{shop.contactNumber}

    </div>
    <Link to={"/shops/" + shop.id + "/menu"}>
      <button>Add Menu</button>
    </Link>

    <Link to={"/shops/" + shop.id + "/edit"}><button>Edit</button></Link>
    
    <button style={{color: "#7650"}}
    onClick={()=>onDeleteClick(shop.id)}
    type="button">Delete</button>

    </div>


);

Shop.propTypes = {
  shop: PropTypes.object.isRequired,
  onDeleteClick: PropTypes.func.isRequired
}

module.exports= Shop;
