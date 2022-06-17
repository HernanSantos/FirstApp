import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";


describe('Deserialización de arreglos', () => {
    test('debe de retornar un string y un numero', () => {
        
        const [letters, numbers] = retornaArreglo();

        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe("number");
    });
});