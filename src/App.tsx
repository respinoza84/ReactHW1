import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const mystyle = {
    textAlign: "left",
  };
  const listStyle = {
    listStyle:'none'
  }

  const [toDo, seeData] = useState<any[]>([]);
  const url = "https://jsonplaceholder.typicode.com/todos";

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          return Error("Oh no");
        }
        return res.json();
      })
      .then((data) => seeData(data));
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Rodney Espinoza Tarea1</p>
        <p>Render, estilos inline, checkbox</p>
        <ul style ={{listStyle:'none'}}>
          {toDo.map((list) => (
            <li>
              <div key={list.id} style ={{textAlign: "left"}}>  
                {list.id} - {list.title}
                <input
                  type="checkbox"
                  id={list.id}
                  value={list.completed}
                  checked={list.completed}
                />
              </div><br />
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
