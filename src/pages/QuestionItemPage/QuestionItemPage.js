import './QuestionItemPage.css';
import Discussion from './Discussion';
import TextareaForm from './TextareaForm';
import { useNavigate, useParams } from 'react-router-dom';
import { dateFormat } from '../../utils/dateFormat';
import { useEffect, useState } from 'react';
import { useGetQuestion } from '../../hooks/useFetch';
import SideLeft from '../../components/SideLeft';
import SideRight from '../../components/SideRight';
import Footer from '../../components/Footer';

const QuestionItemPage = () => {
  const navigate = useNavigate();
  // TODO: question_id -> questionId App.js 라우팅 경로와 함께 바꾸기 */
  const { question_id } = useParams();
  const question = useGetQuestion(question_id);
  const [answers, setAnswers] = useState(question?.answers);
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!answers) setAnswers(question?.answers);
    if (question && question_id) {
      if (isNaN(question_id)) navigate('/notfound');
      if (!question?.questionId) navigate('/notfound');
    }
  }, [question]);
  return (
    <>
      <div className="flex-container margin-top" data-testid="QuestionItemPage">
        <div style={{ height: 'auto', alignSelf: 'stretch' }}>
          <SideLeft />
        </div>
        <div id="content-question-item-page">
          <div id="question-header" className="flex-container">
            <h1 id="question-title">{question?.title}</h1>
            <button
              className="s-btn"
              onClick={() => navigate('/questions/ask')}
            >
              질문하기
            </button>
          </div>
          <div className="flex-container post-information">
            <div className="flex-container post-information--item">
              <span>등록</span>
              <time dateTime={question?.createdAt || ''}>
                {dateFormat(new Date(question?.createdAt))}
              </time>
            </div>
            <div className="flex-container post-information--item">
              <span>수정</span>
              <time dateTime={question?.modifiedAt || ''}>
                {dateFormat(
                  question?.modifiedAt
                    ? new Date(question?.modifiedAt)
                    : new Date(question?.createdAt)
                )}
              </time>
            </div>
            {/* TODO: 조회수 구현되면 자동으로 표시 - 구현되면 주석 지우기*/}
            {question?.viewCount && (
              <div className="flex-container post-information--item">
                <span>조회수</span>
                {question?.viewCount || 0}
              </div>
            )}
          </div>
          <div className="flex-container post-content">
            <div id="mainbar-question-item-page">
              {question && (
                <Discussion
                  {...question}
                  answers={answers}
                  setAnswers={setAnswers}
                  voteCount={question?.voteCount || 0}
                  profileImage={
                    question.profileImage ||
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png'
                  }
                />
              )}
              <div id="answers">
                <h2 id="count-answers">{answers?.length || 0}개의 답변</h2>
                <section>
                  {answers?.map((answer) => {
                    return (
                      <article key={`${answer.answerId || answer.content}`}>
                        <Discussion
                          {...answer}
                          profileImage={
                            answer.profileImage ||
                            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png'
                          }
                          answers={answers}
                          setAnswers={setAnswers}
                        />
                        <div className="breakline"></div>
                      </article>
                    );
                  })}
                </section>
                <TextareaForm
                  questionId={question_id}
                  // TODO: currentId 상태관리 적용
                  currentId={2}
                  answers={answers}
                  setAnswers={setAnswers}
                />
              </div>
            </div>
            <SideRight />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default QuestionItemPage;
