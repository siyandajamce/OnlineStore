import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { editMenuItem } from '../actions';

class EditMenu extends React.Component {
  constructor(props){
    super(props)
    this.state = { };
    this.state.itemName = props.shop.itemName;
    this.state.itemsImage= props.shop.itemImage;
    this.state.itemDescription = props.shop.description;
    this.state.itemPrice = props.shop.price;
    this.state.itemCategory = props.shop.category;


  }

  render(){
    return (
      <div>
      <h1>Item name</h1>
        <input type="text" value={this.state.itemName} onChange={(e)=>{this.setState({itemName: e.target.value})}}/>
        <input type="text" value={this.state.itemsImage} onChange={(e)=>{this.setState({itemsImage: e.target.value})}}/>
        <input type="text" value={this.state.itemDescription} onChange={(e)=>{this.setState({itemDescription: e.target.value})}}/>
        <input type="text" value={this.state.itemPrice} onChange={(e)=>{this.setState({itemPrice: e.target.value})}}/>
        <input type="text" value={this.state.itemCategory} onChange={(e)=>{this.setState({itemCategory: e.target.value})}}/>
        <button type="submit" onClick={(e)=>{this.props.editMenuItem(this.props.shop.shopId, this.state.itemName, this.state.itemDescription, this.state.itemPrice,this.state.itemCategory)}}>Update</button>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const menuId = ownProps.params.shopId

  const shop = state.shops.filter((td)=>{return (td.shopId == menuId)})[0] || {};

  return {
    shop
  }
}


function mapDispatchToProps(dispatch) {
  return {
    editMenuItem: (shopId, itemName,itemImage,description,price,category) => {
      dispatch(editMenuItem(shopId, itemName,description,price,category))
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(EditMenu);
