import React  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { stackNavigatorAppOptions } from '../constans/stackNavigatorAppOptions';

import ContactList from '../screens/contactList/contactList'
import ContactDetail from '../screens/contactDetail/contactDetail'

const Stack = createStackNavigator();

const MainNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={stackNavigatorAppOptions} mode="modal">
                <Stack.Screen name="contactList" component={ContactList} options={{
                    headerShown: true

                }} />
                    <Stack.Screen name="contactDetail" component={ContactDetail} options={{
                    headerShown: true

                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default MainNavigation;