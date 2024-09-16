// 2. Создай компонент с кнопкой и заголовком (например, <h1>). При каждом клике на кнопку текст в заголовке должен изменяться на случайную фразу из массива (например, массив из пяти разных фраз).
import { useState } from "react";
import "../App.css";

const Task2 = () => {
  const phrases = ["1 цитата", "2 цитата", "3 цитата", "4 цитата", "5 цитата"];
  const [index, setIndex] = useState(0);

  const changePhrase = () => {
    setIndex((index + 1) % phrases.length);
  };
  return (
    <div>
      <div className="">
        <h1>{phrases[index]}</h1>
      </div>
      <button onClick={changePhrase}>Другая цитата</button>
    </div>
  );
};

export default Task2;
