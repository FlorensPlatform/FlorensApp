import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';
import { useNavigation } from "@react-navigation/native";
import { BASE_URL } from '../config';
import Spinner from 'react-native-loading-spinner-overlay';

const DesNecesidades = ({route}) => {
	const [data, setData] = useState([]);
	const navigation = useNavigation();
	const {Document} = route.params;

	useEffect(() => {
		fetchData();
	  }, []);
	
	  const fetchData = async () => {
		try {
			console.log(Document);
		  const response = await axios.post(`${BASE_URL}/DocNecesidadesInfo`, {
			Document
		  });
		  setData(response.data);
		  console.log(response.data)
		} catch (error) {
		  console.error('Error al obtener datos de la API:', error);
		} finally {
		  setIsLoading(false);
		}
	  };
  	return (
		<View style={styles.container}>
			<Spinner />
			<Text style={styles.textoBien} >Necesidades de Virginia Henderson</Text>
			<View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
				<Image
					source={require('../../img/Nanda.png')}
					style={{ width: 60, height: 70 }}
				/>
				<Text style={styles.colorTxtLogo}>{data.Title}</Text>
			</View>
			<Text style={styles.txtArea} >Hola Mundo</Text>
			<View style={styles.Contenedor}>
				<TouchableOpacity
					style={styles.colorBtn}>
						<Text style={styles.colorTxtBtn}>Objetivo</Text>
					</TouchableOpacity>
				<TouchableOpacity
					style={styles.colorBtn}>
						<Text style={styles.colorTxtBtn}>Aspectos a Valora</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.colorBtn}>
						<Text style={styles.colorTxtBtn}>Cuidados A Aplicar</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.colorBtn}>
						<Text style={styles.colorTxtBtn}>Bibliografia Relacionada</Text>
				</TouchableOpacity>
			</View>
		</View>);
};

const styles = StyleSheet.create({
	Contenedor:{
		marginRight:100,
		marginLeft:-80
	},
  container: {
	backgroundColor: "#FFFFFF",
	alignItems: 'center',
	justifyContent: 'center',
  },
  txtArea: {
	  color: '#003F72',
	  fontSize: 13,
	  textAlign: 'left',
	  fontWeight: 'bold',
	  marginLeft: 15,
	  marginRight:10
  },
  colorTxtBtn: {
	  color: '#003F72',
	  fontSize: 14,
	  textAlign: 'center',
	  width: 150,
	  fontWeight: 'bold',
  },
  colorBtn: {
	marginTop: 40,
	borderColor: '#EAAB00',
	backgroundColor: '#EAAB00',
	padding: 10,
	marginLeft: 90,
	borderRadius: 10,
	paddingLeft:40,
	paddingRight:40
  },
  colorTxtLogo: {
	color: '#003F72',
	fontSize: 15,
	textAlign: 'center',
	fontWeight: 'bold',
	marginTop:20,
	marginLeft: 40
  },
  textoBien:{
	color: '#003F72',
	fontSize: 15,
	textAlign: 'center',
	fontWeight: 'bold',
	padding: 20
  }
});

export default DesNecesidades;
