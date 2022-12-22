import React from "react";
// import ReactDOM from "react-dom"; 옛날꺼
import ReactDOM from "react-dom/client";
import App from "./components/App"

// 옛날방식
// ReactDOM.render(<App></App>, document.getElementById("root"));

// 최신방식
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)
