import React, {Component} from 'react';

class AddMenu extends Component {

    constructor(props){
        super(props)
        this.state = {
            name: '',
            description: '',
            price: '',
            category:'',

        };
    }

    render() {
        return (
            <div className="admin">
                
                <h1 className="addheader">Add Menu Item</h1>
                <br/>
                
                <label>
                Name
                <br/>
                    <input type="text" value={this.state.name} onChange={(e)=>this.setState({name: e.target.value})} placeholder="enter  name"/>
                </label>

                <br/>
                <br/>

                <label>
                Description
                <br/>
                    <input value={this.state.description} onChange={(e)=>this.setState({description: e.target.value})} placeholder="enter description"/>
                </label>

                  <br/>
                  <br/>
                 <label>
                Price
                <br/>
                    <input type="number" value={this.state.price} onChange={(e)=>this.setState({price: e.target.value})} placeholder="enter price"/>
              
                </label>
                <br/>

                <label>
                Category
                <select onChange={(e)=>this.setState({category: e.target.value})}>
            <option></option>
            <option  value="alcohol">Alcohol</option>
            <option value="food">Food</option>
            <option value="coffee">Coffee</option>
            <option value="soft-drink">Soft Drink</option>

          </select>  
          </label>
                  <br/>
                  <br/>
                    <button type="submit" onClick={(e)=>this.props.addMenuItem(this.props.params.id,this.state.name,this.state.description,this.state.price,this.state.category)}>
                        Add Menu Item
                    </button>
                    
                
            </div>
        );
    }

}

export default AddMenu;