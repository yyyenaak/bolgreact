/* eslint-disable no-unused-vars */ //lint 에러 무시
import { useState } from "react";
import "./App.css";

function App() {
  let post = "강남 우동 맛집"; //변수 선언
  let [글제목, 글제목변경] = useState([
    "남자 코드 추천",
    "강남 우동맛집",
    "파이썬 독학",
  ]); //재랜더링시 useState를 사용

  let [좋아요, 좋아요변경] = useState(0); //state 변경함수, 좋아요 변경 넣을때 +1 늘어나게

  return (
    <div className="App">
      <div className="black-nav">
        <h4>Blog-React</h4>
      </div>

      <button
        onClick={() => {
          let copy = 글제목;
          copy[0] = "여자코드 추천";
          글제목변경(copy);
        }}
      >
        글수정
      </button>
      <div className="list">
        <h4>
          {글제목[0]}
          <span
            onClick={() => {
              좋아요변경(좋아요 + 1);
            }}
          >
            👍
          </span>
          {좋아요}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <Modal></Modal>
      <Modal />
    </div>
  );
}

function Modal() {
  return (
    <>
      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  );
}

export default App;
