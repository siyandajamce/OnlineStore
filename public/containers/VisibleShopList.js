import { connect } from 'react-redux'
import { toggleShop, deleteShop } from '../actions'
import ShopList from '../components/ShopList'

const getVisibleShops = (shops, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return shops
    case 'SHOW_COMPLETED':
      return shops.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return shops.filter(t => !t.completed)
  }
}

const mapStateToProps = (state) => {
  return {
    shops: getVisibleShops(state.shops, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onShopClick: (id) => {
      dispatch(toggleShop(id))
    },
    onDeleteClick: (id) => {
      dispatch(deleteShop(id))
    }
  }
}

const VisibleShopList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopList)

export default VisibleShopList
