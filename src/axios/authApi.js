import axios from "axios";
import { logout } from "../redux/slices/authSlice";
import store from "../redux/store/store";
import { notifyError } from "../util/toast";
import { expensesApi } from "./expenseApi";

export const authApi = axios.create({
  baseURL: "https://moneyfulpublicpolicy.co.kr",
});

export const getUserInfo = async () => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    const { data } = await authApi.get("user", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return data;
  }
};

authApi.interceptors.response.use(
  (response) => response,
  (err) => {
    notifyError(err.response.data.message);
    if (
      err.response.data.message ===
      "토큰이 만료되었습니다. 다시 로그인 해주세요."
    ) {
      return store.dispatch(logout());
    }
    return Promise.reject(err);
  }
);

expensesApi.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken)
      return Promise.reject(new Error("사용자 정보 조회에 실패 했습니다."));
    const { data } = await authApi.get("user", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (data?.success) return config;
    return Promise.reject(new Error("사용자 정보 조회에 실패 했습니다."));
  },
  (err) => {
    return Promise.reject(err);
  }
);
