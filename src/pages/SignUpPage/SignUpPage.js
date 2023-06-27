import './SignUpPages.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { postSignup } from '../../utils/fetchAPI';
function SignUpPage() {
  const [displayName, setDisplayName] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const onDisplayNameHandler = (event) => {
    setDisplayName(event.currentTarget.value);
  };
  const onIdHandler = (event) => {
    setId(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onPasswordConfirmHandler = (event) => {
    const confirmPassword = event.currentTarget.value;
    setPasswordConfirm(confirmPassword);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const errorMessage = validateForm(
      id,
      displayName,
      password,
      passwordConfirm
    );
    setErrorMessage(errorMessage);
    if (errorMessage) {
      return;
    }
    const formData = {
      name: displayName.replace(/ /g, ''),
      loginId: id.replace(/ /g, ''),
      pwd: password.replace(/ /g, ''),
      personalInfo: null,
    };
    postSignup(formData).then(() => (window.location.href = '/login'));
  };

  function validateForm(id, displayName, password, passwordConfirm) {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
    if (!id || !displayName || !password || !passwordConfirm) {
      return '입력되지 않은 요소를 확인해주세요.';
    }
    if (displayName.length < 1 || displayName.length >= 13) {
      return '별명은 1글자 이상 13자 미만이어야 합니다.';
    }
    if (id.length < 4 || id.length >= 20) {
      return '아이디는 4자 이상 20자 미만이어야 합니다.';
    }
    if (password.length < 8 || password.length >= 20) {
      return '비밀번호는 8자 이상 20자 미만이어야 합니다.';
    }
    if (!passwordRegex.test(password)) {
      return '비밀번호는 문자 1개와 숫자 1개를 포함하여 8자 이상이어야 합니다.';
    }
    if (password !== passwordConfirm) {
      return '비밀번호가 일치하지 않습니다.';
    }
    return '';
  }
  return (
    <section className="productslist-section">
      <div className="signup-container">
        <div className="signup-section">
          <div className="signup-buttons">
            <button type="button" className="with-google signup-button">
              <i className="fa-brands fa-google"></i> 구글로 가입하기
            </button>
            <button type="button" className="with-github signup-button">
              <i className="fa-brands fa-github"></i> 깃허브로 가입하기
            </button>
            <button type="button" className="with-facebook signup-button">
              <i className="fa-brands fa-square-facebook"></i> 페이스북으로
              가입하기
            </button>
          </div>
          <div className="signup-area">
            <form
              action="/signup"
              className="input-area"
              onSubmit={onSubmitHandler}
            >
              <label htmlFor="display-name">별명</label>
              <input
                type="text"
                id="display-name"
                value={displayName}
                onChange={onDisplayNameHandler}
              ></input>
              <label htmlFor="id">아이디</label>
              <input
                type="text"
                id="id"
                value={id}
                onChange={onIdHandler}
              ></input>
              <label htmlFor="password">비밀번호</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={onPasswordHandler}
              ></input>
              <label htmlFor="password-confirm">비밀번호 재확인</label>
              <input
                type="password"
                id="password-confirm"
                value={passwordConfirm}
                onChange={onPasswordConfirmHandler}
              ></input>
              <p className="signup-content signup-warning">{errorMessage}</p>
              <input
                type="submit"
                className="signup-button"
                value="가입하기"
              ></input>
            </form>
            <p className="signup-content">
              가입하기 버튼 클릭 시, 당신은
              <Link to="https://stackoverflow.com/legal/terms-of-service/public">
                <span>서비스 약관</span>
              </Link>
              에 동의하고 당사의
              <Link to="https://stackoverflow.com/legal/privacy-policy">
                <span>개인 정보 보호 정책</span>
              </Link>
              및
              <Link to="https://stackoverflow.com/conduct">
                <span>행동 강령</span>
              </Link>
              을 읽고 이해했음을 인정하게 됩니다.
            </p>
          </div>
          <p className="signup-content to-login">
            계정이 이미 있으신가요?
            <Link to="/login">
              <span>로그인 하기</span>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default SignUpPage;
