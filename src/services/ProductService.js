import { API_URL, API_KEY, PARAM } from "../constants/ProductConstants";
import axios from "axios";

const api_key = `api_key=${API_KEY}`;

export const getConfigureProductAPI = async () => {
  const configure = await axios.get(`${API_URL}/configuration?${api_key}`);
  return configure;
};

export const getAllProducts = async () => {
  const response = await axios.get(`${API_URL}/${PARAM}`);
  return response;
};
