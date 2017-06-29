import React, {Component} from 'react';

class AddMenu extends Component {

    constructor(props){
        super(props)
        this.state = {
            name: '',
            itemImage:'',
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
                    <input type="text" value={this.state.itemName} onChange={(e)=>this.setState({itemName: e.target.value})} placeholder="enter  name"/>
                </label>

                <br/>
                <br/>

                 <label>
                Item Image              
                  <br/>
                    <input  type="text" value={this.state.itemImage} onChange={(e)=>this.setState({itemImage: e.target.value})} placeholder="url"/>
              
                </label>

                <label>
                Description
                <br/>
                    <input type="text" value={this.state.description} onChange={(e)=>this.setState({description: e.target.value})} placeholder="enter description"/>
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
                <select type="text" value={this.state.category} onChange={(e)=>this.setState({category: e.target.value})}>
            <option></option>
            <option  type="text" value="alcohol">Alcohol</option>
            <option type="text" value="food">Food</option>
            <option type="text" value="coffee">Coffee</option>
            <option type="text" value="soft-drink">Soft Drink</option>

          </select>  
          </label>
                  <br/>
                  <br/>
                    <button type="submit" onClick={(e)=>this.props.addMenuItem(this.props.shop.id,this.state.itemName,this.state.itemImage,this.state.description,this.state.price,this.state.category)}>
                        Add Menu Item
                    </button>
                    
                
            </div>
        );
    }

}

export default AddMenu;