import './Discussion.css';
import { useState } from 'react';
import TextareaForm from './TextareaForm';
import { deleteAnswer, deleteQuestion } from '../../utils/fetchAPI';
import { dateFormat } from '../../utils/dateFormat';

const Discussion = ({
  setAnswers,
  // question data
  answers,
  questionId,
  answerId,
  // FIX ME: 임시 현재 사용자 ID 제거
  currentId = 2,
  memberId,
  voteCount,
  voted = false,
  content,
  createdAt,
  modifiedAt,
  profileImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png',
  name,
  // 현재 name 제공되지 않음
}) => {
  const [vote, setVote] = useState(voteCount || 0);
  const [isVoted, setIsVoted] = useState(voted);
  const [isEditing, setIsEditing] = useState(false);
  const [contentBody, setContentBody] = useState(content);
  {
    /* TODO: 추천/비추천 시 PATCH 요청 보내기 */
  }
  const voteUp = () => {
    setVote(vote + 1);
    setIsVoted(true);
  };
  const voteDown = () => {
    setVote(vote - 1);
    setIsVoted(true);
  };
  const handleDelete = () => {
    if (answerId) {
      deleteAnswer(answerId)
        .then(
          setAnswers([
            ...answers.filter((answer) => answer.answerId !== answerId),
          ])
        )
        .catch((err) => console.log(err));
    } else {
      deleteQuestion(questionId).then((window.location.href = '/'));
    }
  };

  return (
    <div className="post-layout flex-container">
      <div className="votecell post-layout--left">
        <div className="vote-container">
          <button
            className="vote-btn"
            onClick={(e) => {
              if (!isVoted) voteUp();
              e.target.blur();
            }}
          >
            <i className="fa-solid fa-caret-up fa-2xl"></i>
          </button>
          <div>{vote || 0}</div>
          <button
            className="vote-btn"
            onClick={(e) => {
              if (!isVoted) voteDown();
              e.target.blur();
            }}
          >
            <i className="fa-solid fa-caret-down fa-2xl"></i>
          </button>
        </div>
      </div>
      <div className="postcell post-layout--right">
        {isEditing ? (
          <TextareaForm
            initialContent={contentBody}
            setIsEditing={setIsEditing}
            setContentBody={setContentBody}
            questionId={questionId}
            answerId={answerId}
          />
        ) : (
          <div className="post-body">
            {contentBody?.split(/(\n|\r|\r\n)/).map((body, idx) => (
              <p key={idx}>{body}</p>
            ))}
          </div>
        )}
        <div className="question-information flex-container">
          {/* 수정, 삭제는 로그인했을 때만 보여야 함 */}
          <div className="flex-container question-information--buttons">
            <div className="flex--item" role="button">
              공유
            </div>
            {currentId === memberId && (
              <>
                <div
                  className="flex--item"
                  role="button"
                  tabIndex={0}
                  onClick={() => setIsEditing(true)}
                  onKeyDown={() => {}}
                >
                  수정
                </div>
                <div
                  className="flex--item"
                  role="button"
                  tabIndex={0}
                  onClick={() => {
                    handleDelete(answerId);
                  }}
                  onKeyDown={() => {}}
                >
                  삭제
                </div>
              </>
            )}
          </div>
          <div className="profile flex-container">
            <img src={profileImage} alt="프로필" width="48px" />
            <span>{name}</span>
            <time dateTime={modifiedAt > createdAt ? modifiedAt : createdAt}>
              {modifiedAt > createdAt
                ? `${dateFormat(new Date(modifiedAt))}에 수정됨`
                : `${dateFormat(new Date(createdAt))}에 등록됨`}
            </time>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discussion;
