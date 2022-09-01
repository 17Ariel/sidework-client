import axios from "axios";
import { toaster } from "../utils/toaster";
const api = import.meta.env.VITE_API_KEY;

export const signup = async (user, toast, navigate, setloading) => {
  try {
    setloading(true);
    const response = await axios.post(`${api}/api/user/signup`, user);
    if (response.data) {
      setloading(false);
      navigate("/");
      toaster(toast, "Account created successfully", "success");
    }
  } catch (err) {
    setloading(false);
    if (err.response) {
      const { message } = err.response.data;
      return toaster(toast, `${message}`, "error");
    } else {
      console.log(err);
    }
  }
};

export const signin = async (user, toast, navigate, setloading) => {
  try {
    setloading(true);
    const response = await axios.post(`${api}/api/user/signin`, user);
    if (response.data) {
      setloading(false);
      const { token } = response.data;
      JSON.stringify(localStorage.setItem("user", token));
      navigate("/home");
      toaster(toast, "Welcome back", "success");
    }
  } catch (err) {
    setloading(false);
    if (err.response) {
      const { message } = err.response.data;
      return toaster(toast, `${message}`, "error");
    } else {
      console.log(err);
    }
  }
};

export const logout = async (navigate, handlevnt) => {
  localStorage.removeItem("user");
  handlevnt();
  navigate("/");
};
