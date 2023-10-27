import react,  {useContext, useState} from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Modal } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext";
import {ModalPicker} from "../../Componets/ModelPicker"
//import { style } from "../styles/styles";
import Spinner from 'react-native-loading-spinner-overlay';
import Icon from 'react-native-vector-icons/FontAwesome';
const Login = ({route}) => {
    const navigation = useNavigation();
    //const styles = style();
    const [chooseData, setchoosedata] = useState("Idioma...");
    const [isModalVisible, setisModalVisible] = useState(false);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const {isLoading, login} = useContext(AuthContext);

    const changeModalVisibility = (bool) =>{
        setisModalVisible(bool)
    }
    const setData = (option) => {
        setchoosedata(option)
    }
  	return (
        <View style={styles.container}>
            <Spinner />
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
                    <Image
                        source={require('../../img/UTPL.png')}
                        style={{ width: 120, height: 50 }}
                    />
                    <Image
                        source={require('../../img/logo.png')}
                        style={{ width: 50, height: 60 }}
                    />
                </View>
                <Image style={styles.image}
                    source={require('../../img/user.png')}></Image>
                <Text style={styles.textoBien} >Bienvenido de nuevo</Text>
                <Text style={styles.TextoIngr} >Ingresa para continuar</Text>
                <View style={styles.txtInput}>
                    <View style={styles.IconText}>
                        <Icon name="mail" size={20} color="#EAAB00" />
                        <Text style={styles.TextoUsuario} >Usuario</Text>
                    </View>
                    <TextInput  
                        value={username}
                        placeholder="Ingrese su Usuario"
                        onChangeText={text => setUsername(text)}
                        />
                </View>
                <View style={styles.txtInput}>
                    <View style={styles.IconText}>
                        <Icon name="password" size={20} color="#EAAB00" />
                        <Text style={styles.TextoUsuario} >Contraseña</Text>
                    </View>
                    <TextInput secureTextEntry={true} 
                        value={password}
                        placeholder="Ingrese su contraseña"
                        onChangeText={text => setPassword(text)}
                        />
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Contenido')}
                    style={styles.colorBtn}>
                <Text style={styles.colorTxtBtn}>Ingresar</Text>
                </TouchableOpacity>
                <Text> </Text>
                <View style={styles.IconText}>
                    <Text>No tienes cuenta,</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
                        <Text style={styles.colorTxtBtnRegistro}>Crea una cuenta nueva</Text>
                    </TouchableOpacity>
                </View>
          
          
          <TouchableOpacity style={styles.btnStar} 
                onPress = {() => changeModalVisibility(true)} >
                <Text style={styles.textItem}>
                    {chooseData}
                </Text>
            </TouchableOpacity>
            <Modal
                transparent = {true}
                animationType = "fade"
                visible = {isModalVisible}
                nRequestClose={()=> changeModalVisibility(false)}
            >
            <ModalPicker
                changeModalVisibility={changeModalVisibility}
                setData = {setData}
            />
            </Modal> 
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      alignItems: 'center',
      justifyContent: 'center',
    },
    image:{
      width: 300, 
      height: 200, 
      justifyContent: 'center',
      resizeMode: 'contain',
    },
    textoBien: {
        color: '#003F72',
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    TextoIngr: {
        color: '#003F72',
        textAlign: 'center',
    },
    IconText:{
        flexDirection: 'row', alignItems: 'center',
    },
    TextoUsuario:{
        color: '#EAAB00',
        fontSize: 15,
        fontWeight: 'bold'
    },
    txtInput: {
        color: '#002233',
        fontSize: 16,
        marginTop: 40,
        paddingLeft: 20,
        borderColor: '#002233',
        paddingRight: 18,
        borderRadius: 10,
        backgroundColor: '#F9F9F9',
        height: 60,
        borderWidth: 1,
      }, 
      colorBtn: {
        marginTop: 40,
        borderColor: '#003F72',
        backgroundColor: '#003F72',
        padding: 20,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 10,
    },
    colorTxtBtn: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold'
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
    btnStar: {
        marginTop: 20,
        borderColor: '#003F72',
        padding: 5,
        marginLeft: 100,
        marginRight: 100,
        borderRadius: 10,
        borderWidth:1
    },
    textItem:{
        fontSize:20,
        color: '#003F72'
    },
  });

export default Login;
