import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

test("testing for contact",()=>{
    render(<Contact />);
    const heading=screen.getByRole("heading");
    // expect(heading).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
});

test("testing for contact",()=>{
    render(<Contact />);
    const button=screen.getByRole("button");
    // expect(heading).toBeInTheDocument();
    expect(button).toBeInTheDocument();
});
test("testing for contact",()=>{
    render(<Contact />);
    const button=screen.getByText("Send Message");
    // expect(heading).toBeInTheDocument();
    expect(button).toBeInTheDocument();
});

// test("testing for contact",()=>{
//     render(<Contact />);
//     const input=screen.getAllByRole("textbox");
//     // expect(heading).toBeInTheDocument();
//     expect(input).toBeInTheDocument();
// });