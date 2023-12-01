import React,  {useContext, useState, useEffect} from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { BASE_URL } from '../config';
import Spinner from 'react-native-loading-spinner-overlay';
import axios from 'axios';

const Patrones = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
      fetchData();
    }, []);
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/DocumentsPatro`);
        setData(response.data);
      } catch (error) {
        console.error('Error al obtener datos de la API:', error);
      } finally {
        setIsLoading(false);
      }
    };
    const navigation = useNavigation();
    const renderItems = () => {
      return data.map(item => (
        <TouchableOpacity style={styles.item} key={item.id} onPress={() => navigation.navigate('DesPatrones',{Document:item.nombre})}>
          <Text style={styles.title}>{item.id}</Text>
          <Image style={styles.Image} source={require('../../img/n1.png')}></Image>
          <Text style={styles.title}>{item.id}</Text>
        </TouchableOpacity>
      ));
    };

  	return (
        <SafeAreaView style={styles.container}>
			<Spinner />
            <Text style={styles.textoBien} >Patrones Funcionales de Marjory Gordon</Text>
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
                {renderItems().slice(9, 11)}
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
export default Patrones;
