let nextShopId = 0
let nextShopMenu=0

export const addShop = (name,location,contactNumber) => {
  return {
    type: 'ADD_SHOP',
    id: nextShopId++,
    name,
    location,
    contactNumber,

   
  }
}


export const editShop = (id, name,location,contactNumber) => {
  return {
    type: 'EDIT_SHOP',
    id,
    name,
    location,
    contactNumber,

    
  }
}

export const deleteShop = (id, name,location,contactNumber) => {
  return {
    type: 'DELETE_SHOP',
    id,
    name,
    location,
    contactNumber,

    
  }
}

export const addMenuItem=(shopId,name, description, price, category)=>{
  return{
    type: 'ADD_MENU_ITEM',
    shopId,
    name,
    description,
    price,
    category

  }
}