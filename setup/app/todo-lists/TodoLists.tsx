"use client";
import React, { useEffect, useState } from "react";
import { Container } from "../todo-list/styled";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
const TodoLists = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        return res.json();
      })
      .then((data: Todo[]) => {
        setTodos(data);
      });
  }, []);
  return (
    <Container>
      <h2 data-testid="heading">Fetched To-Do Lists</h2>
      <div>
        {todos.map((todo: Todo) => (
          <p key={todo.id}>
            {todo.id}
            {") "}
            {todo.title}
          </p>
        ))}
      </div>
    </Container>
  );
};

export default TodoLists;
