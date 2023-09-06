import React from "react";
import { TodoList } from "./apptypes";

type PropsType = {
  task: TodoList;
  deleteTask(nameToDelete: string): void;
};
const TodoItem = ({ task, deleteTask }: PropsType) => {
  return (
    <div className="card">
      <div className="cardtask">
        <p>{task.taskName}</p>
        <p>{task.workDay}gün</p>
        <button className="deleteBtn" onClick={() => deleteTask(task.taskName)}>
          Sil
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
