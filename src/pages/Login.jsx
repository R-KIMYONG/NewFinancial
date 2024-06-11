import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authApi } from "../axios/\bauthApi";
import { userLogin } from "../redux/slices/userSlice";
import * as S from "../StyledComponents/LoginSignin.styled";
import { toast } from "react-toastify";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const notify = (comment) => {
    toast.error(comment, {
      position: "top-center",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authApi.post("/login", {
        id: userId,
        password: userPassword,
      });
      const data = response.data;
      if (data.success) {
        dispatch(userLogin(data.accessToken));
        notify(data.message);
        navigate("/");
      } else {
        // alert("Login failed");
        notify("Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      notify("Login failed");
    }
  };
  return (
    <S.LoginSignup>
      <h1>Welcome</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>아이디: </label>
          <input
            type="text"
            placeholder="아이디를 입력하시오"
            value={userId}
            onChange={(e) => {
              setUserId(e.target.value);
            }}
          />
        </div>
        <div>
          <label>비밀번호: </label>
          <input
            type="password"
            placeholder="비밀번호를 입력하시오"
            value={userPassword}
            onChange={(e) => {
              setUserPassword(e.target.value);
            }}
          />
        </div>
        <button>로그인</button>
      </form>
      <div className="signup">
        <p>
          아직 우리 식구 아니란 말인가? <Link to="/signup">회원가입</Link>
        </p>
      </div>
    </S.LoginSignup>
  );
};

export default Login;
