import Footer from '../components/Footer'
import { screen, render } from '@testing-library/react'
import { MemoryRouter } from "react-router";

test("When footer is render should have a Copyright text", () => {
    render (<MemoryRouter><Footer/></MemoryRouter>)
    const textCopyright = screen.getByText(/© Copyright FemCoders 2024/i)
    expect(textCopyright).toBeDefined();
})