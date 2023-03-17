import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainScreen from './Src/SplashScreen/MainScreen';
import SplashScreen from './Src/SplashScreen/SplashScreen';
import ProductOverviewScreen from './Src/ProductOverviewScreen/ProductOvervireScreen';
import Login from './Src/Login/login';
import Register from './Src/register/Register';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    
    <NativeBaseProvider>
      <SafeAreaProvider>
        <NativeBaseProvider>
          <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName={"SplashScreen"}>
              <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
              <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
              <Stack.Screen name="Login" component={Login} options={{ headerShown: false}} />
              <Stack.Screen name="Register" component={Register} options={{ headerShown: false}} />
              <Stack.Screen name="ProductOverviewScreen" component={ProductOverviewScreen} options={{ headerShown: false}} />
            </Stack.Navigator>
          </NavigationContainer>
        </NativeBaseProvider>
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
};

export default App;