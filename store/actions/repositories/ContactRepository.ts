import { IRepository } from "../../repository/IRepository"
import { Contact } from '../../../models/Contact'

export class ContactRepository implements IRepository<Contact> {

    constructor() {

    }
    async innerFetch(param: string): Promise<Response> {
        const res = await fetch(`https://randomuser.me/api/?inc=name,id,phone${param}`)
        return res;
    }
    async getById(id: string): Promise<Contact> {
        const response = await this.innerFetch(`&id=${id}`)
        const mapped = await this.map(response)
        if (!mapped || !Array.isArray(mapped) || mapped.length == 0) {
            throw "No DATA";
        }
        return mapped[0];
    }

    async all(): Promise<Array<Contact>> {
        const response = await this.innerFetch("")
        return await this.map(response)
    }

    async pagination(take: number, skip: number): Promise<Array<Contact>> {
        const response = await this.innerFetch(`&page=${skip}&results=${take}`);
        return await this.map(response)
    }

    async query(context: string): Promise<Array<Contact>> {
        throw "Not Implemented"
    }
    async add(entity: Contact): Promise<Contact> {
        throw "Not Implemented"
    }
    async update(entity: Contact): Promise<Contact> {
        throw "Not Implemented"
    }

    async map(response: Response): Promise<Array<Contact>> {
        const entity = new Contact();
        const entities = new Array<Contact>();
        if (!response.ok) {
            entity.status = response.status;
            entity.ok = response.ok;
            entities.push(entity);
            return entities;
        }
        var resData = await response.json();
        if (!resData || !resData.results || !Array.isArray(resData.results)) {
            entity.status = 501;
            entities.push(entity);
            return entities;
        }
        const entitiesMaps = resData.results.map(t => {
            const id = String((new Date()).getTime());
            return new Contact(id, response.status, response.ok, t.name.first, t.name.last, t.phone);
        })
        return entitiesMaps;

    }
}