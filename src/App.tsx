import React, { ChangeEvent, FC } from "react";
import "./App.css";
import { useState } from "react";
import { TodoList } from "./apptypes";
import TodoItem from "./TodoItem";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [workDay, setWorkDay] = useState<number>(0);
  const [todoList, setTodoList] = useState<TodoList[]>([]);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setWorkDay(Number(event.target.value));
    }
    console.log(task, workDay);
  };

  const addNewTask = (): void => {
    const newTask = {
      taskName: task,
      workDay: workDay,
    };
    setTodoList([...todoList, newTask]);
    setTask("");
    setWorkDay(0);
  };
  const deleteTask = (nameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== nameToDelete;
      })
    );
  };
  return (
    <div className="App">
      <div className="maincard">
        <input
          className="maincardinput"
          type="text"
          name="task"
          value={task}
          placeholder="Taskınızı giriniz."
          onChange={handleChange}
        />
        <input
          className="maincardinput"
          type="number"
          name="workDay"
          value={workDay}
          placeholder="Kaç günde tamamlanır?"
          onChange={handleChange}
        />
        <button className="taskbutton" onClick={addNewTask}>
          Task ekle
        </button>
      </div>
      <div className="todocard">
        {todoList.map((task: TodoList, index: number) => {
          return <TodoItem key={index} task={task} deleteTask={deleteTask} />;
        })}
      </div>
    </div>
  );
};

export default App;
