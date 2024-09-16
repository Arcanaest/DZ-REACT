// 6. Создайте компонент "Конвертер градусов Цельсия в градусы Фаренгейта". Компонент должен содержать два поля ввода для значения в градусах Цельсия и градусах Фаренгейта. После ввода значения в одно из полей, другое поле должно автоматически обновляться в соответствии с формулой конвертации.

import "../App.css";
import { useState } from "react";

const Task6 = () => {
  const [celsium, setCelsium] = useState("");
  const [farenheit, setFarenheit] = useState("");

  const getFarenheit = () => {
    const cels = +celsium;
    if (isNaN(cels)) {
      setFarenheit("Введены некорректные значения");
    } else {
      setFarenheit(cels * 1.8 + 32);
    }
  };

  return (
    <div>
      <div className="inputs">
        <input
          type="text"
          value={celsium}
          onChange={(e) => setCelsium(e.target.value)}
        />
      </div>
      <div className="btn">
        <button onClick={getFarenheit}>Перевести в Фаренгейт</button>
      </div>
      <input type="text" value={farenheit} />
    </div>
  );
};
export default Task6;
