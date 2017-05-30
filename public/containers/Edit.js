import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { editShop } from '../actions';
import {Link} from 'react-router';

class Edit extends React.Component {
  constructor(props){
    super(props)
    this.state = { };
    this.state.shopText = props.shop.text;
  }

  render(){
    return (
      <div>
      <h1>Store name</h1>
        <h3>{this.props.params.id}</h3>
        <input type="text" value={this.state.shopText} onChange={(e)=>{this.setState({shopText: e.target.value})}}/>
        <Link to="/main"><button type="submit" onClick={(e)=>{this.props.editShop(this.props.shop.id, this.state.shopText)}}>Save</button></Link>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const shopId = ownProps.params.id

  const shop = state.shops.filter((td)=>{return (td.id == shopId)})[0] || {};

  return {
    shop
  }
}


function mapDispatchToProps(dispatch) {
  return {
    editShop: (id, text) => {
      dispatch(editShop(id, text))
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Edit);
