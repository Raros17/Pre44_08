import './MainQuestionPreview.css';
import { Link } from 'react-router-dom';
import { dateFormat } from '../../utils/dateFormat';

const MainQuestionPreview = ({
  questionId,
  voteCount,
  title,
  // 임시 profileImage 제거하기
  profileImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png',
  name,
  createdAt,
  modifiedAt,
  answers,
  views,
}) => {
  return (
    <article className="preview-layout">
      <div id="preview-content" className="flex-container">
        <div className="preview-layout--left">
          <div>{voteCount || 0} 추천수</div>
          <div>{answers?.length || 0} 답변수</div>
          <div>{views || 0} 조회수</div>
        </div>
        <div className="preview-layout--right">
          <h3 className="preview-title">
            <Link to={`./questions/${questionId}`}>{title}</Link>
          </h3>
          <div className="profile-preview">
            <img src={profileImage} alt="프로필" width="16px" />
            <span>{name}</span>
            <time dateTime={modifiedAt > createdAt ? modifiedAt : createdAt}>
              {modifiedAt > createdAt
                ? `${dateFormat(new Date(modifiedAt))}에 수정됨`
                : `${dateFormat(new Date(createdAt))}에 등록됨`}
            </time>
          </div>
        </div>
      </div>
    </article>
  );
};

export default MainQuestionPreview;
