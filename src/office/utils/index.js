import CurrencyFormatter from 'currency-formatter';

export const getUpdatedAllocationData = (arr, data) => {
  return arr.map((obj, index) => {
    if(data.id === obj.id) {
      obj.targetPer = data.targetPer
    }
    return obj;
  })
}

export const getUpdatedAdjustCashData = (arr, data) => {
  return arr.map((obj, index) => {
    if(data.id === obj.id) {
      obj.actionType = data.actionType;
      obj.actionValue = data.actionValue;
    }
    return obj;
  }).filter(obj => obj.id === data.id);
}

export const getStyle = (prop, value) => {
  const obj = {};
  obj[prop] = value;
  return obj;
}

export const getStyles = (styles = []) => {
  return styles.map(style => getStyle(style));
}

export const getPriceFormat = (price, code = 'USD') => {
  return CurrencyFormatter.format(price, { code });
}

export const getCalculatedTotal = (data, field) => {
  const total = data.reduceRight((prevValue, obj) => {
    return prevValue + +obj[field];
  },0);
  return total.toFixed(2);
}

export default {
  getUpdatedAllocationData,
  getUpdatedAdjustCashData,
  getStyle,
  getStyles,
  getPriceFormat,
  getCalculatedTotal
};
