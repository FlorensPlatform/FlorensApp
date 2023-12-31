import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { BASE_URL } from '../config';
import Spinner from 'react-native-loading-spinner-overlay';
import axios from 'axios';

const Necesidades = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/NecesidadesLista`);
      setData(response.data);
    } catch (error) {
      console.error('Error al obtener datos de la API:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const navigation = useNavigation();
 //<Text style={styles.title}>{item.nombre}</Text
  const renderItems = () => {
    return Object.keys(data).map(item => (
      <TouchableOpacity style={styles.item} key={item} onPress={() => navigation.navigate('DesNecesidades',{Document:data[item].Title, Id:data[item].Id})}>
        
        <Image style={styles.Image} source={require('../../img/n1.png')}>
        </Image>
        <Image style={styles.anotherImage} source={{ uri: data[item].Img }}>
        </Image>
        <Text style={styles.titleNumber}>{item}</Text>
        <Text style={styles.title}>{data[item].Title}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Spinner visible={isLoading} />
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
      <View style={styles.row}>
        {renderItems().slice(12, 14)}
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
  Image: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
    marginRight: 10,
  },
  anotherImage: {
    width: 35, 
    height: 35, 
    resizeMode: 'cover',
    position: 'absolute',
    top: '50%',  
    left: '50%', 
    transform: [{ translateX: -16.5 }, { translateY: -30.5 }],
    borderRadius: 10, 
    
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
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
  titleNumber:{
    fontSize: 10,
    color:"#FFFFFF",
    transform: [{ translateX: -2 }, { translateY: -18.5 }],
  },
  textoBien: {
    color: '#003F72',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  
});

export default Necesidades;