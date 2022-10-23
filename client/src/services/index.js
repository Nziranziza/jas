import axios from "axios"

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_BASE_URL

export const getAllApplications = () => {
  return axios.get('/api/v1/applications')
}

export const createApplication = (payload) => {
  return axios.post('/api/v1/applications', payload)
}

export const updateApplication = (id, payload) => {
  return axios.put(`/api/v1/applications/${id}`, payload)
}