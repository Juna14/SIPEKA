import axios from "axios";

export const api = axios.create({
  // baseURL: "https://api-gerbangna.itk.ac.id/api/",
  baseURL: "http://localhost:3000/api/", // dummy
  headers: {
    Authorization: 'Bearer 9|BV92PyNSWZl7ZT2Jr5Hqe5Xa0X0GZMeuJDzJAWtI' // bagusnya pake httpOnly cookie
  }
})

if (typeof window !== 'undefined') {
  // Perform localStorage action
  const item = localStorage.getItem('key')
}
const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null

export const apiSister = axios.create({
  // baseURL: "http://sister.itk.ac.id/ws.php/1.0/", // ganti url full sister resikonya pasti error CORS
  baseURL: "/sister/",
  headers: {
    'Authorization': `Bearer ${token}`,
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
})

apiSister.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const config = error.config;
    if (error.response && error.response.status === 401 && !config._retry) {
      config._retry = true;

      window.location.href = "/auth/login";
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);