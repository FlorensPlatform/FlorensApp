import react, { useContext } from "react";
import { Image, View, Text,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
const Tab = createBottomTabNavigator();
const Navigation = () => {
const {isLoading, login, userInfo} = useContext(AuthContext);

  return (
    <NavigationContainer ref={navigationRef}>      
      <Stack.Navigator 
        initialRouteName="Login" 
        screenOptions={{
          headerMode: 'screen',
          headerTintColor: 'White',
          headerStyle: { backgroundColor: '#003F72' },
          headerTitle: () => <CustomHeader />
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Registro" component={RegisScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Contenido" component={ContenidoScreen} options={{headerShown:false}}/>

        <Stack.Screen name="Necesidades" component={TabNavigator} />
        <Stack.Screen name="Patrones" component={TabNavigator} />
        <Stack.Screen name="Dominios" component={TabNavigator} />
        
        <Stack.Screen name="DesNecesidades" component={DesNecesidadesScreen} />
        <Stack.Screen name="DesDominios" component={DesDominioScreen} />
        <Stack.Screen name="DesPatrones" component={DesPatronesScreen} />
        
      </Stack.Navigator>
      
    </NavigationContainer>
    
  );
}
function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: { backgroundColor: '#003F72', flex:0.1 },
      tabBarActiveTintColor: '#003F72' ,
      tabBarInactiveTintColor: "#FFFFFF",
      tabBarActiveBackgroundColor:'#EAAB00',
      headerTitle: () => <CustomHeader />
    }}>
      <Tab.Screen name="Necesidades" component={NecesidadesScreen} options={{headerShown:false, 
        tabBarIcon: ({ focused, color, size }) => (
          <Image
            source={focused ? require('./img/nece_1.png') : require('./img/nece.png')}
            style={{ width: 50, height: 50 }}
          />
        ),}}/>
        <Tab.Screen name="Patrones" component={PatronesScreen} options={{headerShown:false,
        tabBarIcon: ({ focused, color, size }) => (
          <Image
            source={focused ? require('./img/patrones_1.png') : require('./img/patrones.png')}
            style={{ width: 50, height: 50 }}
          />
        ),}}/>
        <Tab.Screen name="Dominios" component={DominiosScreen} options={{headerShown:false, 
        tabBarIcon: ({ focused, color, size }) => (
          <Image
            source={focused ? require('./img/dominios_1.png') : require('./img/dominios.png')}
            style={{ width: 50, height: 50 }}
          />
        ),}}/>
        <Tab.Screen name="Tutor" component={DominiosScreen} options={{headerShown:false, 
        tabBarIcon: ({ focused, color, size }) => (
          <Image
            source={focused ? require('./img/tutor_logo_1.png') : require('./img/tutor_logo.png')}
            style={{ width: 50, height: 50 }}
          />
        ),}}/>
    </Tab.Navigator>
  );
}
const CustomHeader = () => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image
        source={require('./img/UTPL.png')}
        style={{ width: 80, height: 30, marginRight: 10 }}
      />
      <Text style={{ fontSize: 20, fontWeight: 'bold',color:"#FFFFFF", paddingLeft:60 }}>Florens</Text>

      <TouchableOpacity style={{  paddingLeft:130}}>
          <Text style={{ fontSize: 15, fontWeight: 'bold',color:"#EAAB00" }}>Salir</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Navigation;
