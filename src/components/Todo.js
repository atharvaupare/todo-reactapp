import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({ list, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="Todo">
      <p
        onClick={() => toggleComplete(list.id)}
        className={`${list.completed ? "completed" : ""}`}
      >
        {list.task}
      </p>
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editTodo(list.id)}
        />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(list.id)} />
      </div>
    </div>
  );
};
