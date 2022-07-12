import { EntityManagerImpl, Entity, EntityManager } from "../../src/public/code/entity";

describe('Implementation of EntityManager', () => {
    test('create_entity() should always return a new uniquely identifiable entity', () => {
        const entities : Entity[] = [];
        const ent_manager : EntityManager = new EntityManagerImpl();

        for (let i = 0; i < 100; i++) {
            entities.push(ent_manager.create_entity());
        }

        for (let i = 0; i < 100; i++) {
            const crr_entity : Entity = entities[i];
            for (let j = i+1; j < 100; j++) {
                const comp_entity : Entity = entities[j];
                expect(crr_entity).not.toEqual(comp_entity);
            }
        }
    });
});