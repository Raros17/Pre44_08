import { useState } from 'react';
import './TextareaForm.css';
import { patchAnswer, patchQuestion, postAnswer } from '../../utils/fetchAPI';

// TODO: API 요청 보내서 답변 등록된 내용 반영하기

const TextareaForm = ({
  questionId,
  answerId,
  initialContent,
  answers,
  setAnswers,
  setIsEditing,
  setContentBody,
  createdAt,
}) => {
  const [content, setContent] = useState(initialContent ?? '');
  const handleSubmit = () => {
    if (content.trim() === '') {
      return;
    }
    const answer = {
      questionId,
      content,
    };
    if (setIsEditing) {
      setContentBody(content.trim());
      if (!answerId) patchQuestion(questionId, { questionId, content });
      else patchAnswer(answerId, { content });
      setIsEditing(false);
      return;
    } else {
      postAnswer(JSON.stringify(Object.assign(answer, { questionId })));
      createdAt
        ? (answer.modifiedAt = new Date())
        : (answer.createdAt = new Date());
      setAnswers([...answers, answer]);
      setContent('');
    }
  };
  return (
    <form>
      <h2 id="your-answer-header">
        {setIsEditing ? (answerId ? '답변 수정' : '질문 수정') : '답변 작성'}
      </h2>
      <textarea
        id="post-editor"
        onChange={(e) => setContent(e.target.value)}
        value={content}
      ></textarea>
      <button
        className="s-btn post-btn"
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        {setIsEditing
          ? answerId
            ? '답변 수정하기'
            : '질문 수정하기'
          : '답변 등록하기'}
      </button>
      {setIsEditing && (
        <button
          className="cancle-btn post-btn"
          onClick={(e) => {
            e.preventDefault();
            setIsEditing(false);
          }}
        >
          취소
        </button>
      )}
      <div id="post-preview">
        {content.split(/(\n|\r|\r\n)/).map((body, idx) => (
          <p key={idx}>{body}</p>
        ))}
      </div>
    </form>
  );
};

export default TextareaForm;
