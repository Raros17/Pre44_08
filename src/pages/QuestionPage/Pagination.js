import './Pagination.css';
import { useEffect, useState } from 'react';
import { selectPages } from '../../utils/caculatePages';
import { useNavigate } from 'react-router';

const URI = '/questions';

const PageButton = ({ page, currentPage, setCurrentPage }) => {
  const navigate = useNavigate();
  return (
    <button
      className={`${currentPage === page ? 'page-selected ' : ''} page-button`}
      value={page}
      onClick={(e) => {
        setCurrentPage(+e.target.value);
        navigate(`${URI}?page=${page}`);
      }}
    >
      {page}
    </button>
  );
};

const Pagination = ({ totalPages, page = 1, data }) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(Math.min(page, totalPages));
  const pageNumbers = selectPages(
    totalPages,
    Math.min(totalPages, currentPage)
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);

  return (
    <div className="flex-pagination">
      {currentPage !== 1 && (
        <button
          className="page-button"
          onClick={() => {
            setCurrentPage(currentPage - 1);
            navigate(`${URI}?page=${currentPage - 1}`);
          }}
        >
          이전
        </button>
      )}
      {pageNumbers[0] !== 1 && (
        <PageButton
          page={1}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      )}
      {pageNumbers?.map((page, idx) => {
        if (page === null) {
          return <div key={`${idx}null`}>...</div>;
        } else {
          return (
            <PageButton
              key={page}
              page={page}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          );
        }
      })}
      {pageNumbers.at(-1) !== totalPages && totalPages !== 0 && (
        <PageButton
          page={totalPages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      )}
      {currentPage !== totalPages && totalPages !== 0 && (
        <button
          className="page-button"
          onClick={() => {
            setCurrentPage(currentPage + 1);
            navigate(`${URI}?page=${currentPage + 1}`);
          }}
        >
          다음
        </button>
      )}
    </div>
  );
};

export default Pagination;
