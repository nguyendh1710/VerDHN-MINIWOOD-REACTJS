import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useUserContext } from "./../../context/UserContext";

export default function ProtectedRoute({ children }) {
  const { currentUser } = useUserContext();
 // phai them ? neu khong se bao loi khi khong co nguoi dung dang nhap
 const typeOfUser = currentUser?.map((item) => {
  return item.loaiNguoiDung;
});
const typeOfUserString = typeOfUser?.join(", ");
console.log(typeOfUserString);

  const location = useLocation();
  

  if (!currentUser) {
    //User chưa đăng nhập => redirect về trang login
    const url = `/signin?redirectTo=${location.pathname}`;
    return <Navigate to={url} replace />;
  }

  if(typeOfUserString !== "QuanTriVien"){
      return <Navigate to="*"/>
  }

  return children || <Outlet />;
}
