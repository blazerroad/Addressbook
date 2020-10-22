import { IEntity } from '../repository/IEntity';

export interface IReduxService<TEntity extends IEntity> {
    getById(actionName: string, id: string): Promise<void>;
    all(actionName: string): Promise<void>;
    pagination(actionName: string,take : number , skip : number): Promise<void> 
    query(actionName: string, context: string): Promise<void>;
    add(entity: TEntity): Promise<void>;
    update(entity: TEntity): Promise<void>;
    dispatch(actionName: string, entity: TEntity): void
}