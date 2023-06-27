// import './MainPage.css'; QuestionPage의 css 속성으로 전부 커버됨

import MainQuestionPreview from './MainQuestionPreview';
import { useGetList } from '../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import SideLeft from '../../components/SideLeft';
import SideRight from '../../components/SideRight';
import Footer from '../../components/Footer';

const MainPage = () => {
  const navigate = useNavigate();
  const data = useGetList(1);
  return (
    <>
      <div
        className="flex-question-page-container margin-top"
        data-testid="MainPage"
      >
        <div style={{ height: 'auto', alignSelf: 'stretch' }}>
          <SideLeft />
        </div>
        <div id="content-question-page">
          <div className="flex-question-container">
            <div id="mainbar-question-page">
              <div className="flex-container" id="flex-list-title">
                <h1 id="question-page">Top Questions</h1>
                <button
                  className="s-btn s-btn__primary"
                  onClick={() => navigate('/questions/ask')}
                >
                  질문하기
                </button>
              </div>
              <section className="question-list">
                {data?.data?.map((question) => (
                  <MainQuestionPreview
                    key={question.questionId}
                    {...question}
                  />
                ))}
              </section>
            </div>
            <SideRight />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainPage;
