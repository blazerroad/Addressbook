import { DefaultEntity } from "../store/repository/DefaultEntity"

export class Contact extends DefaultEntity {
    firstName: string = "";
    lastName: string = "";
    phoneNo: string = "";

    constructor(id?: string, status?: number, ok?: boolean, firstName: string = "", lastName: string = "", phoneNo: string = "") {
        super(id, status, ok);
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNo = phoneNo;
    }

}