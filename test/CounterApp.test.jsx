import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";


describe('pruebas a counterApp', () => {

    const value = 10;

    test('debe de hacer match con el snapshot', () => {
        const {container}= render(<CounterApp value={value} />);
        expect(container).toMatchSnapshot();

    });
    test('debe de mostrar el valor inicial de 10', () => {
        render(<CounterApp value={value} />);
        expect(screen.getByText(value)).toBeTruthy();
        
    });
    test('debe incrementar con el boton +1', () => {
        render(<CounterApp value={value} />);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText("11")).toBeTruthy();

    });
    test('debe incrementar con el boton -1', () => {
        render(<CounterApp value={value} />);
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText("9")).toBeTruthy();

    });
    test('debe funcionar boton de reset', () => {
        render(<CounterApp value={value} />);
        fireEvent.click(screen.getByText('-1'));
        fireEvent.click(screen.getByRole("button",{name:"btn-reset"}));
        expect(screen.getByText("10")).toBeTruthy();
        

    });
})