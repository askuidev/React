import Axios from 'axios';
import config from '../config';
import ActionTypes from './ActionTypes';
import utils from '../utils';

const {
  allocationDataUrl,
  assetDataUrl
} = config.dev;

const {
  getUpdatedAdjustCashData
} = utils;

const getAllocationDataSuccess = (data) => {
  return {
    type: ActionTypes.GET_ALLOCATION_DATA_SUCCESS,
    data
  }
}

const getAllocationData = () => {
  return (dispatch) => {
    return Axios.get(allocationDataUrl)
      .then(response => {
        dispatch(getAllocationDataSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

const getAssetDataSuccess = (data) => {
  return {
    type: ActionTypes.GET_ASSET_DATA_SUCCESS,
    data
  }
}

const getAssetData = () => {
  return (dispatch) => {
    return Axios.get(assetDataUrl)
      .then(response => {
        dispatch(getAssetDataSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

const updateAllocationData = (data) => {
  return {
    type: ActionTypes.UPDATE_ALLOCATION_DATA,
    data
  }
}

const updateAdjustCashDataSuccess = (data) => {
  return {
    type: ActionTypes.UPDATE_ADJUST_CASH_DATA_SUCCESS,
    data
  }
}

const updateAdjustCashData = (allocationData, data) => {
  const updatedAdjustCashData = getUpdatedAdjustCashData(allocationData, data);
  return (dispatch) => {
    return Axios.put(allocationDataUrl+"/"+data.id, updatedAdjustCashData)
      .then(response => {
        dispatch(getAllocationData())
      })
      .catch(error => {
        throw(error);
      });
  };
}

const handleAdjustCashModalSuccess = (type) => {
  if(type === "open") {
    return {
      type: ActionTypes.SHOW_ADJUST_CASH_MODAL
    }
  } else {
    return {
      type: ActionTypes.HIDE_ADJUST_CASH_MODAL
    }
  }
}

const handleAdjustCashModal = (type) => {
  return (dispatch) => {
    dispatch(handleAdjustCashModalSuccess(type))
  }
}

export default {
  getAllocationData,
  getAllocationDataSuccess,
  getAssetData,
  getAssetDataSuccess,
  updateAllocationData,
  updateAdjustCashDataSuccess,
  updateAdjustCashData,
  handleAdjustCashModalSuccess,
  handleAdjustCashModal
};
