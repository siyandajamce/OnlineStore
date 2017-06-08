import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addShop } from '../actions';
import { deleteShop } from '../actions';
import AddShop from '../components/AddShop'
import ShopList from '../components/ShopList'

class AddShopPage extends Component {

    constructor(props){
        super(props)
    }


    render() {
        return (
            <div>
            <AddShop addShop={this.props.addShop}/>
            <ShopList shops={this.props.shops} onDeleteClick={this.props.onDeleteClick}/>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
  return {
    shops: state.shops
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addShop:(name,location,contactNumber) => {
            dispatch(addShop(name,location,contactNumber));
        },
        onDeleteClick: (id) => {
            dispatch(deleteShop(id))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddShopPage);