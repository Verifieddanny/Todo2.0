import style from "./App.module.css";

import { useState } from "react";

export function Middle() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  function displayTask() {
    const input = document.querySelector("input");
    const tasks = {
      id: task.length === 0 ? 1 : task[task.length - 1].id + 1,
      content: newTask,
      complete: false,
    };
    if (input.value !== "") {
      setTask([...task, tasks]);
    }
  }

  function getNewTask(event) {
    setNewTask(event.target.value);
  }

  function completeTask(id) {
    setTask(
      task.map((task) => {
        if (task.id === id) {
          return { ...task, complete: task.complete === false ? true : false };
        } else {
          return task;
        }
      })
    );
    console.log("hmm");
  }
  function deleteTask(id) {
    setTask(task.filter((task) => task.id !== id));
  }
  function clearAll() {
    setTask([]);
  }

  return (
    <>
      <div className={style.middle}>
        <div className={style.tick}></div>
        <input
          type="text"
          className={style.addToDO}
          placeholder="Create a To do! 😉"
          onChange={getNewTask}
          onKeyDown={(event) => {
            const input = document.querySelector("input");
            if (event.keyCode === 13 && input.value !== "") {
              displayTask();

              input.value = "";
            }
          }}
        />
      </div>

      <div className={style.bottom}>
        <div className={style.topB}>
          {task.map((tasks, index) => {
            return (
              <li
                key={index}
                className={`${style.lists} `}
                id={index}
                style={{
                  backgroundColor: tasks.complete ? "white" : "",
                  color: task.complete ? "black" : "white",
                }}
              >
                <div className={style.out}>
                  <div className={style.in}>
                    <div
                      className={`${style.tick} ${style.check} `}
                      style={{
                        color: tasks.complete ? "white" : "transparent",
                      }}
                    >
                      {/* <p className={style.ticked}>✓</p> */}
                    </div>
                    <p
                      className={style.todo}
                      onClick={() => {
                        completeTask(tasks.id);
                      }}
                    >
                      {tasks?.content}
                    </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    className={style.mainClose}
                    onClick={() => {
                      deleteTask(tasks.id);
                    }}
                  >
                    <path
                      fill="currentcolor"
                      fillRule="evenodd"
                      d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
                      className={style.close}
                      id={index}
                    />
                  </svg>
                </div>
              </li>
            );
          })}
        </div>
        <div className={style.lowB}>
          <p className={style.low}>
            <span className={style.numbers}>{`(${task.length})`}</span> items
            left.
          </p>

          <p className={style.low} onClick={clearAll}>
            Clear Completed.
          </p>
        </div>
      </div>

      <p className={style.last}>Press 'Enter' to add!</p>

      <div
        className={style.adds}
        id={style.button}
        onClick={() => {
          const input = document.querySelector("input");
          if (input.value !== "") {
            displayTask();
            input.value = "";
          }
        }}
      >
        +
      </div>
    </>
  );
}
