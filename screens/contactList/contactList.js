import React, { useEffect } from "react";
import { View } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import { getList } from "../../store/actions/ContactFacade"
import ContactFlatList from "../../components/contact/contactFlatList"
import { actionNames } from "../../models/actionNames"

const ContactList = (props) => {
    const dispatch = useDispatch();
    const contacts = useSelector(t => t.contact[actionNames.LIST])
    useEffect(() => {
        dispatch(getList())
    }, [dispatch])

    return (
        <ContactFlatList data={contacts} {...props} />
    )
}

export default ContactList;


