const shops = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SHOP':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]

      case 'DELETE_SHOP':
    return state.filter(shop => shop.id !== action.id);

      case 'EDIT_SHOP' : {
          return state.map(shop => {
            if (shop.id === action.id) {
              shop = Object.assign({}, shop, {text : action.text})
              return shop;
            }
            return shop;
          });
      }
      default : return state;
  }
}




export default shops;
