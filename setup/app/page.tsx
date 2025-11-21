import { Container, Title } from "./styled";
import TodoList from "./todo-list/TodoList";

export default function Home() {
  return (
    <Container>
      <Title>My To-Do List</Title>
      <TodoList />
    </Container>
  );
}
