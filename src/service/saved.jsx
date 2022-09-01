import axios from "axios";
import { toaster } from "../utils/toaster";
const api = import.meta.env.VITE_API_KEY;

export const saved = async (token, toast, navigate, setloading, id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    setloading(true);
    const response = await axios.post(`${api}/api/saved/${id}`, "", config);
    if (response.data) {
      setloading(false);
      navigate("/saved");
      toaster(toast, "Jobs successfully saved", "success");
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

export const unsaved = async (
  token,
  toast,
  navigate,
  setloading,
  id,
  setdata
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    setloading(true);
    const response = await axios.delete(`${api}/api/saved/${id}`, config);
    if (response.data) {
      setloading(false);
      setdata(response.data);
      navigate("/saved");
      toaster(toast, "Jobs unsaved", "success");
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
