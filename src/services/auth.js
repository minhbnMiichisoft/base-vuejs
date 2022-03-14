import ApiService from "@/common/api.service";
import { APIS } from "@/common/api.constants";

export default {
  // login
  login(username, password) {
    return ApiService.post(APIS.LOGIN, {
      username: username,
      password: password,
    })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  },

  //logout
  logout() {
    return ApiService.post(APIS.LOGOUT)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  },
};
