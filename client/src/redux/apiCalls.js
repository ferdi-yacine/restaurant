import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../config.js";
import { reset } from "./cardSlice";
import { loginFailure, loginStart, loginSuccess, logout } from "./userSlice";



export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axiosInstance.post("auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const logoutUser = async (dispatch) => {
  try {
    await axiosInstance.post("auth/logout");
    dispatch(logout());
    dispatch(reset());
  } catch (err) {}
};
