import { createStore } from 'redux';

const initialState = {
  sortby: '1',
  category:'KURTIS'
};


function reducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_SORTBY':
      return {
        ...state,
        sortby: action.payload
      };
      
    case 'UPDATE_CATEGORY':
      return {
        ...state,
        category: action.payload
      };
    default:
      return state;
  }
  
}

const store = createStore(reducer);

export default store;
