import react,  {useContext, useState} from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext";
import Spinner from 'react-native-loading-spinner-overlay';

const Contenido = ({route}) => {
  	
  	return (
		<View style={styles.container}>
			<Spinner />
			<Image style={styles.Image}
				source={require('../../img/UTPL.png')}></Image>
			<View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
				<Image
					source={require('../../img/logo.png')}
					style={{ width: 60, height: 70 }}
				/>
				<Text style={styles.colorTxtLogo}>Bienvenido a Florens</Text>
			</View>
			<Text style={styles.textoBien} >Contenido</Text>
			<View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
				<View>
					<TouchableOpacity
					style={styles.colorBtn}>
						<Text style={styles.colorTxtBtn}>Necesidades Básicas</Text>
					</TouchableOpacity>
					
				</View>
				<Image
					source={require('../../img/Henderson.png')}
					style={{ width: 50, height: 60 }}
				/>
			</View>
			<View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
				<View>
					<TouchableOpacity
					style={styles.colorBtn}>
						<Text style={styles.colorTxtBtn}>Patrones Funcionales</Text>
					</TouchableOpacity>
					
				</View>
				<Image
					source={require('../../img/Gordon.png')}
					style={{ width: 50, height: 60 }}
				/>
			</View>
			<View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
				<View>
					<TouchableOpacity
					style={styles.colorBtn}>
						<Text style={styles.colorTxtBtn}>Dominios de NANDA</Text>
					</TouchableOpacity>
					
				</View>
				<Image
					source={require('../../img/Nanda.png')}
					style={{ width: 50, height: 60 }}
				/>
			</View>
			<View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
				<View>
					<TouchableOpacity
					style={styles.colorBtn}>
						<Text style={styles.colorTxtBtn}>Tutor Automatizado</Text>
					</TouchableOpacity>
					
				</View>
				<Image
					source={require('../../img/tutor.png')}
					style={{ width: 50, height: 60 }}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		alignItems: 'center',
		justifyContent: 'center',
	  },
	  containerPrin: {
		
		backgroundColor: "white",
		alignItems: 'rigth',
	  },
	  Image:{
		width: 120, height: 50, 
		justifyContent: 'right',
		resizeMode: 'contain',
		right: 100,
		marginLeft:30
	  },
	  textoBien: {
		  color: '#003F72',
		  fontSize: 25,
		  textAlign: 'center',
		  fontWeight: 'bold'
	  },
	  colorBtn: {
        marginTop: 15,
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
	colorTxtLogo: {
        color: '#003F72',
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold'
      },

});

export default Contenido;
