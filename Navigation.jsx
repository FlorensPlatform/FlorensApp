import react, { useContext } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from './RootNavigation';
import { AuthContext } from "./context/AuthContext";

//views
import LoginScreen from "./src/views/login";
import RegisScreen from "./src/views/registro";
import ContenidoScreen from "./src/views/contenido";
import NecesidadesScreen from "./src/views/necesidades";
import PatronesScreen from "./src/views/patrones";
import DominiosScreen from "./src/views/dominios";
import DesNecesidadesScreen from "./src/views/desNecesidades";
import DesDominioScreen from "./src/views/desDominios";
import DesPatronesScreen from "./src/views/desPatrones";
const Stack = createNativeStackNavigator();

const Navigation = () => {
const {isLoading, login, userInfo} = useContext(AuthContext);

  return (
    <NavigationContainer ref={navigationRef}>      
      <Stack.Navigator 
        initialRouteName="DesPatronesScreen" 
        screenOptions={{
          headerMode: 'screen',
          headerTintColor: 'White',
          headerStyle: { backgroundColor: '#003F72' },
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Registro" component={RegisScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Contenido" component={ContenidoScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Necesidades" component={NecesidadesScreen} />
        <Stack.Screen name="Patrones" component={PatronesScreen} />
        <Stack.Screen name="Dominios" component={DominiosScreen} />
        <Stack.Screen name="DesNecesidades" component={DesNecesidadesScreen} />
        <Stack.Screen name="DesDominios" component={DesDominioScreen} />
        <Stack.Screen name="DesPatrones" component={DesPatronesScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;