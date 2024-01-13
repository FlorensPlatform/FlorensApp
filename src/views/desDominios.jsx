import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Spinner from 'react-native-loading-spinner-overlay';
import { AuthContext } from "../../context/AuthContext";

const DesDominios = () => {
	const navigation = useNavigation();
	const {checkUserAuthentication} = useContext(AuthContext);
	useEffect(() => {
		checkUserAuthentication();
		const intervalId = setInterval(() => {
			checkUserAuthentication();
		  }, 2000); 
		fetchData();
	}, []);
	return (
	  <View style={styles.container}>
		  <Spinner />
		  <Text style={styles.textoBien} >Dominios de NANDA</Text>
		  <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
				<Image
					source={require('../../img/Nanda.png')}
					style={{ width: 60, height: 70 }}
				/>
				<Text style={styles.colorTxtLogo}>1. Promocion de Salud</Text>
			</View>
			  <Text style={styles.txtArea} >Se refiere a las acciones y prácticas que fomentan el bienestar y la prevención de enfermedades y lesiones en las personas, las familias y las comunidades</Text>
			<View style={styles.Contenedor}>
			<TouchableOpacity
				  style={styles.colorBtn}>
					  <Text style={styles.colorTxtBtn}>Clases del dominio</Text>
				  </TouchableOpacity>
			  <TouchableOpacity
				  style={styles.colorBtn}>
					  <Text style={styles.colorTxtBtn}>Clase 1: Toma de conciencia de salud</Text>
			  </TouchableOpacity>
			  <TouchableOpacity
				  style={styles.colorBtn}>
					  <Text style={styles.colorTxtBtn}>Deficit  de actividades recreativas</Text>
			  </TouchableOpacity>
			  <TouchableOpacity
				  style={styles.colorBtn}>
					  <Text style={styles.colorTxtBtn}>Caracteristicas</Text>
			  </TouchableOpacity>
			  <TouchableOpacity
				  style={styles.colorBtn}>
					  <Text style={styles.colorTxtBtn}>Diagnosticos alternativos sugeridos</Text>
			  </TouchableOpacity>
			  <TouchableOpacity
				  style={styles.colorBtn}>
					  <Text style={styles.colorTxtBtn}>Resultados NOC</Text>
			  </TouchableOpacity>
			</View>
	  </View>
	);
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

export default DesDominios;
