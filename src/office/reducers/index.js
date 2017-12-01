let allocationData = [
  {
    adjustCash: true,
    color: "",
    symbol: "",
    description: "Cash",
    value: "21716.67",
    currentPer: "21.12",
    targetPer: "10.35",
    targetPrice: "10282.78",
    driftPer: "11.12",
    buySellPrice: "11433.89"
  },
  {
    adjustCash: false,
    color: "",
    symbol: "FTFBX",
    description: "Fidelity Total Bond Fund",
    value: "21716.67",
    currentPer: "21.12",
    targetPer: "10.35",
    targetPrice: "10282.78",
    driftPer: "11.12",
    buySellPrice: "11433.89"
  },
  {
    adjustCash: false,
    color: "",
    symbol: "FTFBX",
    description: "Fidelity Total Bond Fund",
    value: "21716.67",
    currentPer: "21.12",
    targetPer: "10.35",
    targetPrice: "10282.78",
    driftPer: "11.12",
    buySellPrice: "11433.89"
  },
  {
    adjustCash: false,
    color: "red",
    symbol: "FTFBX",
    description: "Fidelity Total Bond Fund",
    value: "21716.67",
    currentPer: "21.12",
    targetPer: "10.35",
    targetPrice: "10282.78",
    driftPer: "11.12",
    buySellPrice: "11433.89"
  },
  {
    adjustCash: false,
    color: "red",
    symbol: "FTFBX",
    description: "Fidelity Total Bond Fund",
    value: "21716.67",
    currentPer: "21.12",
    targetPer: "10.35",
    targetPrice: "10282.78",
    driftPer: "11.12",
    buySellPrice: "11433.89"
  }
];

let initialState = {
  allocationData: allocationData
};

function getUpdatedData(arr, data) {
  return arr.map((obj, index) => {
    if(data.id === ++index) {
      obj.targetPer = data.targetPer
    }
    return obj;
  })
}

function getUpdatedAdjustCashData(arr, data) {
  return arr.map((obj, index) => {
    if(data.actionId === ++index) {
      obj.actionType = data.actionType;
      obj.actionValue = data.actionValue;
    }
    return obj;
  })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALLOCATION_DATA':
      state = Object.assign({}, state)
      break;
    case 'UPDATE_ALLOCATION_DATA':
      const updatedAllocationData = getUpdatedData(state.allocationData, action.data);
      state = Object.assign({}, state, {allocationData: updatedAllocationData});
      break;
    case 'UPDATE_ADJUST_CASH_DATA':
      const updatedAdjustCashData = getUpdatedAdjustCashData(state.allocationData, action.data);
      state = Object.assign({}, state, {allocationData: updatedAdjustCashData});
      break;
    default:

  }
  return state;
}

export default reducer;
