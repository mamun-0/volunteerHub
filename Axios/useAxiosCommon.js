import axios from "axios";

const common = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});
export function useAxiosCommon() {
  return common;
}
