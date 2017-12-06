import {
  createStore,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import utils from '../utils';

const {
  getUpdatedAllocationData,
  getUpdatedAdjustCashData
} = utils;

let initialState = {
  allocationData: [],
  assetData: [],
  showAdjustCashModal: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALLOCATION_DATA_SUCCESS':
      state = Object.assign({}, state, {allocationData: action.data})
      break;
    case 'GET_ASSET_DATA_SUCCESS':
      state = Object.assign({}, state, {assetData: action.data})
      break;
    case 'UPDATE_ALLOCATION_DATA':
      const updatedAllocationData = getUpdatedAllocationData(state.allocationData, action.data);
      state = Object.assign({}, state, {allocationData: updatedAllocationData});
      break;
    case 'UPDATE_ADJUST_CASH_DATA_SUCCESS':
      const updatedAdjustCashData = getUpdatedAdjustCashData(state.allocationData, action.data);
      state = Object.assign({}, state, {allocationData: updatedAdjustCashData});
      break;
    case 'SHOW_ADJUST_CASH_MODAL':
      state = Object.assign({}, state, {showAdjustCashModal: true});
      break;
    case 'HIDE_ADJUST_CASH_MODAL':
      state = Object.assign({}, state, {showAdjustCashModal: false});
      break;
    default:

  }
  console.log(state);
  return state;
}

const configureStore = () => {
  return createStore(reducer, initialState, applyMiddleware(thunk));
}

export default configureStore;
