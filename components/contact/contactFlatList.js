import React from "react"
import { FlatList, View } from "react-native"
import ContactRow from "./contactRow"




const ContactFlatList = props => {
    const { data } = props
    const listItems = (row) => {
        const { item, index } = row;
        return (<ContactRow item={item} {...props} />)

    }
    return (
        <FlatList
            {...props}
            style={{  width: '100%', marginTop: 20,flex:1  }}
            data={data}
            renderItem={listItems}
            keyExtractor={(_, index) => index.toString()}

        />
    )
}

export default ContactFlatList;