import react,  {useContext, useState} from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext";
import Spinner from 'react-native-loading-spinner-overlay';
import Icon from 'react-native-vector-icons/FontAwesome';
const DATA = [
    { id: '1', title: 'Respirar Normalmente', url:'../../img/n1.png'},
    { id: '2', title: 'Beber',url:'../../img/n1.png' },
    { id: '3', title: 'Eliminar',url:'../../img/n1.png' },
    { id: '4', title: 'Moverse',url:'../../img/n1.png' },
    { id: '5', title: 'Dormir',url:'../../img/n1.png' },
    { id: '6', title: 'Vestirse' ,url:'../../img/n1.png'},
    { id: '7', title: 'Temperatura',url:'../../img/n1.png' },
    { id: '8', title: 'Higiene',url:'../../img/n1.png' },
    { id: '9', title: 'Peligros',url:'../../img/n1.png' },
    { id: '10', title: 'Comunicarse',url:'../../img/n1.png' },
    { id: '11', title: 'valores',url:'../../img/n1.png' },
    { id: '12', title: 'Autorealización',url:'../../img/n1.png' },
    // Agrega más elementos según sea necesario
  ];
  const Item = ({ title, key, navigation }) => (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('DesNecesidades')}>
        <Text style={styles.title}>{key}</Text>
        <Image style={styles.Image}
				source={require('../../img/n1.png')}></Image>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
const Necesidades = ({router}) => {
    const navigation = useNavigation();
    const renderItems = () => {
        return DATA.map(item => (
          <Item key={item.id} title={item.title} navigation={navigation}  />
        ));
      };
  	return (
        <SafeAreaView style={styles.container}>
            <Spinner />
            <Text style={styles.textoBien} >Necesidades de Virginia Henderson</Text>
            <View style={styles.row}>
                {renderItems().slice(0, 3)}
            </View>
            <View style={styles.row}>
                {renderItems().slice(3, 6)}
            </View>
            <View style={styles.row}>
                {renderItems().slice(6, 9)}
            </View>
            <View style={styles.row}>
                {renderItems().slice(9, 12)}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#FFFFFF',
    },
    Image:{
        width: 60, 
        height: 60,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 16,
    },
    item: {
      backgroundColor: '#FFFFFFB3',
      padding: 5,
      justifyContent: 'center',
      alignItems: 'center',
      width: '30%',
      borderColor: '#003F72',
    },
    title: {
      fontSize: 10,
      color: '#003F72',
    },
    textoBien: {
        color: '#003F72',
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold'
    },
  });

export default Necesidades;
