import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addMenuItem } from '../actions';
import AddMenu from '../components/AddMenu';
import MenuList from '../components/MenuList';

class AddMenuPage extends Component {
        constructor(props){
        super(props)
    }

    render() {
        return (
            <div>              
            <AddMenu addMenuItem={this.props.addMenuItem}/>
            <MenuList items={this.props.items} />
            </div>
        );
    }

}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addMenuItem:(shopId,name,description,price,category) => {

            dispatch(addMenuItem(shopId,name,description,price,category));
        }
    }
};

export default connect(null, mapDispatchToProps)(AddMenuPage);