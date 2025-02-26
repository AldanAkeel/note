import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import NoteListScreen from "../screens/NoteListScreen";
import AddNoteScreen from "../screens/AddNoteScreen";

const Stack = createStackNavigator();

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Notelist">
                <Stack.Screen
                    name="NoteList"
                    component={NoteListScreen}
                    options={{
                        headershown: false
                    }}
                />
                <Stack.Screen
                name="CreateNote"
                component={AddNoteScreen}
                options={{
                    headerShown: false
                }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default MainNavigator;