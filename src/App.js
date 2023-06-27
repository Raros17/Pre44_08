import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import LoginPage from './pages/LoginPage/LoginPage';
import MainPage from './pages/MainPage/MainPage';
import QuestionPage from './pages/QuestionPage/QuestionPage';
import QuestionItemPage from './pages/QuestionItemPage/QuestionItemPage';
import MyPage from './pages/MyPage/MyPage';
import AskQuestionPage from './pages/AskQuestionPage/AskQuestionPage';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import HeaderLogIn from './components/HeaderLogIn';
import HeaderLogOut from './components/HeaderLogOut';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
function App() {
  // TODO: 로그인 상태관리 구현
  const [isLogin, setIsLogin] = useState(false);
  const [accessToken, setAccessToken] = useState(Cookies.get('accessToken'));
  useEffect(() => {
    setAccessToken(Cookies.get('accessToken'));
  });
  useEffect(() => {
    setIsLogin(!!accessToken);
  }, [accessToken]);
  return (
    <div className="App">
      {/* <div style={{ marginTop: '100px' }}>
        디버깅-현재 accessToken: {accessToken}
      </div> */}
      {/* TODO: Header 조건부 렌더링 */}
      {isLogin ? <HeaderLogOut /> : <HeaderLogIn />}
      <BrowserRouter>
        <Routes>
          {/* TODO: 웰컴페이지 메인페이지 조건부 렌더링 */}
          <Route path="/" element={isLogin ? <MainPage /> : <WelcomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/questions" element={<QuestionPage />} />
          <Route
            path="/questions/:question_id"
            element={<QuestionItemPage />}
          />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/questions/ask" element={<AskQuestionPage />} />
          {/* <Route path="/users" element={<div>users</div> <Users/> />*/}
          <Route
            path="*"
            element={<div style={{ marginTop: '200px' }}>404 Not Found</div>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
