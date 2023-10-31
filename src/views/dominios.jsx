import react,  {useContext, useState} from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext";
import Spinner from 'react-native-loading-spinner-overlay';
import Icon from 'react-native-vector-icons/FontAwesome';
const DATA = [
    { id: '1', title: 'Salud', url:'../../img/n1.png'},
    { id: '2', title: 'Nutrición',url:'../../img/n1.png' },
    { id: '3', title: 'Eliminación',url:'../../img/n1.png' },
    { id: '4', title: 'Reposo',url:'../../img/n1.png' },
    { id: '5', title: 'Cognición',url:'../../img/n1.png' },
    { id: '6', title: 'Autopercepcion' ,url:'../../img/n1.png'},
    { id: '7', title: 'Relaciones',url:'../../img/n1.png' },
    { id: '8', title: 'Sexualidad',url:'../../img/n1.png' },
    { id: '9', title: 'Tolerancia',url:'../../img/n1.png' },
    { id: '10', title: 'Vitalidad',url:'../../img/n1.png' },
    { id: '11', title: 'Seguridad',url:'../../img/n1.png' },
	{ id: '12', title: 'Confort',url:'../../img/n1.png' },
	{ id: '13', title: 'Desarrollo',url:'../../img/n1.png' }
    // Agrega más elementos según sea necesario
  ];
  const Item = ({ key, title, navigation }) => (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('DesDominios')}>
        <Text style={styles.title}>{key}</Text>
        <Image style={styles.Image}
				source={require('../../img/n1.png')}></Image>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
const Dominios = ({router}) => {
    const navigation = useNavigation();
    const renderItems = () => {
        return DATA.map(item => (
          <Item key={item.id} title={item.title} navigation={navigation} />
        ));
      };
  	return (
        <SafeAreaView style={styles.container}>
			<Spinner />
            <Text style={styles.textoBien} >Dominios de NANDA</Text>
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
			<View style={styles.row}>
                {renderItems().slice(12, 15)}
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

export default Dominios;
