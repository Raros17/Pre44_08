import './LoginPage.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { postLogin } from '../../utils/fetchAPI';

function LoginPage() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const onIdHandler = (event) => {
    setId(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const errorMessage = validateForm(id, password);
    setErrorMessage(errorMessage);
    if (errorMessage) {
      return;
    }
    const formData = {
      loginId: id.replace(/ /g, ''),
      pwd: password.replace(/ /g, ''),
    };
    postLogin(formData).then(() => (window.location.href = '/'));
  };
  function validateForm(id, password) {
    if (!id || !password) {
      return '입력되지 않은 요소를 확인해주세요.';
    }
  }
  return (
    <section className="productslist-section">
      <div className="login-container">
        <div className="login-section">
          <div className="login-buttons">
            <button className="with-google login-button">
              <i className="fa-brands fa-google"></i> 구글로 로그인
            </button>
            <button className="with-github login-button">
              <i className="fa-brands fa-github"></i> 깃허브로 로그인
            </button>
            <button className="with-facebook login-button">
              <i className="fa-brands fa-square-facebook"></i> 페이스북으로
              로그인
            </button>
          </div>
          <div className="login-area">
            <form className="input-area" onSubmit={onSubmitHandler}>
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
              <p className="login-content login-warning"></p>
              <div className="login-content login-warning">{errorMessage}</div>
              <button type="submit" className="login-button" value="로그인">
                로그인
              </button>
            </form>
          </div>
          <p className="login-content to-signup">
            계정이 아직 없으신가요?
            <Link to="/signup">
              <span>가입하기</span>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
