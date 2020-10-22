import { actionNames } from '../../../models/actionNames'
import { Contact } from '../../../models/Contact'

export class ContactState {
    public [actionNames.LIST] : Array<Contact> = new Array<Contact>();
    public [actionNames.BYID]  : Contact = new Contact();
}