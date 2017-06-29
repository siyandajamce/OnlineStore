const shops = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SHOP':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          image: action.image,
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
              shop = Object.assign({}, shop, {name : action.name},{image: action.image},{location : action.location},{contactNumber : action.contactNumber}
             )

              return shop;
            }
            return shop;
          });
      }                                     


      case 'ADD_MENU_ITEM':
    const shop = state.filter(shop=> shop.id == action.shopId)[0];
    shop.menu.items.push({id: shop.menu.items.length++, itemName: action.itemName, itemImage: action.itemImage, price: action.price,description: action.description, category: action.category})
    return state

 case 'DELETE_MENU_ITEM':
    return shop.menu.item.filter(item=> shop.id !== action.shopId);

     case 'EDIT_MENU_ITEM' : {
          const shop= state.filter(shop => shop.id == action.id);
          shop.menu.item.filter(item=> shop.id == action.shopId)[0];

          return state.map(item => {
            if (item.id=== action.id) {
              item = Object.assign({}, item, {itemName: action.itemName}, {itemImage: action.itemImage},{price: action.price},{description: action.description},{ category: action.category}
             )

              return item;
            }
            return item;
          }); 
      }


      default : return state;
  } 
}





export default shops;
