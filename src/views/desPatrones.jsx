import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Spinner from 'react-native-loading-spinner-overlay';
import Icon from 'react-native-vector-icons/FontAwesome';

const DesPatrones = () => {
	const navigation = useNavigation();
	return (
	  <View style={styles.container}>
		  <Spinner />
		  <Text style={styles.textoBien} >Patrones de Marjory Gordon</Text>
		  	<View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
				<Image
					source={require('../../img/Nanda.png')}
					style={{ width: 60, height: 70 }}
				/>
				<Text style={styles.colorTxtLogo}>1. Percepción – manejo de salud</Text>
			</View>
			  <Text style={styles.txtArea} >Se refiere a la percepción que tiene el individuo de su estado de salud y su capacidad para controlar y manejar su propia salud</Text>
			  <View style={styles.Contenedor}>
				<TouchableOpacity
					style={styles.colorBtn}>
						<Text style={styles.colorTxtBtn}>¿Que valora?</Text>
					</TouchableOpacity>
				<TouchableOpacity
					style={styles.colorBtn}>
						<Text style={styles.colorTxtBtn}>¿Como se valora?</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.colorBtn}>
						<Text style={styles.colorTxtBtn}>Diagnostico de Enfermeria</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.colorBtn}>
						<Text style={styles.colorTxtBtn}>Bibliografia Relacionada</Text>
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
        				
export default DesPatrones;
        				