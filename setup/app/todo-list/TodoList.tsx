"use client";

import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f5f6fa;
  padding: 40px;
  font-family: "Poppins", sans-serif;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #2f3640;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
`;

const Input = styled.input`
  padding: 10px 14px;
  border-radius: 8px;
  border: 1px solid #dcdde1;
  width: 250px;
  font-size: 1rem;
  color: #2f3640;
  outline: none;
  &:focus {
    border-color: #40739e;
  }
`;

const Button = styled.button`
  background: #40739e;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background: #273c75;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  width: 320px;
`;

const Item = styled.li`
  background: white;
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
`;

const TaskText = styled.span<{ $done: boolean }>`
  text-decoration: ${({ $done }) => ($done ? "line-through" : "none")};
  color: ${({ $done }) => ($done ? "#95a5a6" : "#2f3640")};
  cursor: pointer;
`;

const DeleteBtn = styled.button`
  background: transparent;
  border: none;
  color: #e84118;
  font-size: 1rem;
  cursor: pointer;
`;

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
      <Title>My To-Do List</Title>
      <InputContainer>
        <Input
          data-testid="task-input"
          type="text"
          placeholder="Add a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
        />
        <Button data-testid="add-task-button" onClick={addTask}>
          Add
        </Button>
      </InputContainer>

      <List>
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
