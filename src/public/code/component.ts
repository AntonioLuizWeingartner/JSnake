import { Entity } from "./entity";

interface ComponentArray<T> {
    add_component(ent : Entity) : T;
    get_component(ent : Entity) : T;
    delete_component(ent : Entity) : void;
}

class ComponentArrayImpl<T> implements ComponentArray<T> {

    private t_constructor : new () => T;

    private next_cp_id = 0;
    private ent_to_cp : Map<Entity, T> = new Map();

    constructor(t_constructor : new () => T) {
        this.t_constructor = t_constructor;
    }

    add_component(ent : Entity) : T {
        const new_cp_instance = new this.t_constructor();
        this.ent_to_cp.set(ent, new_cp_instance);
        return new_cp_instance;
    }

    get_component(ent : Entity) : T {
        if (this.ent_to_cp.has(ent)) {
            return this.ent_to_cp.get(ent) as T;
        } else {
            throw `Component not found. (Entity: ${ent})`;
        }
    }

    delete_component(ent : Entity) : void {
        if (this.ent_to_cp.has(ent)) {
            this.ent_to_cp.delete(ent);
        } else {
            throw `Component not found. (Entity: ${ent})`;
        }
    }
}