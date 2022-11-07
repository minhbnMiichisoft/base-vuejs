const JWT_TOKEN = "JWT_TOKEN";

export const getToken = () => {
  return window.sessionStorage.getItem(JWT_TOKEN);
};

export const saveToken = (token) => {
  window.sessionStorage.setItem(JWT_TOKEN, token);
};

export const destroyToken = () => {
  window.sessionStorage.removeItem(JWT_TOKEN);
};

export const getData = (key) => {
  return window.sessionStorage.getItem(key + getToken());
};

export const saveData = (key, value) => {
  window.sessionStorage.setItem(key + getToken(), value);
};

export const destroyData = (key) => {
  window.sessionStorage.removeItem(key + getToken());
};

export default {
  getToken,
  saveToken,
  destroyToken,
  getData,
  saveData,
  destroyData,
};
