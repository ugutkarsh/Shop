import { HStack, Icon, IconButton } from "native-base";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";


const ProductsOverviewScreen = (props) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <HStack bg="violet.800" px="1" py="4" justifyContent="space-between" alignItems="center">
                <HStack alignItems="center">
                    <IconButton icon={<Icon size="md" as={MaterialIcons} name="menu" color="white" />} />
                    <Text color="white" fontSize="30" fontWeight="bold">
                        ProductOverviewScreen
                    </Text>
                </HStack>
            </HStack>
            {/*  <FlatList> */}
            <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
                <Text style={{ color: '#000', textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Hello! This is product overview Screen.</Text>
            </View>
            {/*  </FlatList> */}
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({});

export default ProductsOverviewScreen;

