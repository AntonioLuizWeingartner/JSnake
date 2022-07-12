import { Entity } from "./entity";

interface ComponentArray<T> {
    add_component(ent : Entity) : number;
    get_component(ent : Entity, index : number) : T;
    delete_component(ent : Entity, index : number) : T;
}

/*
class ComponentArrayImpl<T> implements ComponentArray<T> {
}
*/