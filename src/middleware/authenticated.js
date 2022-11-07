import sessionStorage from "@/common/sessionStorage";

export default (to, from, next) => {
  if (sessionStorage.getToken()) {
    next();
  } else {
    next("login");
  }
};
