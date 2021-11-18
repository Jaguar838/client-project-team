const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUsername = state => state.auth.user.name;
const isLoading = state => state.auth.isLoading;
const getAuthError = state => state.auth.error;
const getToken = state => state.auth.token;
const getBalance = state => state.auth.balance;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  isLoading,
  getAuthError,
  getToken,
  getBalance,
};
export default authSelectors;
