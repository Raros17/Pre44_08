export const calculatePages = (total, per) => {
  return Math.ceil(total / per);
};

// 5페이지 한 묶음를 기준으로 작성
// 연속된 다섯 숫자로 표현 가능한 범위로 강제 조정
// currentPage - 2와 1 사이에 다른 숫자가 있으면 null 삽입
// 다섯 숫자 입력
// currentPage + 2와 totalPages 사이에 다른 숫자가 있으면 null 삽입
// null -> ... 으로 렌더링 예정
export const selectPages = (totalPages, currentPage) => {
  const pages = [];
  if (totalPages < 5) {
    for (let i = 0; i < totalPages; i++) {
      pages.push(i + 1);
    }
    return pages;
  }
  if (currentPage + 2 > totalPages) currentPage = totalPages - 2;
  if (currentPage - 2 < 1) currentPage = 1 + 2;
  if (currentPage - 3 > 1) pages.push(null);
  for (let i = -2; i < 3; i++) {
    pages.push(currentPage + i);
  }
  if (currentPage + 3 < totalPages) pages.push(null);
  return pages;
};
