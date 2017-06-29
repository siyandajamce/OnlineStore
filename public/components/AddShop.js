import React, {Component} from 'react';

class AddShop extends Component {

    constructor(props){
        super(props)
        this.state = {
            name: '',
            image:'',
            location: '',
            contactNumber: '',

            

        };
    }


    render() {
        return (
            <div className="admin"



            >
                <h1 className="addheader">Add Store</h1>
                <br/>
                
                <label>
                Store Name
                <br/>
                    <input type="text" value={this.state.name} onChange={(e)=>this.setState({name: e.target.value})} placeholder="enter store name"/>
                </label>

                <br/>
                <br/>
                <label>
                Logo              
                  <br/>
                    <input  type="text" value={this.state.image} onChange={(e)=>this.setState({image: e.target.value})} placeholder="url"/>
              
                </label>
                <br/>
                <br/>
                <label>
                Location
                <br/>
                    <input type="text" value={this.state.location} onChange={(e)=>this.setState({location: e.target.value})} placeholder="enter store location"/>
                </label>

                  <br/>
                  <br/>
                 <label>
                Contact Numbers
                <br/>
                    <input type="number" value={this.state.contactNumber} onChange={(e)=>this.setState({contactNumber: e.target.value})} placeholder="enter contact numbers"/>
              
                </label>
                 
                  <br/>
                  <br/>
                    <button type="submit" onClick={(e)=>this.props.addShop(this.state.name,this.state.image,this.state.location,this.state.contactNumber)}>
                        Add Store
                    </button>
                    
            </div>
        );
    }

}

export default AddShop;
