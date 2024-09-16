// 3. Сделай компонент с двумя кнопками — "Лайк" и "Дизлайк" — и двумя счетчиками, которые показывают количество лайков и дизлайков. При нажатии на соответствующую кнопку значение соответствующего счетчика должно увеличиваться.

import { useState } from "react";
import "../App.css";

const Task3 = ()=>{
    const [likes, setLikes]=useState(0);
    const [dislikes, setDislikes]=useState(0);

    const DoLike = () =>{
        setLikes(likes+1);
    }
    const DoDislike = () =>{
        setDislikes(dislikes+1);
    }

    return(
        <div>
            <div className="counters">
                <h2 className="green">{likes} Лайков</h2>
                <h2 className="red">{dislikes} Дизлайков</h2>
            </div>
            <div className="btns">
                <button className="green" onClick={DoLike}>Like</button>
                <button className="red" onClick={DoDislike}>Dislike</button>
            </div>
        </div>
    )
}

export default Task3;