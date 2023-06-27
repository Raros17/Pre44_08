import './QuestionPage.css';
import QuestionPreview from './QuestionPreview';
import Pagination from './Pagination';
import { useGetList } from '../../hooks/useFetch';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import SideLeft from '../../components/SideLeft';
import SideRight from '../../components/SideRight';
import Footer from '../../components/Footer';

const QuestionPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page');
  const data = useGetList(page ?? 1, 10);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);

  return (
    <>
      <div
        className="flex-question-page-container margin-top"
        data-testid="QuestionPage"
      >
        <div style={{ height: 'auto', alignSelf: 'stretch' }}>
          <SideLeft />
        </div>
        <div id="content-question-page">
          <div className="flex-question-container">
            <div id="mainbar-question-page">
              <div className="flex-container" id="flex-list-title">
                <h1 id="question-page">All Questions</h1>
                <button
                  className="s-btn s-btn__primary"
                  onClick={() => navigate('/questions/ask')}
                >
                  질문하기
                </button>
              </div>
              <div className="count-questions">
                {data?.pageInfo?.totalElements.toLocaleString() || 0} questions
              </div>
              <section className="question-list">
                {data?.data?.map((question) => (
                  <QuestionPreview key={question.questionId} {...question} />
                ))}
              </section>
              <Pagination
                totalPages={data?.pageInfo?.totalPages || 1}
                per={data?.pageInfo?.size || 10}
                page={+page || 1}
                data={data}
              />
            </div>
            <SideRight />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default QuestionPage;
