import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authApi } from "./../axios/authApi.js";

import { useSelector } from "react-redux";
import { notifyError, notifySuccess } from "./../util/toast.js";
import { Loginsignup } from "../Styledcomponents/Loginsignin.jsx";
const Signup = () => {
  const [userId, setUserId] = useState("");
  const [userPassWord, setUserPassword] = useState("");
  const [userCheckPW, setUserCheckPW] = useState("");
  const [userNickName, setUserNickName] = useState("");
  const { isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (checkSignUpUserInfo()) {
      return;
    }
    try {
      const response = await authApi.post("/register", {
        id: userId,
        password: userPassWord,
        nickname: userNickName,
      });
      const data = response.data;
      if (data.success) {
        notifySuccess(data.message);
        navigate("/login");
      } else {
        notifyError(data.message);
      }
    } catch (error) {}
  };

  const checkSignUpUserInfo = () => {
    const newError = [];
    if (userPassWord !== userCheckPW)
      newError.push("입력하신 비밀번호 일치하지않습니다.");
    if (userNickName.trim() === "") newError.push("닉네임 입력하지않았습니다.");
    if (userId.trim() === "") newError.push("아이디 입력하지않았습니다.");
    if (userCheckPW.trim() === "" && userPassWord.trim() === "")
      newError.push("비밀번호 확인해주세요");
    if (newError.length > 0) {
      notifyError(newError);
      return true;
    }
    return false;
  };
  return (
    <Loginsignup>
      <h1>회원가입</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userId">아이디: </label>
          <input
            type="text"
            placeholder="아이디를 입력하세요"
            value={userId}
            onChange={(e) => {
              setUserId(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="userId">비밀번호: </label>
          <input
            type="password"
            placeholder="비밀번호 입력하세요"
            value={userPassWord}
            onChange={(e) => {
              setUserPassword(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="userId">비밀번호 확인: </label>
          <input
            type="password"
            placeholder="비밀번호 다시 입력하세요"
            value={userCheckPW}
            onChange={(e) => {
              setUserCheckPW(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="userId">닉네임: </label>
          <input
            type="text"
            placeholder="닉네임 입력하세요"
            value={userNickName}
            onChange={(e) => {
              setUserNickName(e.target.value);
            }}
          />
        </div>
        <button>회원 가입</button>
      </form>
      <div className="signup">
        <Link to="/login">로그인하러 하기</Link>
      </div>
    </Loginsignup>
  );
};

export default Signup;
