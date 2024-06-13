import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { getUserInfo } from "../axios/authApi";
import Header from "../components/Header";
import { setUserInfo } from "../redux/slices/userSlice";

const PrivateRoute = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      const sessions = getUserInfo();
      if (sessions.success) {
        dispatch(setUserInfo(sessions));
      }
    } catch (error) {
      console.log("error", error);
    }
  }, []);

  return isAuthenticated ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;

// export const useAuth = () => {
//   /**
//    *
//    * 1. 로그인 여부
//    * isAuthenticated
//    * 2. 토큰 유효성 검증
//    * Header Comopnent useEffect fetchUserInfo
//    *
//    * if 유효한 유저
//    * -> 동작 실행
//    *
//    * else 유효하지 않은 유저
//    * -> 동작 실행
//    *
//    */
//   const navigate = useNavigate();

//   const dispatch = useDispatch();
//   // 로그인 여부 판단 로직
//   const { isAuthenticated } = useSelector((state) => state.auth);

//   // 토큰 유효성 검증
//   useEffect(() => {
//     const fetchUserInfo = async () => {
//       try {
//         const token = localStorage.getItem("accessToken");
//         const response = await authApi.get("/user", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         // setUserInfo(response.data);
//       } catch (error) {
//         console.log("error ", error);
//         alert("로그인세션이 만료됬습니다.");
//         dispatch(logout());
//       }
//     };
//     fetchUserInfo();
//   }, []);

//   useEffect(() => {
//     if (!isAuthenticated) {
//       navigate("/login");
//     }
//   }, [isAuthenticated]);

//   return isAuthenticated;
// };
