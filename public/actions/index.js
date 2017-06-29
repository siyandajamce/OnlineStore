let nextShopId = 0
let nextShopMenu=0

export const addShop = (name,image,location,contactNumber) => {
  return {
    type: 'ADD_SHOP',
    id: nextShopId++,
    name,
    image,
    location,
    contactNumber,

   
  }
}


export const editShop = (id, name,image,location,contactNumber) => {
  return {
    type: 'EDIT_SHOP',
    id,
    name,
    image,
    location,
    contactNumber,

    
  }
}

export const deleteShop = (id, name,image,location,contactNumber) => {
  return {
    type: 'DELETE_SHOP',
    id,
    name,
    image,
    location,
    contactNumber,

    
  }
}

export const addMenuItem=(shopId,itemName,itemImage, description, price, category)=>{
  return{
    type: 'ADD_MENU_ITEM',
    shopId: shopId,
    itemName,
    itemImage,
    description,
    price,
    category,
    

  }
}

export const editMenuItem=(shopId,itemName,itemImage, description, price, category)=>{
  return{
    type: 'EDIT_MENU_ITEM',
    shopId,
    itemName,
    itemImage,
    description,
    price,
    category,
    

  }
}

export const deleteMenuItem=(shopId,itemName,itemImage, description, price, category)=>{
  return{
    type: 'DELETE_MENU_ITEM',
    shopId,
    itemName,
    itemImage,
    description,
    price,
    category

  }
}