/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";

function App() {
  let post = "강남 우동 맛집"; //변수 선언
  let [글제목, b] = useState([
    "남자 코드 추천",
    "강남 우동맛집",
    "파이썬 독학",
  ]); //재랜더링시 useState를 사용

  return (
    <div className="App">
      <div className="black-nav">
        <h4>Blog-React</h4>
      </div>
      <div className="list">
        <h4>{글제목[0]}</h4>
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
    </div>
  );
}

export default App;
