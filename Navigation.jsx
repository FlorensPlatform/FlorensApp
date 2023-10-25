import react, { useContext } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from './RootNavigation';
import { AuthContext } from "./context/AuthContext";

//views
import LoginScreen from "./src/views/login";

const Stack = createNativeStackNavigator();

const Navigation = () => {
const {isLoading, login, userInfo} = useContext(AuthContext);

  return (
    <NavigationContainer ref={navigationRef}>      
      <Stack.Navigator 
        initialRouteName="LoginScreen" 
        screenOptions={{
          headerMode: 'screen',
          headerTintColor: 'black',
          headerStyle: { backgroundColor: '#ff9116' },
        }}
      >
        <Stack.Screen 
          name="LoginScreen"
          component={LoginScreen} 
          options={{headerShown:false}} 
        />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;