function auth() {
  const setAuth = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
  };
  const getAuth = () => {
    const userData = localStorage.getItem("user");
    return JSON.parse(userData);
  };
  const getToken = () => {
    const userData = getAuth();
    return userData.acces_token;
  };
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return { setAuth, getAuth, getToken, logout };
}

export default auth();
