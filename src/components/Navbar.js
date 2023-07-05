import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ authenicate, setAuthenicate }) => {
  const navigate = useNavigate();
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Hone",
    "Sale",
    "지속가능성성",
  ];

  const gotoLogin = () => {
    navigate("/login");
  };
  const gotoMain = () => {
    navigate("/");
  };
  const search = (e) => {
    if (e.key == "Enter") {
      let keyword = e.target.value;
      console.log(keyword);
      navigate(`/?q=${keyword}`);
    }
  };
  return (
    <div className="container mt-5">
      <div
        className="cursor d-flex justify-content-end align-items-center"
        onClick={gotoLogin}
      >
        <i className="fas fa-user"></i>
        {authenicate ? (
          //true일때
          <div
            onClick={() => {
              setAuthenicate(false);
            }}
          >
            <span>Log Out</span>
          </div>
        ) : (
          //false일때
          <div
            onClick={() => {
              setAuthenicate(true);
            }}
          >
            <span>Log In</span>
          </div>
        )}
      </div>
      <div className="cursor text-center">
        <img
          onClick={gotoMain}
          width={100}
          src="https://logos-world.net/wp-content/uploads/2020/05/Zara-Logo.png"
        />
      </div>
      <div className="d-flex mt-4">
        <ul className="d-flex flex-grow-1 justify-content-center align-items-center ">
          {menuList.map((item) => {
            return (
              <li key={item} className="px-2">
                {item}
              </li>
            );
          })}
          <li></li>
        </ul>
        <div>
          <div>
            <i class="fas fa-search"></i>
            <input
              type="text"
              onKeyDown={(event) => {
                search(event);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
