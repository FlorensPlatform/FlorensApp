import react, { useContext } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from './RootNavigation';
import { AuthContext } from "./context/AuthContext";

//views
import LoginScreen from "./src/views/login";
import RegisScreen from "./src/views/registro";
import ContenidoScreen from "./src/views/contenido";
const Stack = createNativeStackNavigator();

const Navigation = () => {
const {isLoading, login, userInfo} = useContext(AuthContext);

  return (
    <NavigationContainer ref={navigationRef}>      
      <Stack.Navigator 
        initialRouteName="LoginScreen" 
        screenOptions={{
          headerMode: 'screen',
          headerTintColor: 'White',
          headerStyle: { backgroundColor: '#003F72' },
        }}
      >
        <Stack.Screen 
          name="LoginScreen"
          component={LoginScreen} 
          options={{headerShown:false}} 
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registro" component={RegisScreen} />
        <Stack.Screen name="Contenido" component={ContenidoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;