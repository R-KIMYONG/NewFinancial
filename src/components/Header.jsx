import React, { useEffect, useState } from "react";
import * as S from "../StyledComponents/Header.styled";
import logo from "../assets/logo.png";
import no_img from "../assets/no_img.jpg";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../redux/slices/userSlice";
import { customStyles } from "../styles/modalStyles";
import { ModalContent } from "../StyledComponents/ModalContent";
import { authApi } from "../axios/\bauthApi";

Modal.setAppElement("#root");

const Header = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const [userInfo, setUserInfo] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleConfirm = () => {
    dispatch(userLogout());
    closeModal();
    navigate("/login");
  };

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const response = await authApi.get("/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserInfo(response.data);
      } catch (error) {
        console.error("Failed to fetch user info:", error);
      }
    };
    fetchUserInfo();
  }, [isAuthenticated, navigate]);
  // console.log(userInfo.nickname)
  return (
    <>
      <S.Header>
        <S.HeaderNav>
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
          <S.UserInfo>
            <div>
              <img src={no_img} alt="no_img" />
            </div>
            <p>{userInfo && userInfo.nickname}님</p>
            <S.LogoutButton onClick={openModal}>로그아웃</S.LogoutButton>
          </S.UserInfo>
        </S.HeaderNav>
      </S.Header>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={false}
        contentLabel="Confirm Modal"
        style={customStyles}
      >
        <ModalContent>
          <h2>정말로 회원탈퇴하겠는가?</h2>
          <div>
            <button onClick={handleConfirm}>확인</button>
            <button onClick={closeModal}>취소</button>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Header;
