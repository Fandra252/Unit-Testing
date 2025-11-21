import { render, screen } from "@testing-library/react"
import { Learn } from "./Learn"


test("Leran coponent test case", () => {
    render(<Learn />);
    const heading = screen.getByText(/Fanendra Choudhary/i);
    expect(heading).toBeInTheDocument();
    const imageAlt = screen.getByAltText(/image/i);
    expect(imageAlt).toBeInTheDocument();
})