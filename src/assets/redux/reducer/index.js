import { combineReducers} from 'redux';

import filter from './filter';
import search from './search';
import cars from './cars';


const rootReducer = combineReducers({
    filter,
    search,
    cars
  })

export default rootReducer;