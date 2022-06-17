import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe("pruebas en archivo 02",()=>{
    test("debe de retornar 'hola fernando'", () => {
        const name = "hernan";
        const message = getSaludo(name);

        expect(message).toBe(`Hola ${name}!!!`);

    
    });
});