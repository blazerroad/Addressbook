import React from "react";
import { SafeAreaView, KeyboardAvoidingView, TouchableWithoutFeedback } from "react-native";
import { appStyle } from "../constans/appStyle"



export const MContainer = props => {
    return (
        <SafeAreaView style={{ ...props.style, ...appStyle.centerContainer }}>
            {props.children}
        </SafeAreaView>
    )
}

