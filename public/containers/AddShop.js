import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addShop } from '../actions';
import { deleteShop } from '../actions';


class AddShop extends Component {

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

        this.props.addShop("Store Name:"+name.value+"   "+"   "+"Location:"+location.value+"   "+"   "+"Contact Numbers:"+contacts.value);
        name.value= ''
        location.value=''
        contacts.value=''


    }

    render() {
        return (
            <div className="admin">
                <form onSubmit={this.handleSubmit.bind(this)}>
                <h1 className="addheader">Add Store</h1>
                <br/>
                
                <label>
                Store Name
                <br/>
                    <input type="text" ref="name" placeholder="enter store name"/>
                </label>

                <br/>
                <br/>

                <label>
                Location
                <br/>
                    <input ref="location" placeholder="enter store location"/>
                </label>

                  <br/>
                  <br/>
                 <label>
                Contact Numbers
                <br/>
                    <input type="number" ref="contacts" placeholder="enter contact numbers"/>
              
                </label>
                  <br/>
                  <br/>
                    <button type="submit">
                        Add Store
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

export default connect(null, mapDispatchToProps)(AddShop);