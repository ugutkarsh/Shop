import { HStack } from "native-base";
import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const MainScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <HStack bg="violet.800" px="1" py="4" justifyContent="center" alignItems="center">
                <Text color="white" fontSize="40" fontWeight="bold">
                    SHOPPER
                </Text>
            </HStack>
            <View style={styles.main}>
                <Text style={{ color: '#fff', fontSize: 30, fontWeight: 'bold', textDecorationLine: 'underline', textAlign: 'center' }}>SHOPPER</Text>
                <View style={styles.container}>
                    <TouchableOpacity
                        style={styles.Button}
                        onPress={() => navigation.navigate('Login')}>
                        <Text style={{ color: "#fff", textAlign: 'center' }}>LOGIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.Button}
                        onPress={() => navigation.navigate('Register')}>
                        <Text style={{ color: "#fff", textAlign: 'center' }}>REGISTER</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'purple',
        justifyContent: 'center',
        paddingHorizontal: 10,
        alignContent: 'center',
    },
    Button: {
        backgroundColor: 'purple',
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
    },
    container: {
        height: 200,
        alignContent: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: 'white',
        elevation: 10,
        borderRadius: 20,
        padding: 10,
        marginVertical: 50,
    }
});
export default MainScreen;