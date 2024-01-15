import React,  {useContext, useState, useEffect} from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, SafeAreaView,ScrollView  } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { BASE_URL } from '../config';
import Spinner from 'react-native-loading-spinner-overlay';
import axios from 'axios';
import styles from "../styles/stylesPatrones";
import { AuthContext } from "../../context/AuthContext";
const Patrones = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {checkUserAuthentication} = useContext(AuthContext);
  useEffect(() => {
    checkUserAuthentication();
    checkUserAuthentication();
		const intervalId = setInterval(() => {
			checkUserAuthentication();
		}, 2000); 
    fetchData();
    return () => clearInterval(intervalId);
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/PatronesLista`);
      setData(response.data);
    } catch (error) {
      console.error('Error al obtener datos de la API:', error);
    } finally {
      setIsLoading(false);
    }
  };
  const navigation = useNavigation();
  const renderItems = () => {
    return Object.keys(data).map(item => (
      <TouchableOpacity style={styles.item} key={item.id} onPress={() => navigation.navigate('DesPatrones',{Document:data[item].Title, Id:data[item].Id})}>
        <Image style={styles.Image} source={require('../../img/n1.png')}></Image>
        <Image style={styles.anotherImage} source={{ uri: data[item].Img }}>
        </Image>
        <Text style={styles.titleNumber}>{item}</Text>
        <Text style={styles.title}>{data[item].Title}</Text>
      </TouchableOpacity>
    ));
  };

  return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
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
        </ScrollView>
      </SafeAreaView>
  );
};


export default Patrones;
