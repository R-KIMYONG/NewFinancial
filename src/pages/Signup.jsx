import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authApi } from "../axios/\bauthApi";
import * as S from "../StyledComponents/LoginSignin.styled";
import { toast } from "react-toastify";
const Signup = () => {
  const [userId, setUserId] = useState("");
  const [userPassWord, setUserPassword] = useState("");
  const [userCheckPW, setUserCheckPW] = useState("");
  const [userNickName, setUserNickName] = useState("");
  const navigate = useNavigate();
  const notify = (comment) => {
    toast.success(comment, {
      position: "top-center",
    });
  };
  console.log(userId,userPassWord,userNickName)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await authApi.post("/register", {
        id:userId,
        password:userPassWord,
        nickname:userNickName,
      });
      const data = response.data;
      if (data.success) {
        notify(data.message);
        navigate("/login");
      }else{
        notify(data.message);
      }
    } catch (error) {}
  };
  return (
    <S.LoginSignup>
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
    </S.LoginSignup>
  );
};

export default Signup;
