export type Entity = number;

export interface EntityManager {
    create_entity() : number;
}

export class EntityManagerImpl implements EntityManager {
    private next_ent : Entity = 0;

    public create_entity() : Entity {
        this.next_ent += 1;
        return this.next_ent - 1;
    }
}


