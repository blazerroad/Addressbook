import { ContactReducerService } from  "./ContactService"

export class ReducerServices {
    public static _instance: ReducerServices;
    public static instance(): ReducerServices {
        if (!ReducerServices._instance) {
            ReducerServices._instance = new ReducerServices();
        }
        return ReducerServices._instance;
    }

    contactReducer: ContactReducerService = new ContactReducerService()

    private constructor() {

    }
}