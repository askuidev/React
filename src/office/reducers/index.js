import {
  createStore,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import utils from '../utils';

let initialState = {
  allocationData: [],
  assetData: [],
  allocationId: null,
  showAdjustCashModal: false,
  adjustCashData: {
    actionType: "",
    actionValue: ""
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALLOCATION_DATA_SUCCESS':
      state = Object.assign({}, state, {allocationData: action.data})
      break;
    case 'GET_ASSET_DATA_SUCCESS':
      state = Object.assign({}, state, {assetData: action.data})
      break;
    case 'CLEAR_ADJUST_CASH_DATA':
      state = Object.assign({}, state, {adjustCashData: initialState.adjustCashData});
      break;
    case 'SHOW_ADJUST_CASH_MODAL':
      const showAdjustCashFormData = {
        actionType: action.data.actionType || "",
        actionValue: action.data.actionValue || ""
      }
      const showAdjustCashData = {
        showAdjustCashModal: true,
        allocationId: action.data.id,
        adjustCashData: showAdjustCashFormData
      };
      state = Object.assign({}, state, showAdjustCashData);
      break;
    case 'HIDE_ADJUST_CASH_MODAL':
      const hideAdjustCashFormData = {
        actionType: "",
        actionValue: ""
      }
      const hideAdjustCashData = {
        showAdjustCashModal: false,
        allocationId: null,
        adjustCashData: hideAdjustCashFormData
      };
      state = Object.assign({}, state, hideAdjustCashData);
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
