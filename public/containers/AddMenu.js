import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addShop } from '../actions';
import { deleteShop } from '../actions';

class AddMenu extends Component {

    handleSubmit(event) {
        let name = this.refs.name;
        let location=this.refs.location;
        let contacts=this.refs.contacts;


        event.preventDefault();
        if (!name.value.trim()) {
            return
        }
        if (!location.value.trim()) {
            return
        }

        if (!contacts.value.trim()) {
            return
        }

        this.props.addShop("Store Name:"+name.value+"Location:"+location.value+"Contact Numbers:"+contacts.value);
        name.value= ''
        location.value=''
        contacts.value=''


    }

    render() {
        return (
            <div className="menu">
                <form onSubmit={this.handleSubmit.bind(this)}>
                <h3 className="menuHeader">Add Store</h3>
                <label>
                Food Name
                <br/>
                    <input type="text" ref="name" placeholder="enter name of the food"/>
                </label>

                <br/>
                <br/>

                 <label>
                Price
                <br/>
                    <input type="number" ref="contacts" placeholder="enter the price of the food"/>
              
                </label>

                <br/>
                  <br/>

                <label>
                Description
                <br/>
                    <textarea ref="location" placeholder="enter food description"/>
                </label>

                  
                
                  <br/>
                  <br/>
                    <button type="submit">
                        Add Menu
                    </button>


                </form>
            </div>
        );
    }

}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addShop:(text) => {

            dispatch(addShop(text));
        }
    }
};

export default connect(null, mapDispatchToProps)(AddMenu);