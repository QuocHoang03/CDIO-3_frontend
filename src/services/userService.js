// import axios from "axios";
import axios from "../custom/axios";

// Login
const loginUser = (data) => {
  return axios.post(`/api/v1/user/login`, {
    data,
  });
};

// Register
const registerUser = (data) => {
  return axios.post(`/api/v1/user/register`, {
    data,
  });
};

// CRUD User
const createUser = (data) => {
  return axios.post(`/api/v1/user/create`, {
    data,
  });
};

const readUser = (currentPage, currentLimit) => {
  return axios.get(`/api/v1/user/read`, {
    params: {
      page: currentPage,
      limit: currentLimit,
    },
  });
};

const updateUser = (data) => {
  return axios.put(`/api/v1/user/update`, {
    data,
  });
};

const deleteUser = (id) => {
  return axios.delete(`/api/v1/user/delete`, {
    data: {
      id: id,
    },
  });
};

// Group
const readGroup = () => {
  return axios.get(`/api/v1/group/read`);
};

export { loginUser, registerUser, createUser, readUser, updateUser, deleteUser, readGroup };
