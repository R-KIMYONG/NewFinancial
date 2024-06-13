import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authApi } from "./../axios/authApi.js";
import { login } from "./../redux/slices/authSlice.js";
import * as S from "./../styledComponents/LoginSignin.jsx";
import { toast } from "react-toastify";
import { setUserInfo } from "./../redux/slices/userSlice.js";

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

  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await authApi.post("/login?expiresIn=60m", {
      id: userId,
      password: userPassword,
    });
    if (data.success) {
      dispatch(login(data.accessToken));
      dispatch(setUserInfo(data));
      notify(data.message);
      navigate("/");
    } else {
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
            placeholder="비밀번호를 입력하시오( 4자리 이상 )"
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
          아직 우리 식구 아니란 말인가? <Link to="signup">회원가입</Link>
        </p>
      </div>
    </S.LoginSignup>
  );
};

export default Login;
