import Nav from '../components/Nav'
import { screen, render } from '@testing-library/react'
import { expect, test, describe, beforeEach } from 'vitest';
import '@testing-library/jest-dom';
import { MemoryRouter } from "react-router";

describe('Nav component', () => {
    beforeEach(() => {
        render(<MemoryRouter><Nav/></MemoryRouter>)
    })

    test("when Nav components rendered should have ButtonAdd", () => {
        const ButtonAdd = screen.getByText(/Añadir póster/i)
        expect(ButtonAdd).toBeDefined();
    })

    test ('render links', () =>{
        const links = screen.getByText(/Añadir póster/i); 
        expect(links).toHaveAttribute('href', '/create');
    });
})