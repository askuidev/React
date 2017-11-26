const getAllocationData = () => {
  return {
    type: 'GET_ALLOCATION_DATA'
  }
}
const updateAllocationData = (data) => {
  return {
    type: 'UPDATE_ALLOCATION_DATA',
    data
  }
}
export default {getAllocationData, updateAllocationData};
