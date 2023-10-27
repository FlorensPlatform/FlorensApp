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
			  <View>
				  <TouchableOpacity
				  style={styles.colorBtn}>
					  <Text style={styles.colorTxtBtn}>1. Percepción – manejo de salud</Text>
				  </TouchableOpacity>
				  
			  </View>
			  <Image
				  source={require('../../img/Nanda.png')}
				  style={{ width: 50, height: 60 }}
			  />
			  <Text style={styles.txtArea} >Se refiere a la percepción que tiene el individuo de su estado de salud y su capacidad para controlar y manejar su propia salud</Text>
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
        				
export default DesPatrones;
        				