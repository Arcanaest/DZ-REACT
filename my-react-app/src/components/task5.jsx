// 5. Создай компонент с текстовым полем (input) и списком имен (например, массив из 5-10 имен). При вводе текста в поле список должен фильтроваться по именам, которые содержат введенные буквы.
import "../App.css";
import { useState } from "react";

const Task5 = () => {
  const names = ["Мадина", "Малика", "Хафса", "Халима", "Халиса", "Ханифа"];
  const [nameFilter, setNameFilter] = useState("");

  const filteredNames = names.filter((name) => name.includes(nameFilter));

  return (
    <div>
      <input
        type="text"
        value={nameFilter}
        onChange={(e) => setNameFilter(e.target.value)}
      />
      <div className="output">
        <ol>
          {filteredNames.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};
export default Task5;
