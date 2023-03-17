import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { HStack, Icon, IconButton, StatusBar } from "native-base";
import { SafeAreaView } from "react-native";

const Register = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <HStack bg="violet.800" px="1" py="4" justifyContent="space-between" alignItems="center">
                <HStack alignItems="center">
                    <IconButton icon={<Icon size="md" as={MaterialIcons} name="arrow-back" color="white" />} onPress={() => navigation.goBack()} />
                    <Text color="white" fontSize="30" fontWeight="bold">
                        Registration
                    </Text>
                </HStack>
            </HStack>
            <View style={styles.main}>
                <Text style={{ color: '#fff', fontSize: 30, fontWeight: 'bold', textDecorationLine: 'underline', textAlign: 'center' }}>The Register Screen</Text>
                <View style={styles.container}>
                    <TextInput
                        style={styles.textcontainer}
                        placeholder={"Enter Name"}
                        placeholderTextColor={"#000"}
                    />
                    <TextInput
                        style={styles.textcontainer}
                        placeholder={"Enter Mobile Number"}
                        placeholderTextColor={"#000"}
                        numeric value
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.textcontainer}
                        placeholder={"Enter Email Address"}
                        placeholderTextColor={"#000"}
                    />
                    <TextInput
                        style={styles.textcontainer}
                        placeholder={"Enter Password"}
                        placeholderTextColor={"#000"}
                    />
                    <TextInput
                        style={styles.textcontainer}
                        placeholder={"Re-Enter Password"}
                        placeholderTextColor={"#000"}
                    />

                    <TouchableOpacity
                        style={styles.Button}
                        onPress={() => navigation.navigate('Login')}>
                        <Text style={{ color: "#fff", textAlign: 'center' }}>Register</Text>
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
        alignContent: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: 'white',
        elevation: 10,
        borderRadius: 20,
        padding: 10,
        marginVertical: 50,
    },
    textcontainer: {
        height: 50,
        borderColor: 'rgba(140, 20, 252,0.5)',
        borderWidth: 1,
        margin: 10,
        fontSize: 20,
        color: "#000"
    }
});
export default Register;