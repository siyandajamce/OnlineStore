const shops = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SHOP':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          location: action.location,
          contactNumber: action.contactNumber,
          menu: {
            items: []
          }
         
        }
      ]

      case 'DELETE_SHOP':
    return state.filter(shop => shop.id !== action.id);

      case 'EDIT_SHOP' : {
          return state.map(shop => {
            if (shop.id === action.id) {
              shop = Object.assign({}, shop, {name : action.name},{location : action.location},{contactNumber : action.contactNumber}
             )

              return shop;
            }
            return shop;
          });
      }

      case 'ADD_MENU_ITEM':
const shop = state.filter(shop=> shop.id == action.shopId)[0];
shop.menu.items.push({id: shop.menu.items.length++, name: action.name, price: action.price,description: action.description, category: action.category})

      default : return state;
  }
}





export default shops;
