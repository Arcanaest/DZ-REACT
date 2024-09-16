import { useState } from "react";
import "./App.css";
import Task1 from "./components/task1";
import Task2 from "./components/task2";
import Task3 from "./components/task3";
import Task4 from "./components/task4";
import Task5 from "./components/task5";
import Task6 from "./components/task6";
import Task7 from "./components/task7";

function App() {
  return (
    <>
      <div>
        <Task1 />
      </div>
      <div>
        <Task2 />
      </div>
      <div>
        <Task3 />
      </div>
      <div>
        <Task4 />
      </div>
      <div>
        <Task5 />
      </div>
      <div>
        <Task6 />
      </div>
      <div>
        <Task7 />
      </div>
    </>
  );
}

export default App;
