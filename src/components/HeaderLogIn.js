import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';

import './Header.css';
import { useState } from 'react';
import SideLeft from './SideLeft';

const HeaderLogin = () => {
  const [isXIcon, setIsXIcon] = useState(false);

  const handleClickToggle = () => {
    setIsXIcon((prevState) => !prevState);
  };

  const handleClickLogo = () => {
    window.location.href = '/';
  };

  const handleClickLogin = () => {
    window.location.href = '/login';
  };

  const handleClickSignup = () => {
    window.location.href = '/signup';
  };

  return (
    <div className="HeaderLogin">
      <div className="HeaderContainer LoginHeader">
        <div
          className={`삼단바 ${isXIcon ? 'x-icon' : ''}`}
          onClick={handleClickToggle}
        >
          {isXIcon ? (
            <FontAwesomeIcon icon={faX} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>
        <div className="로고" onClick={handleClickLogo}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Stack_Overflow_logo.svg/800px-Stack_Overflow_logo.svg.png"
            alt="로고"
          />
          {isXIcon && <SideLeft />}
        </div>
        <div className="검색창">
          <input className="searchInput" placeholder=" Search..." />
        </div>
        <div className="로그인 버튼" onClick={handleClickLogin}>
          <button>로그인</button>
        </div>
        <div className="회원가입 버튼" onClick={handleClickSignup}>
          <button>회원가입</button>
        </div>
      </div>
    </div>
  );
};

export default HeaderLogin;
