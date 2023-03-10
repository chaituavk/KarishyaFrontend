import axios from "axios";

axios.defaults.baseURL = process.env.BASE_URL || "http://localhost:8080";

// axios.interceptors.request.use(function (config) {
//     // Do something before request is sent
//     const local = {
//         baseUrl: process.env.BASE_URL || "http://localhost:8080"
//     }
//     return {...config,...local};
//   }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   });

// // Add a response interceptor
// axios.interceptors.response.use(function (response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     return response;
//   }, function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     return Promise.reject(error);
//   });


const getPooja = () => {
    return axios.get('api/pujas')
}


export {
    getPooja
}