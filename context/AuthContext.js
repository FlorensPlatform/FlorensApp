import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';
import { Alert} from 'react-native';
import { BASE_URL } from '../src/config';
import { NavigationContainer, useNavigation } from "@react-navigation/native"; 

import { Navigation } from "../Navigation";
import * as RootNavigation from '../RootNavigation';



export const AuthContext = createContext();

function useCounter() {
    // Bien: nivel superior en un componente de función
  //  const navigation = useNavigation();
   //const [navigation] = useNavigation({});
   return console.log("mi token");
 }
 function createTwoButtonAlert (){
    Alert.alert(
      "Campos Inválidos",
      "Los credenciales están vacíos o son incorrectos",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
  )};

  function createTwoButtonAlertRegistro (){
    Alert.alert(
      "Campos Inválidos",
      "Los credenciales están vacíos o son incorrectos",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
  )};

export const AuthProvider = ({children}) => {
    
    const [userInfo, setUserInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const navigation = props => (useNavigation());
    // Registro
    const register = (nombre, pais, ciudad, email, universidad, password) =>{
        setIsLoading(true);
        axios.post(`${BASE_URL}/Registro`,{
            nombre, pais, ciudad, email, universidad, password, rol:"usuario"
        }).then(res => {
            let userInfo = res.data;
            setUserInfo(userInfo);
            const usuario = AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            setIsLoading(false);
            if (usuario!=null){
                console.log("mi usuario", usuario);
                RootNavigation.navigate('Login');
            }
        }).catch(e =>{
            createTwoButtonAlertRegistro();
            console.log(`error en registro ${e}`);
            setIsLoading(false);
        })
    };

    // Login
    const login = (email, password) =>{
        setIsLoading(true);
        axios.post(`${BASE_URL}/verificar_usuario`,{
            email,
            password
        }).then(res => {
            let userInfo = res.data;
            console.log(userInfo.status);
            setUserInfo(userInfo);
            const token = AsyncStorage.setItem('userInfo', JSON.stringify(userInfo))
            if (userInfo.status){
                console.log("mi token", token);
                //navigation.navigate('Cuenta creada');Cuenta creada
                RootNavigation.navigate('Contenido');
            }
            setIsLoading(false);

        }).catch(e => {
            
            createTwoButtonAlert();
            console.log(`login error ${e}`);
            setIsLoading(false);
        });
    }


    //
    return(
        <AuthContext.Provider 
            value={{
                isLoading,
                userInfo,
                login,
                register
            }}>
            {children}
        </AuthContext.Provider>
        );
}