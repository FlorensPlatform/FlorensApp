import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Spinner from 'react-native-loading-spinner-overlay';
import Icon from 'react-native-vector-icons/FontAwesome';

const DesNecesidades = ({route}) => {
	const navigation = useNavigation();
  	return (
		<View style={styles.container}>
			<Spinner />
			<Text style={styles.textoBien} >Necesidades de Virginia Henderson</Text>
			<View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
				<View>
					<TouchableOpacity
					style={styles.colorBtn}>
						<Text style={styles.colorTxtBtn}>1. Respirar Normalmente</Text>
					</TouchableOpacity>
					
				</View>
				<Image
					source={require('../../img/Nanda.png')}
					style={{ width: 50, height: 60 }}
				/>
				<Text style={styles.txtArea} >Capacidad de la persona para mantener el intercambio gaseoso con niveles suficientes de oxigenación</Text>
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
						<Text style={styles.colorTxtBtn}>Cuidados A Aplica</Text>
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

export default DesNecesidades;
