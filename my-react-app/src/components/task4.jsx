// 4. Создай компонент с текстом и кнопкой. При нажатии на кнопку текст должен либо скрываться, либо показываться. Кнопка должна менять надпись в зависимости от текущего состояния (например, "Показать" или "Скрыть").

import { useState } from "react";
import "../App.css";

const Task4 = ()=>{
    const [isVisible, setIsVisible] = useState(true);


    
    const changeState = () =>{
        setIsVisible(visible=> !visible)
    }



    return (
        <div>
          <div className="">
          {isVisible && <h1>Нажми на кнопку</h1>}
          </div>
          <button onClick={changeState}>{isVisible ?"Скрыть" :"Показать"}</button>
        </div>
      );
    };


export default Task4;