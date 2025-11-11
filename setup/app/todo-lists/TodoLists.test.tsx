import { render, screen, waitFor } from "@testing-library/react";
import TodoLists from "./TodoLists";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        { userId: 1, id: 1, title: "Test Todo 1", completed: false },
        { userId: 1, id: 2, title: "Test Todo 2", completed: true },
      ]),
  })
);

describe("TodoLists", () => {
  beforeEach(() => {
    render(<TodoLists />);
  });
     it("TodoLists should render heading", () => {
       const heading = screen.getByTestId(/heading/i);
       expect(heading).toBeInTheDocument();
     });
  it("should fetch and display todos", async () => {
    await waitFor(() => {
      expect(screen.getByText(/Test Todo 1/i)).toBeInTheDocument();
    });
    expect(global.fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/todos"
    );
  });
 
});
