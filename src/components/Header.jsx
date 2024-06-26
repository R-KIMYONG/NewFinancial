import React, { useEffect, useState } from "react";
import * as S from "../StyledComponents/Header";
import logo from "../assets/logo.png";
import no_img from "../assets/no_img.jpg";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import { customStyles } from "../styles/modalStyles";
import { Modallogout } from "../StyledComponents/Modallogout";
import { authApi } from "../axios/authApi";
import { Modaledit } from "../StyledComponents/Modaledit";
import { updateUserInfo } from "../redux/slices/userSlice";
import { notifySuccess } from "../util/toast";
Modal.setAppElement("#root");
const Header = () => {
  const userInfo = useSelector((state) => state.user);
  const [logoutConfirmModal, setLogoutConfirmModal] = useState(false);
  const [editProfileModal, setEditProfileModal] = useState(false);
  const [avatarFile, setAvatarFile] = useState("");
  const [nickname, setNickname] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const dispatch = useDispatch();
  const openModal = () => {
    setLogoutConfirmModal(true);
    setNickname(userInfo && userInfo.nickname);
    setAvatarFile(null);
    document.body.style.overflow = "hidden";
  };
  const openEditProfileModal = () => {
    setEditProfileModal(true);
    setNickname(userInfo && userInfo.nickname);
    setAvatarFile(null);
    setAvatarPreview("");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setLogoutConfirmModal(false);
    setEditProfileModal(false);
    setAvatarPreview("");
    document.body.style.overflow = "auto";
  };

  const handleConfirm = () => {
    dispatch(logout());
    closeModal();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setAvatarFile(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setAvatarPreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const upLoadAvatarsBtn = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      if (nickname.trim() === "") {
        notifyError("뭐라도 입력해주세요!");
        return;
      }
      formData.append("avatar", avatarFile);
      formData.append("nickname", nickname);
      const token = localStorage.getItem("accessToken");
      const { data } = await authApi.patch("/profile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      const newAvatar = data.avatar;

      dispatch(updateUserInfo({ newAvatar, nickname }));
      // localStorage.setItem("userInfo", JSON.stringify(data));
      closeModal();
      notifySuccess("변경 완료");
    } catch (error) {
      console.log("error=>", error);
    }
  };
  console.log(avatarFile);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <S.Header $scrolled={scrolled}>
        <S.HeaderNav>
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
          <S.UserInfo>
            <div onClick={openEditProfileModal}>
              <img src={userInfo.avatar || no_img} alt="no_img" />
            </div>
            <p>{userInfo && userInfo.nickname}님</p>
            <S.LogoutButton onClick={openModal}>로그아웃</S.LogoutButton>
          </S.UserInfo>
        </S.HeaderNav>
      </S.Header>
      <Modal
        isOpen={logoutConfirmModal}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={false}
        contentLabel="Confirm Logout"
        style={customStyles}
      >
        <Modallogout>
          <h2>로그아웃 하시겠습니까?</h2>
          <div>
            <button onClick={handleConfirm}>확인</button>
            <button onClick={closeModal}>취소</button>
          </div>
        </Modallogout>
      </Modal>
      <Modal
        isOpen={editProfileModal}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={false}
        contentLabel="Confirm Submit"
        style={customStyles}
      >
        <Modaledit>
          <h2>회원 정보 수정</h2>
          <form onSubmit={upLoadAvatarsBtn}>
            <div className="imgPreview">
              <div>
                <img
                  src={avatarPreview || userInfo.avatar || no_img}
                  alt="no_img"
                />
              </div>
              <input type="file" accept="image/*" onChange={handleFileChange} />
            </div>
            <div className="userExistingInfo">
              <h3>아이디 : {userInfo && userInfo.userId}</h3>
              <p>닉네임 : {userInfo && userInfo.nickname}님</p>
            </div>
            <div className="changeUserNickname">
              <label htmlFor="userNickName">닉네임 : </label>
              <input
                type="text"
                maxLength={8}
                minLength={1}
                placeholder="변경할 닉네임을 입력하세요"
                name="userNickName"
                value={nickname}
                onChange={(e) => {
                  setNickname(e.target.value);
                }}
              />
            </div>
            <div className="onChangeBtnbox">
              <button className="onChange">변경</button>
              <button className="cancellation" onClick={closeModal}>
                취소
              </button>
            </div>
          </form>
        </Modaledit>
      </Modal>
    </>
  );
};

export default Header;
