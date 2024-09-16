// 7. Создайте компонент "Простой калькулятор". Создайте два поля, в одном пользователь будет вводить одно значение, а другом второе. При нажатии на кнопку в диве должен отображаться текст "Ваш ответ: " и сумма двух значений из полей ввода.

import "../App.css";
import { useState } from "react";

const Task7 = () => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [summa, setSumma] = useState(null);

  const getSum = () => {
    const num1 = +number1;
    const num2 = +number2;
    if (isNaN(num1) || isNaN(num2)) {
      setSumma("Введены некорректные данные");
    } else {
      setSumma(num1 + num2);
    }
  };

  return (
    <div>
      <div className="inputs">
        <input
          type="text"
          value={number1}
          onChange={(e) => setNumber1(e.target.value)}
        />
        <input
          type="text"
          value={number2}
          onChange={(e) => setNumber2(e.target.value)}
        />
      </div>
      <div className="btn">
        <button onClick={getSum}>Вывести сумму</button>
      </div>
      <div className="output">{summa !== null ? { summa } : ""}</div>
    </div>
  );
};
export default Task7;
