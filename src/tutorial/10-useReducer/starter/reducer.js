import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from './actions';
import { data } from '../../../data';

// reducer function
const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] };
  }

  if (action.type === RESET_LIST) {
    return { ...state, people: data };
  }

  if (action.type === REMOVE_ITEM) {
    return {
      ...state,
      people: state.people.filter((person) => person.id !== action.payload.id),
    };
  }

  throw new Error(`No matching ${action.type} - action type`);
};

export default reducer;
