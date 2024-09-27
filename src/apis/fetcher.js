// Setup API
import axios from "axios";

export const fetcherOfProducts = axios.create({
  baseURL: "https://66e2e0cb494df9a478e3714d.mockapi.io/verDHN/miniwoodver2/api",
  
});







export const fetcherOfUsers = axios.create({
  baseURL: "https://66ed8383380821644cdd1cbc.mockapi.io/VerDHN-MINIWOOD-2-PROJECT-REACTJS/api",
  
});


// thêm dữ liệu khi đẩy request đi
// fetcher.interceptors.request.use((request) => {
  //Kiểm tra xem user đã đăng nhập hay chưa để thêm token của user vào headers
//   const user = JSON.parse(localStorage.getItem("currentUser"));

//   if (user) {
//     request.headers.Authorization = `Bearer ${user.accessToken}`;
//   }
//   return request;
// });

//Response interceptors
// fetcher.interceptors.response.use(
//   (response)=>{
//Có thể thay đổi response trước khi trả về
// return response
//   },
//   (error)=>{
//Kiểm tra nếu lỗi là 401 => token không hợp lệ =>đăng xuất
// if(error.response.status === 401){
//   localStorage.removeItem("currentUser");

//   window.location.replace("/signin");
// }
// return Promise.reject(error);
//   }
// )

// export default fetcher;
