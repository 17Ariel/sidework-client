import axios from "axios";
import { toaster } from "../utils/toaster";
const api = import.meta.env.VITE_API_KEY;

export const deleteJobs = async (id, token, navigate, setloading, toast) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    setloading(true);
    const response = await axios.delete(`${api}/api/listings/${id}`, config);
    if (response.data) {
      setloading(false);
      navigate("/jobs");
      toaster(toast, "Jobs has been removed", "success");
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

export const addJobs = async (token, data, toast, navigate, setloading) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    setloading(true);
    const response = await axios.post(`${api}/api/listings`, data, config);
    if (response.data) {
      setloading(false);
      navigate("/home");
      toaster(toast, "Jobs successfully added", "success");
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

export const getJob = async (
  id,
  token,
  setloading,
  toast,
  settitle,
  setdescription,
  setskills,
  setlocation,
  setemail
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    setloading(true);
    const response = await axios.get(`${api}/api/listings/${id}`, config);
    if (response.data) {
      setloading(false);
      const { data } = response;
      settitle(data.title);
      setdescription(data.description);
      setskills(data.skills);
      setlocation(data.location);
      setemail(data.email);
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

export const editJobs = async (
  token,
  data,
  toast,
  navigate,
  setloading,
  id
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    setloading(true);
    const response = await axios.put(`${api}/api/listings/${id}`, data, config);
    if (response.data) {
      setloading(false);
      navigate("/jobs");
      toaster(toast, "Jobs successfully upadated", "success");
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

export const search = async (token, data, toast, setdata) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.get(
      `${api}/api/listings/query/${data}`,
      config
    );
    if (response.data) {
      setdata(response.data);
      console.log(response.data);
    }
  } catch (err) {
    if (err.response) {
      const { message } = err.response.data;
      return toaster(toast, `${message}`, "error");
    } else {
      console.log(err);
    }
  }
};

export const changeStatus = async (
  token,
  toast,
  setloading,
  setdata,
  navigate,
  id
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    setloading(true);
    const response = await axios.put(
      `${api}/api/listings/status/${id}`,
      "",
      config
    );
    if (response.data) {
      setloading(false);
      setdata(response.data);
      navigate("/jobs");
      toaster(toast, "Jobs no longer available", "success");
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
