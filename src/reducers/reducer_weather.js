import { FETCH_WEATHER } from '../actions/index';
// A reducer takes the state and an action and returns a new state based on the action.
export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return [action.payload.data, ...state];
  }
  return state;
}