import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const HOST = process.env.REACT_APP_SERVER_HOST;

// 질문 목록 페이지, 메인 페이지에서 리스트에 대한 데이터를 요청하는 함수
const useGetList = (page, size) => {
  const [data, setData] = useState();

  const fetchData = async (page, size = 50) => {
    // TODO: URI 변경하기
    await fetch(`${HOST}/questions?page=${page}&size=${size}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchData(page, size);
  }, [page]);

  return data;
};

// 질문 상세 페이지에서 하나의 질문에 대한 데이터만 요청하는 함수
const useGetQuestion = (questionId) => {
  const [data, setData] = useState();

  const fetchData = async (questionId) => {
    await fetch(`${HOST}/questions/${questionId}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchData(questionId);
  }, [questionId]);

  return data;
};

// 질문 상세 페이지에서 하나의 질문에 대한 데이터만 요청하는 함수
const useGetAnswers = (questionId) => {
  const [data, setData] = useState();

  const fetchData = async (questionId) => {
    await fetch(`${HOST}/answers?questionId=${questionId}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchData(questionId);
  }, [questionId]);

  return data;
};

// 회원 정보를 요청하는 함수
const useGetUser = () => {
  const [data, setData] = useState();

  const fetchData = async () => {
    await fetch(`${HOST}/members`, {
      method: 'GET',
      headers: {
        Authorization: Cookies.get('accessToken'),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data;
};
export { useGetList, useGetQuestion, useGetAnswers, useGetUser };
