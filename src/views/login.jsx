import react,  {useContext, useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

import { ImageBackground } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext";
import Spinner from 'react-native-loading-spinner-overlay';
import {Colors  } from 'react-native/Libraries/NewAppScreen';
const LoginScreen= ({route})=>{
    const navigation = useNavigation();

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const {isLoading, login} = useContext(AuthContext);
    return(
      
        <View style={styles.container} >
          <Spinner />
          <View style={styles.PrimerCuadra} >
            <Image
              source={require('../../img/UTPL.png')}
              style={{ width: 150, height: 50 }} // Ajusta el tamaño según tus necesidades
            />
            <Image
              source={require('../../img/logo.png')}
              style={{ width: 90, height: 100 }} // Ajusta el tamaño según tus necesidades
            />
          </View>
            <View>
                <Image style={styles.image}
                    source={require('../../img/user.png')}></Image>
                <Text style={styles.LetrasBien} > Bienvenido de nuevo</Text>
                <Text style={styles.LetrasIngre} >Ingresa para continuar</Text>
                <TextInput style={styles.txtInput} 
                        value={username}
                        placeholder="Ingrese su usuario"
                        onChangeText={text => setUsername(text)}
                        />
                <TextInput secureTextEntry={true} style={styles.txtInput} 
                        value={password}
                        placeholder="Ingrese su contraseña"
                        onChangeText={text => setPassword(text)}
                        />               
                <TouchableOpacity onPress={() =>{login(username, password)}}
                    style={styles.colorBtn}>
                <Text style={styles.colorTxtBtn}>Ingresar</Text>
                </TouchableOpacity>  
                <TouchableOpacity onPress={() => navigation.navigate('Registro')}
                    style={styles.colorBtnRegistros}>
                    <Text style={styles.colorTxtBtnRegistro}>Registrarse</Text>
                </TouchableOpacity>
                
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    PrimerCuadra:{
      flexDirection: 'row', justifyContent: 'space-between', padding: 20
    },
    image:{
      width: 150, 
      height: 150,
      marginLeft: 80,
        marginRight: 80,
    },
    LetrasBien:{
      color: "#003F72",
      fontSize: 25,
      textAlign: 'center',
    },
    LetrasIngre:{
      color: "#003F72",
      textAlign: 'center',
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        flex: 1,
        position: 'absolute',
    
    },
    logo: {
        width: 200,
        height: 200, 
        //position: 'absolute',
        marginTop:30
      },
    logo2: {
        width: 500,
        height: 200, 
        position: 'absolute',
        marginTop:30
      },
      titulo:{
          color:'#FF9116',
          fontSize: 16,
          marginTop: 20,
        
      },
     
      nombresyapellidos: {
          color: '#000000',
        fontSize: 16,
        marginTop: 40,
      
        fontWeight: '600',
        paddingLeft: 20,
        borderBottomColor: '#000000',
        borderBottomWidth: 0.5,
        borderColor: '#000000',
        paddingRight: 12,
      }, 
     
      txtInput: {
        fontSize: 16,
        marginTop: 40,
        fontWeight: '600',
        padding: 10,
        borderWidth: 1,
        borderBottomColor: '#003F72',
        borderRadius: 10,
        height: 50,
      }, 
     
     
      colorBtn: {
        marginTop: 40,
        borderColor: '#003F72',
        backgroundColor: '#003F72',
        padding: 15,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        
      },
      colorBtnRegistros: {
        marginTop: 25,
      borderColor: '#F9F9F9',
      backgroundColor: '#F9F9F9',
      padding: 15,
      marginLeft: 50,
      marginRight: 50,
      borderRadius: 80,
    },
    colorTxtBtn: {
      color: '#FFFFFF',
      fontSize: 20,
      textAlign: 'center',
    },
      colorTxtBtnRegistro: {
        color: '#FF9116',
        fontSize: 14,
        textAlign: 'center',
        width: 150,
      },
     
      errorText: {
        fontSize: 14,
        color: 'red',
        marginBottom: 20,
        marginLeft: 20
      },
      modalView: {
          margin: 20,
          backgroundColor: "white",
          borderRadius: 35,
          padding: 35,
          position: 'absolute', 
          shadowColor: "#000",
          
          shadowOpacity: 0.25,
         
          elevation: 5,
          
          
        }
  });

export default LoginScreen