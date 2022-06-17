import { string } from "prop-types";
import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas en 11-', () => {
    
    test('getImagen debe retornar url img', async() => {
        
        const url = await getImagen();
        console.log(url)

        expect(typeof url).toBe("string");

    });
})