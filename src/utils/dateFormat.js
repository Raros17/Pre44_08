export const dateFormat = (date) => {
  const NOW = new Date();
  let diff = NOW - date;
  if (diff === null || isNaN(diff)) return null;
  if (diff < 60 * 1000) return '방금 전';
  if (diff < 60 * 60 * 1000) return `${Math.floor(diff / 1000 / 60)}분 전`;
  if (diff < 60 * 60 * 24 * 1000)
    return `${Math.floor(diff / 1000 / 60 / 60)}시간 전`;
  if (diff < 60 * 60 * 24 * 30 * 1000)
    return `${Math.floor(diff / 1000 / 60 / 60 / 24)}일 전`;
  if (diff < 60 * 60 * 24 * 30 * 12 * 1000)
    return `${Math.floor(diff / 1000 / 60 / 60 / 24 / 30)}개월 전`;
  else {
    let years = Math.floor(diff / (1000 * 60 * 60 * 24 * 30 * 12));
    let months = Math.floor(
      (diff % (1000 * 60 * 60 * 24 * 30 * 12)) / (1000 * 60 * 60 * 24 * 30)
    );
    let result = '';
    result += years ? `${years}년` : '';
    result += months ? ` ${months}개월` : '';
    return result + ' 전';
  }
};
