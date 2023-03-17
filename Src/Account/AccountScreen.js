import React from "react";
import { View, Text, StyleSheet } from "react-native";


const AccountScreen= (props) => {
    return (
       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }
        }>
            <Button
                onPress={() => navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        </View>                                     
    );
};
const styles = StyleSheet.create({});

export default AccountScreen;