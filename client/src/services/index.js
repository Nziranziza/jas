import axios from "axios";

const { REACT_APP_BACKEND_BASE_URL = "" } = process.env;

axios.defaults.baseURL = `${REACT_APP_BACKEND_BASE_URL}/api/v1/applications`;

export const getAllApplications = () => {
  return axios.get("/");
};

export const createApplication = (payload) => {
  return axios.post("/", payload);
};

export const updateApplication = (id, payload) => {
  return axios.put(`/${id}`, payload);
};

export const getApplication = (id) => {
  return axios.get(`/${id}`);
};
