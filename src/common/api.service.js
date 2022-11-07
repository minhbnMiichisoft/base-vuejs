import axios from "axios";
import sessionStorage from "@/common/sessionStorage";
import { API_BASE_URL } from "@/common/constants";
import { HTTP_RESPONSE_STATUS_CODES } from "@/common/constants";

const ApiService = () => {
  const defaultOptions = {
    baseURL: API_BASE_URL,
    headers: {
      "X-Requested-With": "XMLHttpRequest",
    },
  };

  // Create instance
  let instance = axios.create(defaultOptions);

  // Set the AUTH token for any request
  instance.interceptors.request.use(function (config) {
    const token = sessionStorage.getToken();
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    // detect IE11 or IE10
    if (
      navigator.userAgent.match(/Trident.*rv:11\./) ||
      navigator.userAgent.match(/MSIE/i)
    ) {
      config.headers.common["Cache-Control"] = "no-cache";
    }

    return config;
  });

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      const errorStatus = error.response.status;
      if (errorStatus === HTTP_RESPONSE_STATUS_CODES.STATUS_401_UNAUTHORIZED) {
        sessionStorage.destroyToken();
      }
      throw error.response.data;
    }
  );

  return instance;
};

export default ApiService();
