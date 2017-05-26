import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addShop } from '../actions';
import { deleteShop } from '../actions';
import {Link} from 'react-router'


class SignInForm extends Component {



    render() {
        return (
            <div className="signIn">
                <form >
                <h3 className="signIn">Sign In Page</h3>
                <br/>
                
                <label>
                Username
                <br/>
                    <input placeholder="enter username"/>
                </label>

                <br/>
                <br/>

                 <label>
                Password
                <br/>
                    <input placeholder="enter password"/>
              
                </label>
                <br/>
                  <br/>
                  <Link to="main">
                    <button type="submit"

                    >

                        Sign In

                    </button>
                  </Link>
                </form>
            </div>
        );
    }

}



export default SignInForm;