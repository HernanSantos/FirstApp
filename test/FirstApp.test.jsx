import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('prueba en FirstApp', () => {
    test('debe de hacer match', () => {
        
        render(<FirstApp title = {"soy un titulo"}/>)

    });
})