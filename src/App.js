import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./page/Login.js";
import ProductAll from "./page/ProductAll.js";
import ProductDetail from "./page/ProductDetail.js";
import Navbar from "./components/Navbar.js";
import { useEffect, useState } from "react";
import PrivateRoute from "./route/PrivateRoute";

function App() {
  const [authenicate, setAuthenicate] = useState(false);
  useEffect(() => {
    console.log("로그인");
  }, [authenicate]); //의존선 배열에 값이 있을 때 그 값이 바뀔때마다 함수가 다시 실행
  return (
    <>
      <Navbar authenicate={authenicate} setAuthenicate={setAuthenicate} />
      <Routes>
        <Route path="/" element={<ProductAll />}></Route>
        <Route
          path="/login"
          element={<Login setAuthenicate={setAuthenicate} />}
        ></Route>
        <Route
          path="/product/:id"
          element={<PrivateRoute authenicate={authenicate} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
