/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
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
  let [modal, setModal] = useState(false);

  [1, 2, 3].map(function (a) {
    console.log(a);
  });

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
      {/* <div className="list">
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
        <h4
          onClick={() => {
            setModal(!modal); //! 은 modal의 현재 행동을 바꿔주는것 "true" -> "false", "false" -> "true"
          }}
        >
          {글제목[2]}
        </h4>
        <p>2월 17일 발행</p>
      </div> */}

      {글제목.map(function (a, i) {
        return (
          <div className="list">
            <h4
              onClick={() => {
                setModal(!modal); //! 은 modal의 현재 행동을 바꿔주는것 "true" -> "false", "false" -> "true"
              }}
            >
              {글제목[i]}
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
        );
      })}

      {modal === true ? <Modal color="skyblue" 글제목={글제목}></Modal> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.글제목[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
