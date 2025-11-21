import { render, screen } from "@testing-library/react"
import InputFile from "./InputFile"

test("InputFile test cases", () => {
    render(<InputFile />)
    const Input = screen.getByRole("textbox");
    expect(Input).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter your name"))
    expect(Input).toHaveAttribute("type", "text");
    expect(Input).toHaveAttribute("id", "userName");
    expect(Input).toHaveAttribute("name", "Name");
})