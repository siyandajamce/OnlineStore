import React, { PropTypes } from 'react';
import {Link} from 'react-router'
import AdminDash from './AdminDash'

const Shop = ({ onClick, shop, onDeleteClick }) => (
  <AdminDash>
  <div
    onClick={onClick}
    >

    
    <div>
    {shop.text}
    </div>
 
    <Link to="/menu">
      <button>Add Menu</button>
    </Link>

    <Link to={"/shops/" + shop.id + "/edit"}><button>Edit</button></Link>
    
    <button style={{color: "#7650"}}
    onClick={()=>onDeleteClick(shop.id)}
    type="button">delete</button>

    </div>
       </AdminDash>


);

Shop.propTypes = {
  onClick: PropTypes.func.isRequired,
  shop: PropTypes.object.isRequired,
  onDeleteClick: PropTypes.func.isRequired
}

module.exports= Shop;
