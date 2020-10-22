import {IEntity} from './IEntity';

export interface IRepository<TEntity extends IEntity> {
    getById(id: string): Promise<TEntity>;
    all(): Promise<Array<TEntity>>;
    pagination(take : number , skip : number): Promise<Array<TEntity>> 
    query(context: string): Promise<Array<TEntity>>;
    add(entity: TEntity): Promise<TEntity>;
    update(entity: TEntity): Promise<TEntity>;
    map(response: Response): Promise<Array<TEntity>>;
}