import { combineReducers } from 'redux';
import shops from './shops';
import visibilityFilter from './visibilityFilter';


const shopApp = combineReducers({
  shops,
  visibilityFilter
});

export default shopApp;
