import { fireEvent, render, screen } from "@testing-library/react";
import TodoList from "../todo-list/TodoList";

describe("TodoList Component", () => {
  beforeEach(() => {
    render(<TodoList />);
  });
  it("should render the heading", () => {
    const heading = screen.getByText("My To-Do List");
    expect(heading).toBeInTheDocument();
  });
  it("should add a new task", () => {
    const inputField = screen.getByTestId("task-input");
    expect(inputField).toBeInTheDocument();
    fireEvent.change(inputField, { target: { value: "Fanendra Choudhary" } });
    const addButton = screen.getByTestId("add-task-button");
    expect(addButton).toBeInTheDocument();
    fireEvent.click(addButton);
  });
  it("should delete a task", () => {
    const inputField = screen.getByTestId("task-input");
    fireEvent.change(inputField, { target: { value: "Fanendra Choudhary" } });
    const addButton = screen.getByTestId("add-task-button");
    fireEvent.click(addButton);
    const deleteButton = screen.getByTestId("task-delete-0");
    fireEvent.click(deleteButton);
    expect(screen.queryByText("Fanendra Choudhary")).not.toBeInTheDocument();
  });
});
