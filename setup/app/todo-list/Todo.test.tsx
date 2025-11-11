import { fireEvent, render, screen } from "@testing-library/react";
import TodoList from "./TodoList";

describe("TodoList Component", () => {
  beforeEach(() => {
    render(<TodoList />);
  });
  // Test cases 1
  it("should render heading", () => {
    const heading = screen.getByText(/Add new task/i);
    expect(heading).toBeInTheDocument();
  });
  // Test cases 2
  it("should render input placeholder", () => {
    const inputText = screen.getByPlaceholderText(/Add a new task.../i);
    expect(inputText).toBeInTheDocument();
  });
  // Test cases 3
  it("should render add button", () => {
    const addButton = screen.getByTestId(/add-task-button/i);
    expect(addButton).toBeDisabled();
  });
  // Test cases 4
  it("should fill input field when typing", () => {
    const inputfield = screen.getByTestId(/task-input/i);
    expect(inputfield).toBeInTheDocument();
    fireEvent.change(inputfield, { target: { value: "Fanendra Choudhary" } });
    expect(screen.getByTestId(/add-task-button/i)).not.toBeDisabled();
  });
  // Test cases 5
  it("should add task in the list", () => {
    const inputfield = screen.getByTestId(/task-input/i);
    expect(inputfield).toBeInTheDocument();
    fireEvent.change(inputfield, {
      target: { value: "Fanendra Choudhary" },
    });
    const addButton = screen.getByTestId(/add-task-button/i);
    fireEvent.click(addButton);
    const taskItem = screen.getByText(/Fanendra Choudhary/i);
    expect(taskItem).toBeInTheDocument();
  });
  // Test cases 6
  it("should have tasks in list", () => {
    const inputfield = screen.getByTestId(/task-input/i);
    const addButton = screen.getByTestId(/add-task-button/i);
    const tasksList = screen.getByTestId(/tasks-list/i);
    expect(tasksList.querySelectorAll("li")).toHaveLength(0);
    fireEvent.change(inputfield, { target: { value: "Task 1" } });
    fireEvent.click(addButton);
    fireEvent.change(inputfield, { target: { value: "Task 2" } });
    fireEvent.click(addButton);
    fireEvent.change(inputfield, { target: { value: "Task 3" } });
    fireEvent.click(addButton);
    expect(tasksList.querySelectorAll("li")).toHaveLength(3);
  });
});
