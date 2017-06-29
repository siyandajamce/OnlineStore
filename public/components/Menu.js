import React, { PropTypes } from 'react';
import {Link} from 'react-router'



const Menu = ({ onClick, item, onDeleteClick}) => (
  <div className="modal"
    onClick={onClick}
    >

    <div>
    {item.itemName}
    <br/>
    <img src={item.itemImage} height="150" width="210"/>
    <br/>
    Description:{item.description}
    <br/>
    Price:{item.price}
    <br/>
    Category :{item.category}

    </div>

       

            <Link to={"/items/" + item.id + "/edit"}><button>Edit</button></Link>
            
            <button style={{color: "#7650"}}
            onClick={()=>onDeleteClick(item.shopId)}
            type="button">Delete</button>

    

    </div>


);

Menu.propTypes = {
  item: PropTypes.object.isRequired,
  onDeleteClick: PropTypes.func.isRequired

}

module.exports= Menu;





