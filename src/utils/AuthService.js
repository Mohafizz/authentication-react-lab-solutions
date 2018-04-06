export const isAuthenticated = () => sessionStorage.getItem("token") !== null;
