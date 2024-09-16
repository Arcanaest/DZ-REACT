// 1. Сделай компонент с текстом "Включено" или "Выключено" и кнопкой. По клику на кнопку состояние текста должно переключаться между этими значениями.

import { useState } from "react";
import "../App.css";

const Task1 = () => {
  let [state, setState] = useState(false);
  const changeState = () => {
    setState(!state);
  };
  return (
    <div className="div">
      <div>
        <h1>{state ? "Включено" : "Выключено"}</h1>
      </div>
      <button className="btn" onClick={changeState}>
        Поменять
      </button>
    </div>
  );
};

export default Task1;
