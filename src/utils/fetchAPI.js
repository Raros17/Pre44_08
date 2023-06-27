import Cookies from 'js-cookie';

let refresh;
refresh = 'refresh';

const HOST = process.env.REACT_APP_SERVER_HOST;

const getAccessToken = () => Cookies.get('accessToken');

// 토큰으로 로그인을 요청하는 함수
const getLogin = () => {
  const fetchData = async () => {
    await fetch(`${HOST}/login`, {
      method: 'GET',
      headers: {
        Authorization: getAccessToken(),
      },
    })
      .then((response) => {
        const authorization = [...response.headers]?.filter(
          (header) => header[0] === 'authorization'
        );
        return authorization[0];
      })
      .then((data) => {
        const accessToken = data[1];
        Cookies.set('accessToken', accessToken);
      })
      .catch((err) => console.error(err));
  };

  return fetchData();
};

// 로그아웃을 요청하는 함수
const postLogout = () => {
  const fetchData = async () => {
    await fetch(`${HOST}/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: getAccessToken(),
      },
    })
      .then(() => Cookies.remove('accessToken'))
      .catch((err) => console.error(err));
  };

  return fetchData();
};

// 로그인을 요청하는 함수
const postLogin = (body) => {
  const fetchData = async (body) => {
    await fetch(`${HOST}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        const authorization = [...response.headers]?.filter(
          (header) => header[0] === 'authorization'
        );
        return authorization[0];
      })
      .then((data) => {
        const accessToken = data[1];
        Cookies.remove('accessToken');
        Cookies.set('accessToken', accessToken);
      })
      .catch((err) => console.error(err));
  };

  return fetchData(body);
};

// 회원가입을 요청하는 함수
const postSignup = (body) => {
  const fetchData = async (body) => {
    await fetch(`${HOST}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        const authorization = [...response.headers].filter(
          (header) => header[0] === 'authorization'
        );
        return authorization[0];
      })
      .then((data) => data)
      .catch((err) => console.error(err));
  };

  return fetchData(body);
};

// 새로운 질문의 등록을 요청하는 함수
const postQuestion = (body) => {
  const fetchData = async (body) => {
    await fetch(`${HOST}/questions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: getAccessToken(),
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => console.error(err));
  };

  return fetchData(body);
};

// 새로운 답변의 등록을 요청하는 함수
const postAnswer = (body) => {
  const fetchData = async (body) => {
    await fetch(`${HOST}/answers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: getAccessToken(),
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => console.error(err));
  };

  return fetchData(body);
};

// 질문 내용의 수정을 요청하는 함수
const patchQuestion = (questionId, body) => {
  const fetchData = async (questionId, body) => {
    if (!questionId) return;
    await fetch(`${HOST}/questions/${questionId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: getAccessToken(),
        Refresh: refresh ?? undefined,
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => console.error(err));
  };

  return fetchData(questionId, body);
};

// 등록된 답변 내용의 수정을 요청하는 함수
const patchAnswer = (answerId, body) => {
  const fetchData = async (answerId, body) => {
    if (!answerId) return;
    await fetch(`${HOST}/answers/${answerId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: getAccessToken(),
        Refresh: refresh ?? undefined,
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => console.error(err));
  };

  return fetchData(answerId, body);
};

// 질문 삭제를 요청하는 함수
const deleteQuestion = (questionId) => {
  const fetchData = async (questionId) => {
    if (!questionId) return;
    await fetch(`${HOST}/questions/${questionId}`, {
      method: 'DELETE',
      headers: {
        Authorization: getAccessToken(),
        Refresh: refresh ?? undefined,
      },
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => console.error(err));
  };

  return fetchData(questionId);
};

// 등록된 답변 내용의 삭제를 요청하는 함수
const deleteAnswer = (answerId) => {
  const fetchData = async (answerId) => {
    if (!answerId) return;
    await fetch(`${HOST}/answers/${answerId}`, {
      method: 'DELETE',
      headers: {
        Authorization: getAccessToken(),
        Refresh: refresh ?? undefined,
      },
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => console.error(err));
  };

  return fetchData(answerId);
};

export {
  getLogin,
  postLogin,
  postLogout,
  postSignup,
  postQuestion,
  patchQuestion,
  postAnswer,
  patchAnswer,
  deleteQuestion,
  deleteAnswer,
};
