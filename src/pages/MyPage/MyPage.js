import './MyPage.css';
import { useState } from 'react';
import SideLeft from './../../components/SideLeft';
import SideRight from '../../components/SideRight';
import Footer from '../../components/Footer';
import './MyPage.css';

const MyPage = () => {
  const [edit, setEdit] = useState(false);
  const [aboutText, setAboutText] = useState('');
  const [editText, setEditText] = useState('');
  const [nickname, setNickname] = useState('');
  const [nicknameEdit, setNicknameEdit] = useState(false);
  const [editedNickname, setEditedNickname] = useState('');
  const [showSignOut, setShowSignOut] = useState(false);
  const [userImage, setUserImage] = useState(
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD6P7fvoMX8ZLb9MAVnLMIPJblEBYXx-X-kv_d9GPJVfQFtCSKQIGEYAoAzOk2AR7kJEg&usqp=CAU'
  );

  const handleAboutToggle = () => {
    if (!edit) {
      setEditText(aboutText);
    }
    setEdit(!edit);
  };

  // 소개 내용 수정 저장 함수
  const handleAboutSave = () => {
    const trimmedText = editText.trim();
    if (trimmedText.length >= 10 || trimmedText === '') {
      setAboutText(trimmedText);
      setEdit(false);
    }
  };

  const handleAboutCancel = () => {
    setEdit(false);
  };

  const handleTextareaChange = (e) => {
    setEditText(e.target.value);
  };

  const handleNicknameToggle = () => {
    if (!nicknameEdit) {
      setEditedNickname(nickname);
    }
    setNicknameEdit(!nicknameEdit);
  };

  const handleNicknameSave = () => {
    const trimmedNickname = editedNickname.trim();
    if (
      (trimmedNickname.length >= 2 && trimmedNickname.length <= 8) ||
      trimmedNickname === ''
    ) {
      setNickname(trimmedNickname);
      setNicknameEdit(false);
    }
  };

  const handleNicknameCancel = () => {
    setNicknameEdit(false);
  };

  const handleNicknameChange = (e) => {
    setEditedNickname(e.target.value);
  };

  const handleDeleteAccount = () => {
    setShowSignOut(false);
  };

  const openSignOutModal = () => {
    setShowSignOut(true);
  };

  const closeSignOutModal = () => {
    setShowSignOut(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setUserImage(event.target.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="">
      <div className="MyPage">
        <SideLeft />
        <div className="MyPageContainer">
          <div>
            <div className="ImageBox">
              <img alt="userImg" src={userImage} />
              <label htmlFor="image-upload" className="ImageBox_UploadLabel">
                +
                <input
                  type="file"
                  id="image-upload"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </label>
            </div>
            <div className="NickNameBox">
              <div className="NickNameBox_MyName">사용자 이름</div>
              <div className="NickNameBox_NickName">
                {nicknameEdit ? (
                  <>
                    <textarea
                      type="text"
                      value={editedNickname}
                      onChange={handleNicknameChange}
                      minLength={2}
                      maxLength={8}
                    ></textarea>
                    <div className="NickNameBox_ButtonGroup">
                      <button onClick={handleNicknameCancel}>취소</button>
                      <button onClick={handleNicknameSave}>저장</button>
                    </div>
                  </>
                ) : (
                  <>
                    {nickname ? (
                      <p>닉네임: {nickname}</p>
                    ) : (
                      <p>닉네임을 설정해주세요</p>
                    )}
                    <div className="NickNameBox_ButtonGroup">
                      {nickname ? (
                        <button onClick={handleNicknameToggle}>수정</button>
                      ) : (
                        <button onClick={handleNicknameToggle}>추가</button>
                      )}
                    </div>
                  </>
                )}
              </div>
              <div className="NickNamBox_Id">ID</div>
            </div>
          </div>

          <div>
            <div className="AboutBox">
              <div className="AboutBoxTitle">소개</div>
              {edit ? (
                <>
                  <textarea
                    value={editText}
                    onChange={handleTextareaChange}
                    minLength={10}
                    maxLength={1000}
                  ></textarea>
                  <div className="AboutBox_ButtonGroup">
                    <button onClick={handleAboutCancel}>취소</button>
                    <button onClick={handleAboutSave}>저장</button>
                  </div>
                </>
              ) : (
                <>
                  {aboutText ? (
                    <>
                      <p>{aboutText}</p>
                      <div className="AboutBox_ButtonGroup">
                        <button onClick={handleAboutToggle}>수정</button>
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="AboutBox_Text">나를 소개하세요</p>
                      <div className="AboutBox_ButtonGroup">
                        <button onClick={handleAboutToggle}>추가</button>
                      </div>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
          <div className="SignOutBox">
            <button onClick={openSignOutModal}>회원탈퇴</button>
          </div>
        </div>
        {showSignOut && (
          <div className="SignOutModal">
            <div className="SignOutModal_Content">
              <h2>정말 탈퇴하시겠습니까?</h2>
              <div className="SignOutModal_ButtonGroup">
                <button onClick={handleDeleteAccount}>예</button>
                <button onClick={closeSignOutModal}>아니오</button>
              </div>
            </div>
          </div>
        )}
        <SideRight />
      </div>
      <div className="FooterContainer">
        <Footer />
      </div>
    </div>
  );
};

export default MyPage;
