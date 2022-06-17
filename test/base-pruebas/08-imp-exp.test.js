import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('pruebas en 08-', () => {
    test('debe de retornar un string y un numero', () => {
        const id = 1;
        const hero = getHeroeById(id);

        expect(hero).toEqual({id:1, name: 'Batman', owner: 'DC'});
    });

    test('debe de retornar unndefined si no existe', () => {
        const id = 100;
        const hero = getHeroeById(id);

        expect(hero).toBeFalsy();
    });


    test('tarea', () => {
        const owner = "DC";
        const hero = getHeroesByOwner(owner);

        expect(hero).toEqual(
            [{ id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }]
        );

        expect(hero.length).toBe(3);


    });
});