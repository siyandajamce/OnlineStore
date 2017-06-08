import React, { PropTypes } from 'react';
import {Link} from 'react-router'



const Menu = ({ onClick, shop}) => (
  <div
    onClick={onClick}
    >

    <div>
    Name:{shop.name}
    <br/>
    description:{shop.description}
    <br/>
    Price:{shop.price}
    <br/>
    Category :{shop.category}

    </div>
    

    
    

    </div>


);

Menu.propTypes = {
  shop: PropTypes.object.isRequired,
}

module.exports= Menu;





