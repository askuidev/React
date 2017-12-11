import Axios from 'axios';
import config from '../config';
import ActionTypes from './ActionTypes';
import utils from '../utils';

const {
  allocationDataUrl,
  assetDataUrl
} = config.dev;

const {
  getUpdatedAdjustCashData,
  getUpdatedAllocationData,
  getUpdatedTargetData
} = utils;

const getAllocationDataSuccess = (data) => {
  return {
    type: ActionTypes.GET_ALLOCATION_DATA_SUCCESS,
    data
  }
}

export const getAllocationData = () => {
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

export const getAssetData = () => {
  return (dispatch) => {
    return Axios.get(assetDataUrl)
      .then(response => {
        dispatch(getAssetDataSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
}

export const updateAllocationData = (allocationData, data) => {
  const updatedAllocationData = getUpdatedAllocationData(allocationData, data);
  return (dispatch) => {
    return Axios.put(allocationDataUrl+"/"+data.id, updatedAllocationData[0])
      .then(response => {
        dispatch(getAllocationData())
      })
      .catch(error => {
        throw(error);
      });
  };
}

export const updateAllocationTargetData = (allocationData, data) => {
  const updatedTargetData = getUpdatedTargetData(allocationData, data);
  return (dispatch) => {
    return Axios.put(allocationDataUrl+"/"+data.id, updatedTargetData[0])
      .then(response => {
        dispatch(getAllocationData())
      })
      .catch(error => {
        throw(error);
      });
  };
}

export const clearAdjustCashData = () => {
  return {
    type: ActionTypes.CLEAR_ADJUST_CASH_DATA
  }
}

const handleAdjustCashModalSuccess = ({type, data}) => {
  if(type === "open") {
    return {
      type: ActionTypes.SHOW_ADJUST_CASH_MODAL,
      data
    }
  } else {
    return {
      type: ActionTypes.HIDE_ADJUST_CASH_MODAL
    }
  }
}

export const handleAdjustCashModal = (data) => {
  return (dispatch) => {
    dispatch(handleAdjustCashModalSuccess(data))
  }
}

export default {
  getAllocationData,
  getAssetData,
  updateAllocationData,
  updateAllocationTargetData,
  clearAdjustCashData,
  handleAdjustCashModal
};
