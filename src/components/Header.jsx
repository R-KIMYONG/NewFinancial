import React, { useEffect, useState } from "react";
import * as S from "../styledComponents/Header.styled";
import logo from "../assets/logo.png";
import no_img from "../assets/no_img.jpg";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../redux/slices/userSlice";
import { customStyles } from "../styles/modalStyles";
import { Modallogout } from "../styledComponents/Modallogout";
import { authApi } from "../axios/authApi";
import { Modaledit } from "../styledComponents/Modaledit.styled";
import { toast } from "react-toastify";

Modal.setAppElement("#root");

const Header = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const [userInfo, setUserInfo] = useState(null);
  const [logoutConfirmModal, setLogoutConfirmModal] = useState(false);
  const [editProfileModal, setEditProfileModal] = useState(false);
  const [avatarFile, setAvatarFile] = useState("");
  const [nickname, setNickname] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const notifySuccess = (comment) => {
    toast.success(comment, {
      position: "top-center",
    });
  };
  const notifyError = (comment) => {
    toast.error(comment, {
      position: "top-center",
    });
  };

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
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setLogoutConfirmModal(false);
    setEditProfileModal(false);
    document.body.style.overflow = "auto";
  };

  const handleConfirm = () => {
    dispatch(userLogout());
    closeModal();
    navigate("/login");
  };

  const upLoadAvatarsBtn = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("avatar", avatarFile);
      formData.append("nickname", nickname);
      const token = localStorage.getItem("accessToken");
      const response = await authApi.patch("/profile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      setUserInfo((prev) => {
        return { ...prev, ...response.data };
      });
      closeModal();
      notifySuccess("변경 완료");
    } catch (error) {
      notifyError("프로필 변경 실패", warn);
    }
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
        notifyError("로그인세션이 유효하지않습니다.");
        localStorage.clear();

        navigate("/login");
      }
    };
    fetchUserInfo();
  }, [isAuthenticated, navigate, setUserInfo]);
  return (
    <>
      <S.Header>
        <S.HeaderNav>
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
          <S.UserInfo>
            <div onClick={openEditProfileModal}>
              <img
                src={userInfo && userInfo.avatar ? userInfo.avatar : no_img}
                alt="no_img"
              />
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
          <h2>정말로 회원탈퇴하겠는가?</h2>
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
                  src={userInfo && userInfo.avatar ? userInfo.avatar : no_img}
                  alt="no_img"
                />
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  setAvatarFile(e.target.files[0]);
                }}
              />
            </div>
            <div>
              <h3>아이디 : {userInfo && userInfo.id}</h3>
              <p>닉네임 : {userInfo && userInfo.nickname}님</p>
            </div>
            <div>
              <label htmlFor="userNickName">닉네임</label>
              <input
                type="text"
                maxLength={8}
                minLength={1}
                name="userNickName"
                value={nickname}
                onChange={(e) => {
                  setNickname(e.target.value);
                }}
              />
            </div>

            <div>
              <button>변경</button>
              <button onClick={closeModal}>취소</button>
            </div>
          </form>
        </Modaledit>
      </Modal>
    </>
  );
};

export default Header;
