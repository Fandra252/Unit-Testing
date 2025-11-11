import { Container, Title } from "./styled";
import TodoList from "./todo-list/TodoList";
import TodoLists from "./todo-lists/TodoLists";

export default function Home() {
  return (
    <Container>
      <Title>My To-Do List</Title>
      <TodoList />
      <TodoLists />
    </Container>
  );
}
