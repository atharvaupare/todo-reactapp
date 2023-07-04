import React, { useState, useEffect } from "react";
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";
uuidv4();

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const addTodo = (todo) => {
    if (!todo.trim()) return; //guard clause

    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    // console.log(todos);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (list, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, list, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />

      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} list={todo} />
        ) : (
          <Todo
            key={todo.id}
            list={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default TodoWrapper;
