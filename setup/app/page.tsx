import { Container } from "./styled";
import TodoList from "./todo-list/TodoList";

export default function Home() {
  return (
    <Container>
      <TodoList />
    </Container>
  );
}
