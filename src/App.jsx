/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";

function App() {
  let post = "강남 우동 맛집"; //변수 선언
  let [a, b] = useState("남자 코드 추천");

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ fontSize: "16px" }}>블로그</h4>
      </div>
      <div className="list">
        <h4>{a}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
