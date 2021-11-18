export const getAllTransactions = state => state.transactions.finance;
export const getLoader = state => state.transactions.isLoading;
export const getYears = state => state.transactions.years;

const transactionSelectors = {
  getAllTransactions,
  getLoader,
  getYears,
};
export default transactionSelectors;
