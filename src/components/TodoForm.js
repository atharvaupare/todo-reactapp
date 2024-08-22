import React, { useState } from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const TodoForm = ({ addTodo, setAllComplete, resetList }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(value);

    setValue("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="What is the task today?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
     

      <button type="submit" className="todo-btn">
        Add Task
      </button>
     
      <button  className="todo-btn">
      <FontAwesomeIcon
          icon={faCheck}
          onClick={() =>setAllComplete()}
        />
      </button>
        
        

      <button onClick={() => {resetList()}} className="todo-btn">
      <FontAwesomeIcon
          icon={faRotateRight}
          onClick={() => resetList()}
        />
      </button>

    </form>
  );
};
