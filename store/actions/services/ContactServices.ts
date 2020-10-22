import { BaseReduxService } from "../../service/BaseReduxService";
import { Contact } from '../../../models/Contact';
import {ContactRepository} from '../repositories/ContactRepository';

export class ContactService extends BaseReduxService<Contact,ContactRepository> {
    constructor(dispatch: any)
    {
        const repository = new  ContactRepository();
        super(dispatch,repository);
    }

}