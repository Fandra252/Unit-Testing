"use client";

import { useState } from "react";
import {
  Button,
  Container,
  DeleteBtn,
  Input,
  InputContainer,
  Item,
  List,
  TaskText,
} from "./styled";

export default function TodoList() {
  const [tasks, setTasks] = useState<{ text: string; done: boolean }[]>([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { text: input, done: false }]);
    setInput("");
  };

  const toggleTask = (index: number) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, done: !task.done } : task
      )
    );
  };

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <Container>
      <InputContainer>
        <h3>Add new task</h3>
        <Input
          data-testid="task-input"
          type="text"
          placeholder="Add a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
        />
        <Button
          data-testid="add-task-button"
          onClick={addTask}
          disabled={input.trim() === ""}
        >
          Add
        </Button>
      </InputContainer>

      <List data-testid="tasks-list">
        {tasks.map((task, index) => (
          <Item key={index}>
            <TaskText $done={task.done} onClick={() => toggleTask(index)}>
              {task.text}
            </TaskText>
            <DeleteBtn
              data-testid={`task-delete-${index}`}
              onClick={() => deleteTask(index)}
            >
              ✕
            </DeleteBtn>
          </Item>
        ))}
      </List>
    </Container>
  );
}
