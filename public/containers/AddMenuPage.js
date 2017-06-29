import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addMenuItem } from '../actions';
import { deleteMenuItem } from '../actions';
import AddMenu from '../components/AddMenu';
import MenuList from '../components/MenuList';




class AddMenuPage extends Component {

  constructor(props){
        super(props)
       
    }

    render() {
        return (
            <div>
              <AddMenu addMenuItem={this.props.addMenuItem} shop={this.props.shop}/>
            <MenuList shop={this.props.shop} onDeleteClick={this.props.onDeleteClick}/>
            </div>
        );
    }

}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.params.id

  const shop = state.shops.filter((td)=>{return (td.id == id)})[0] || {};

  return {
    shop
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addMenuItem:(id,itemName,itemImage,description,price,category) => {

            dispatch(addMenuItem(id,itemName,itemImage,description,price,category));
        },
        onDeleteClick: (id) => {
            dispatch(deleteMenuItem(id))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddMenuPage);