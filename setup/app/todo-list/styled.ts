import styled from "styled-components";

export const Container = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #2b2b2bff;
  padding: 30px;
  border-radius: 12px;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 14px;
  border-radius: 8px;
  border: 1px solid #dcdde1;
  font-size: 1rem;
  color: white;
  outline: none;
  &:focus {
    border-color: #40739e;
  }
`;

export const Button = styled.button`
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.2s;
  background: #40739e;
  &:hover {
    background: #273c75;
  }
`;

export const List = styled.ul`
  padding: 0;
  width: 100%;
`;

export const Item = styled.li`
  background: white;
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
`;

export const TaskText = styled.span<{ $done: boolean }>`
  text-decoration: ${({ $done }) => ($done ? "line-through" : "none")};
  color: ${({ $done }) => ($done ? "#95a5a6" : "#2f3640")};
  cursor: pointer;
`;

export const DeleteBtn = styled.button`
  background: transparent;
  border: none;
  color: #e84118;
  font-size: 1rem;
  cursor: pointer;
`;
