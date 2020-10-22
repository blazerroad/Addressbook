import { Contact } from "../../models/Contact";
import { Services } from "./services/services";
import { actionNames } from "../../models/actionNames"

export const getList = async () => {
    await Services.instance.contact.pagination(actionNames.LIST, 10, 0)
}

export const getById = (id: string) => {
    return { type: actionNames.BYID, id }
}

