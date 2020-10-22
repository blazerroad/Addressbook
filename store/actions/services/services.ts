import { ContactService } from "./ContactServices";

export class Services {
    public static instance: Services;

    public static init(dispatch: any) {
        Services.instance = new Services(dispatch);
    }

    public contact : ContactService

    private constructor(dispatch: any) {
        this.contact = new ContactService(dispatch);
    }
}