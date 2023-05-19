import { useState } from "react";
import styles from "./ToDoList.module.css";

function ToDoList() {
  const [toDo, setToDo] = useState(""); //setDodo는 toDo를 수정해주는 함수, 절대 직접적으로 toDo값을 수정하지않고 함수를 이용해서 한다!!
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  const delBtn = (event) => {
    // console.log(event.target.parentElement);
    const delLi = event.target.parentElement;
    delLi.remove();
  };
  //  console.log(toDos);

  return (
    <div>
      <h1>My To Dos({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do ..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul className={styles.ul}>
        {toDos.map((item, index) => (
          <li key={index}>
            <button className={styles.delBtn} onClick={delBtn}>
              ❌
            </button>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
