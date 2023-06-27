import './WelcomePage.css';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
function WelcomePage() {
  return (
    <main className="welcome-page-wrapper">
      <div className="background-section">
        <div className="bubbles">
          <div className="bubble join-us-message">
            <i className="fa-solid fa-magnifying-glass"></i>
            <p>
              좋은 답변을 받고 싶다면,
              <br />
              우선 다른 사람들이 남긴 질문을 도와주세요
            </p>
            <Link to="/signup">
              <button className="welcome-button">커뮤니티에 함께 하기</button>
            </Link>
            <p className="to-questionpage">
              <Link to="/questions">이미 올라온 질문들을 살펴보기</Link>
            </p>
          </div>
          <div className="bubble to-team-github">
            <i className="fa-solid fa-people-robbery"></i>
            <p>
              이 프로젝트 팀의 깃허브 코드를
              <br />
              살펴보고 싶으신가요?
            </p>
            <Link to="https://github.com/codestates-seb/seb44_pre_008">
              <button className="welcome-button">깃허브 살펴보기</button>
            </Link>
          </div>
        </div>
        <h1>
          Every <span>developer</span> has a <br /> tab open to Stack Overflow
        </h1>
      </div>
      <Footer />
    </main>
  );
}

export default WelcomePage;
