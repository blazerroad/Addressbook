import { actionNames } from '../../../models/actionNames'
import { DefualtReducerService } from "../../service/DefualtReducerService";
import { ContactState } from "../models/Contact"

export class ContactReducerService extends DefualtReducerService<ContactState>
{
    executs: { (state: ContactState, action: any): ContactState; }[]
    constructor() {
        super(new ContactState())
    }

    getById(state: ContactState = this.state, action: any): ContactState {
        if (action.type !== actionNames.BYID) return state;
        const contact = state[actionNames.LIST].find(t => t.id === action.id)
        return { ...state, [action.type]: contact }
    }

    list(state: ContactState = this.state, action: any): ContactState {
        if (action.type !== actionNames.LIST) return state;
        return { ...state, [action.type]: action.entity }
    }

    reduce(state: ContactState = this.state, action: any): ContactState {
        const res = this.getById(state, action);
        return this.list(res, action);
    }
}