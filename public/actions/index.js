let nextShopId = 0
export const addShop = (text) => {
  return {
    type: 'ADD_SHOP',
    id: nextShopId++,
    text
  }
}

export const toggleShop = (id) => {
  return {
    type: 'TOGGLE_SHOP',
    id
  }
}

export const editShop = (id, text) => {
  return {
    type: 'EDIT_SHOP',
    id,
    text
  }
}

export const deleteShop = (id, text) => {
  return {
    type: 'DELETE_SHOP',
    id,
    text
  }
}
