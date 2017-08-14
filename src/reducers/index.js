import { combineReducers } from 'redux';
import weatherReducer from './reducer_weather';
// Combines all reducers into a rootReducer
const rootReducer = combineReducers({
  weather: weatherReducer
});

export default rootReducer;
