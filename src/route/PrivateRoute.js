import React from "react";
import ProductDetail from "../page/ProductDetail";
import { Navigate } from "react-router-dom";

//component인데 특정페이지로의 방향을 강제 설정하는 component ={Navigate}
const PrivateRoute = ({ authenicate }) => {
  return authenicate == true ? <ProductDetail /> : <Navigate to="/login" />;
};

export default PrivateRoute;
