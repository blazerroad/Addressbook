import React, { useEffect } from "react";
import { View, Text,StyleSheet } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import { getById } from "../../store/actions/ContactFacade"
import { actionNames } from "../../models/actionNames"
import { MContainer } from "../../components/customComponent"
import Header from "./header"

const ContactDetail = (props) => {
    const { id } = props.route.params;
    const dispatch = useDispatch();
    const contacts = useSelector(t => t.contact[actionNames.BYID])
    useEffect(() => {
        dispatch(getById(id))
    }, [dispatch])

    return (
        <MContainer>
            <View>
                <Header contact={contacts} />
                <View style={styles.phoneNo}>
                    <Text>{contacts.phoneNo}</Text>
                </View>
            </View>
        </MContainer>
    )
}

export default ContactDetail;

const styles = StyleSheet.create({
    phoneNo : {
        flex: 1 ,
        alignItems: 'center',
    }
})


