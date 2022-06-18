import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('prueba en FirstApp', () => {
    test('debe de hacer match', () => {
        
        const title = "Hola, soy Goku";
        const {container,getByText} = render(<FirstApp title= {title}/>);

        expect(container).toMatchSnapshot();
    });

    test('debe mostrar el titulo en un h1', () => {
        
        const title = "Hola, soy Goku";
        const {container,getByText} = render(<FirstApp title= {title}/>);

        const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain(title);
    });

    test('mostrar subtitulo', () => {
        
        const title = "Hola, soy Goku";
        const subTitle = "Soy un subtitulo";
        const {getAllByText} = render(<FirstApp title={title} subTitle={subTitle}/>);

        expect(getAllByText(subTitle).length).toBe(2);
    });
})