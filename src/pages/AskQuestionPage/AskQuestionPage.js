import { useState } from 'react';
import { Link } from 'react-router-dom';
import './AskQuestionPage.css';
import { postQuestion } from '../../utils/fetchAPI';
import Footer from '../../components/Footer';
const AskQuestionPage = () => {
  const [isBox1Hidden, setIsBox1Hidden] = useState(true);
  const [isBox2Hidden, setIsBox2Hidden] = useState(true);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [errorMessageTitle, setErrorMessageTitle] = useState('');
  const [errorMessageBody, setErrorMessageBody] = useState('');
  const handleInput1Focus = () => {
    setIsBox1Hidden(false);
    setIsBox2Hidden(true);
  };
  const handleInput2Focus = () => {
    setIsBox1Hidden(true);
    setIsBox2Hidden(false);
  };
  const autoResizeTextarea = (event) => {
    let textarea = event.target;
    textarea.style.height = 'auto';
    let height = textarea.scrollHeight;
    textarea.style.height = `${height + 8}px`;
  };
  const onTitleHandler = (event) => {
    setTitle(event.currentTarget.value);
  };
  const onBodyHandler = (event) => {
    setBody(event.currentTarget.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const ErrorMessageTitle = validateFormTitle(title);
    setErrorMessageTitle(ErrorMessageTitle);
    const ErrorMessageBody = validateFormBody(body);
    setErrorMessageBody(ErrorMessageBody);
    if (ErrorMessageBody || ErrorMessageTitle) {
      return;
    } else {
      const formData = {
        title: title,
        content: body,
      };
      postQuestion(formData);
      window.location.href = '/questions';
    }
  };
  function validateFormTitle(title) {
    if (title.length < 6) {
      return '제목은 6글자 이상이어야 합니다.';
    }
    return '';
  }
  const alertMessage = () => {
    if (confirm('정말로 초기화 하시겠습니까?') === true) {
      document.querySelector('form').reset();
    } else {
      return;
    }
  };
  function validateFormBody(body) {
    if (body.length < 20) {
      return '본문은 20글자 이상이어야 합니다.';
    }
    return '';
  }
  return (
    <section className="ask-page-section">
      <section className="question-section">
        <main>
          <h2>열린 질문하기</h2>
          <section className="good-question-tip-section">
            <h3>좋은 질문을 작성하는 법</h3>
            <p className="paragraph">
              <Link to="https://stackoverflow.com/help/on-topic">
                <span>프로그래밍 관련 질문</span>
              </Link>
              을
              <Link to="https://stackoverflow.com/help/on-topic">
                <span className="link-text">할</span>
              </Link>
              준비가 되었나요? 이 폼은 당신이 좋은 질문을 할 수 있도록 도와줄
              것입니다.
              <br />
              프로그래밍 관련이 아닌 질문을 하고 싶다면,
              <Link to="https://stackexchange.com/sites#technology">
                <span className="link-text">이쪽</span>
              </Link>
              항목을 참조해주세요.
            </p>
            <h4>작성 TIP!</h4>
            <ul>
              <li>문제를 한 줄의 제목으로 요약합니다.</li>
              <li>당신의 문제를 더 자세히 설명해보세요.</li>
              <li>
                무엇을 시도했고, 어떤 일이 일어날 것으로 예상했는지 작성합니다.
              </li>
              <li>마지막으로 질문을 검토한 후 사이트에 게시합니다.</li>
            </ul>
          </section>
          <form onSubmit={onSubmitHandler}>
            <section className="question-title-section">
              <div className="title-introduce">
                <h4 className="introduce-title">제목</h4>
                <p className="introduce-detail">
                  다른 사람에게 설명한다고 생각하면서 구체적으로 적어보세요.
                </p>
              </div>
              <input
                type="text"
                name="title"
                onFocus={handleInput1Focus}
                onChange={onTitleHandler}
              ></input>
              <p className="error-message error-title">{errorMessageTitle}</p>
            </section>
            <section className="question-body-section">
              <div className="body-introduce">
                <h4 className="introduce-title">
                  지금 겪고 있는 문제는 무엇인가요?
                </h4>
                <p className="introduce-detail">
                  현재 마주한 문제와, 원래 어떤 결과를 예상했는지 자세히
                  설명해주세요. (20자 이상)
                </p>
              </div>
              <div>
                <textarea
                  className="autoTextarea"
                  onKeyDown={autoResizeTextarea}
                  onKeyUp={autoResizeTextarea}
                  onFocus={handleInput2Focus}
                  onChange={onBodyHandler}
                ></textarea>
              </div>
              <p className="error-message error-body">{errorMessageBody}</p>
            </section>
            <div className="buttons">
              <input
                type="button"
                className="reset-button button"
                value="초기화"
                onClick={alertMessage}
              ></input>
              <input
                type="submit"
                value="등록하기"
                className="submit-button button"
              ></input>
            </div>
          </form>
        </main>
        <aside className="question-side-tips">
          <div className={`tip-box title-tip ${isBox1Hidden ? 'hidden' : ''}`}>
            <div className="tip-subject">TIP: 좋은 제목 작성하기</div>
            <div className="tip-detail">
              <i className="fa-regular fa-pen-to-square"></i>
              <p>
                좋은 제목은 문제를 잘 간추려야 합니다. 먼저 문제에 대해 적은 뒤
                더 좋은 제목이 떠오를 수도 있습니다.
              </p>
            </div>
          </div>
          <div className={`tip-box body-tip ${isBox2Hidden ? 'hidden' : ''}`}>
            <div className="tip-subject">TIP: 질문을 잘 설명하기</div>
            <div className="tip-detail">
              <i className="fa-regular fa-pen-to-square"></i>
              <div className="tips">
                <p>
                  어떤 과정을 시도하는 중에 문제에 부딪혔는지, 그리고
                  해결과정에서 맞닥뜨린 어려움에 대해 구체적으로 설명하세요.
                </p>
                <p>
                  당신이 시도한 것들을 적고 그로 인해 무슨 일이 발생했는지,
                  그리고 왜 그것이 당신의 요구를 충족시키지 못했는지 알려주세요.
                </p>
                <p>
                  모든 질문에 코드가 포함되어야 하는 것은 아닙니다. 하지만
                  코드로 문제를 더 잘 이해할 수 있다면 최소한의 예제를 포함하는
                  편이 좋습니다.
                </p>
                <p>
                  코드와 오류를 이미지가 아닌 질문에 직접 텍스트로 게시하고
                  형식을 적절하게 정하십시오.
                </p>
              </div>
            </div>
          </div>
        </aside>
      </section>
      <Footer />
    </section>
  );
};

export default AskQuestionPage;
