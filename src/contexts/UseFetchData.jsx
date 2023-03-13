import axios from "axios";
import { useQuery } from "react-query";

const fetchData = () => {
  return axios.get("https://fakestoreapi.com/products");
};

export const UseFetchData = () => {
  return useQuery(["produts"], fetchData);
};
