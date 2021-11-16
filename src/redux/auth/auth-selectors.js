const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUsername = state => state.auth.user.name;
const isUserLoading = state => state.auth.isLoading;
const getAuthError = state => state.auth.error;
const getToken = state => state.auth.token;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  isUserLoading,
  getAuthError,
  getToken,
};
export default authSelectors;
