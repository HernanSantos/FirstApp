import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('prueba en FirstApp', () => {

    const title = "Hola, soy Goku";
    const subTitle = "Soy un subtitulo"

    test('debe de hacer match', () => {
        
        const {container} = render(<FirstApp title={title}/>);
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar el mensaje "hola, soy goku', () => {

        render(<FirstApp title={title}/>);  
        expect(screen.getAllByText(title)).toBeTruthy();
    });

    test('debe de mostrar el titulo en un h1', () => {
        
        render(<FirstApp title={title}/>);
        expect(screen.getByRole("heading",{level:1}).innerHTML).toContain(title);
    });

    test('debe de mostrar el subtitulo', () => {
        render(<FirstApp title={title} subTitle={subTitle}/>);
        expect(screen.getAllByText(subTitle).length).toBe(2);
    });
})