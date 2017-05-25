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

        this.props.addShop("Store Name:"+name.value+"   "+"Location:"+location.value+"   "+"Contact Numbers:"+contacts.value);
        name.value= ''
        location.value=''
        contacts.value=''


    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                <h3>Add Store</h3>
                <label>
                Store Name:
                    <input type="text" ref="name"/>
                </label>

                <br/>
                <br/>

                <label>
                Location:
                    <input ref="location"/>
                </label>

                  <br/>
                  <br/>
                 <label>
                Contact Numbers:
                    <input type="number" ref="contacts"/>
              
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