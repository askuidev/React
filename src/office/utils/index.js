import CurrencyFormatter from 'currency-formatter';

export const getUpdatedAllocationData = (arr, data) => {
  return arr.filter((obj, index) => {
    if(data.id === obj.id) {
      obj.actionType = data.actionType;
      obj.actionValue = data.actionValue;
      return true;
    }
  })
}

export const getUpdatedTargetData = (arr, data) => {
  return arr.filter((obj, index) => {
    if(data.id === obj.id) {
      obj[data.field] = data.value;
      return true;
    }
  })
}

export const getAdjustCashFormData = (arr, data) => {
  return arr.filter(obj => data.id === obj.id)[0];
}

export const getUpdatedAdjustCashData = (obj, data) => {
  obj[data.type] = data.value;
  return obj;
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
  getUpdatedTargetData,
  getStyle,
  getStyles,
  getPriceFormat,
  getCalculatedTotal
};
