import './App.css';
import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    if (toDos.length <+ 10) {
      setToDos((currentArray) => [toDo, ...currentArray]);
    } else {
      return alert("등록된 리스트가 너무 많습니다.");
    }
    setToDo("");
  };
  const onClick = (idx) => {
    setToDos(toDos.filter((item, toDoIdx) => idx !== toDoIdx));
  }

  return (
    <div className="box">
      <div className="todo">
        <h1>너의 할 일은。</h1>
        <span className="sub">"아직 한 적 없는 일을, 찾고 있어"</span>
        <form
          className="list" 
          onSubmit={onSubmit}>
          <input 
            onChange={onChange} 
            maxLength={15}
            value={toDo} 
            type="text" 
            placeholder="Write your to do..." 
          />
          <button>
          <span className="material-symbols-outlined">add</span>
          </button>
        </form>
        <ul>
          {toDos.map((item, idx) => (
            <li 
              key={idx}
            >
              {item}
              <button onClick={() => onClick(idx)}>
              <span className="material-symbols-outlined">delete_forever</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
