import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";


describe('pruebas en 09-', () => {
    
    test('retorna un heroe', (done) => {
        const id = 100;
        getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'});
                done();
                })        
            .catch(error => {
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            });
            
        });
});