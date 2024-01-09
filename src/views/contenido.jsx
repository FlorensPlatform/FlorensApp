import react,  {useContext, useState} from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext";
import Spinner from 'react-native-loading-spinner-overlay';

const Contenido = ({route}) => {
  	
	const navigation = useNavigation();
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
				<Text style={styles.colorTxtLogo}>Bienvenido a {"\n"} Florens</Text>
			</View>
			<Text style={styles.textoBien} >Contenido</Text>
			<View style={styles.Contenedor}>
				<View style={styles.BotonesContenedor}>
					<View>
						<TouchableOpacity onPress={() => navigation.navigate('Necesidades',{ screen: 'Necesidades' })}
						style={styles.colorBtn}>
							<Text style={styles.colorTxtBtn}>Necesidades Básicas</Text>
						</TouchableOpacity>
						
					</View>
					<Image
						source={require('../../img/Henderson.png')}
						style={{ width: 65, height: 60 }}
					/>
				</View>
				<View style={styles.BotonesContenedor}>
					<View>
						<TouchableOpacity onPress={() => navigation.navigate('Patrones',{ screen: 'Patrones' })}
						style={styles.colorBtn}>
							<Text style={styles.colorTxtBtn}>Patrones Funcionales</Text>
						</TouchableOpacity>
						
					</View>
					<Image
						source={require('../../img/Gordon.png')}
						style={{ width: 50, height: 60 }}
					/>
				</View>
				<View style={styles.BotonesContenedor}>
					<View>
						<TouchableOpacity onPress={() => navigation.navigate('Dominios',{ screen: 'Dominios' })}
						style={styles.colorBtn}>
							<Text style={styles.colorTxtBtn}>Dominios de NANDA</Text>
						</TouchableOpacity>
						
					</View>
					<Image
						source={require('../../img/Nanda.png')}
						style={{ width: 50, height: 60 }}
					/>
				</View>
				<View style={styles.BotonesContenedor}>
					<View>
						<TouchableOpacity onPress={() => navigation.navigate('Tutor',{ screen: 'Tutor' })}
						style={styles.colorBtn}>
							<Text style={styles.colorTxtBtn}>Tutor Automatizado</Text>
						</TouchableOpacity>
						
					</View>
					<Image
						source={require('../../img/tutor.png')}
						style={{ width: 40, height: 60}}
					/>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	Contenedor:{
		marginRight:100,
		marginLeft:-80,
		paddingTop: 20
	},
	BotonesContenedor:{
		flexDirection: 'row', justifyContent: 'space-between', padding: 15
	},
	container: {
		backgroundColor: "#FFFFFF",
		alignItems: 'center',
		justifyContent: 'center',
	  },
	  Image:{
		width: 120, height: 50, 
		justifyContent: 'right',
		resizeMode: 'contain',
		right: 100,
		marginLeft:30,
		marginTop: 20
	  },
	  textoBien: {
		  color: '#003F72',
		  fontSize: 25,
		  textAlign: 'center',
		  fontWeight: 'bold',
		  paddingTop: 30
	  },
	  colorBtn: {
        marginTop: 15,
        borderColor: '#003F72',
        backgroundColor: '#003F72',
        padding: 20,
        marginLeft: 50,
        marginRight: 5,
        borderRadius: 80,
    },
	colorTxtBtn: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
		paddingLeft:60,
		paddingRight: 20
      },
	colorTxtLogo: {
        color: '#003F72',
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
		marginTop:15
      },

});

export default Contenido;
