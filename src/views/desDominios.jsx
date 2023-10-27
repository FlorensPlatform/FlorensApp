import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Spinner from 'react-native-loading-spinner-overlay';
import Icon from 'react-native-vector-icons/FontAwesome';

const DesDominios = () => {
	const navigation = useNavigation();
	return (
	  <View style={styles.container}>
		  <Spinner />
		  <Text style={styles.textoBien} >Dominios de NANDA</Text>
		  <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
			  <View>
				  <TouchableOpacity
				  style={styles.colorBtn}>
					  <Text style={styles.colorTxtBtn}>  1. Promocion de Salud</Text>
				  </TouchableOpacity>
				  
			  </View>
			  <Image
				  source={require('../../img/Nanda.png')}
				  style={{ width: 50, height: 60 }}
			  />
			  <Text style={styles.txtArea} >Se refiere a las acciones y prácticas que fomentan el bienestar y la prevención de enfermedades y lesiones en las personas, las familias y las comunidades</Text>
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
	  </View>);
};

const styles = StyleSheet.create({
  container: {
	  flex: 1,
	  backgroundColor: '#FFFFFF',
	  alignItems: 'center',
	  justifyContent: 'center',
  },
  textoBien: {
	  color: '#003F72',
	  fontSize: 15,
	  textAlign: 'center',
	  fontWeight: 'bold'
  },
  colorTxtBtn: {
	  color: '#FFFFFF',
	  fontSize: 14,
	  textAlign: 'center',
	  width: 150,
  },
  colorBtn: {
	  marginTop: 40,
	borderColor: '#FF9116',
	backgroundColor: '#FF9116',
	padding: 15,
	marginLeft: 50,
	marginRight: 50,
	borderRadius: 80,
  },
});

export default DesDominios;
