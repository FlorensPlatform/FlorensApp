import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Spinner from 'react-native-loading-spinner-overlay';
import axios from 'axios';
import { BASE_URL } from '../config';

const DesPatrones = ({route}) => {
	const [data, setData] = useState([]);
	const navigation = useNavigation();
	const {Document} = route.params;
	const {Id} = route.params;
	const [mostrarInformacionResultados, setMostrarInformacionResultados] = useState(false);
	const [mostrarInformacionValorar, setMostrarInformacionValorar] = useState(false);
	const [mostrarInformacionPatron, setMostrarInformacionPatron] = useState(false);
	const [resultValorar, setResultValorar] = useState("");
	const [resultResultados, setResultResultados] = useState("");
	const [resultPatron, setResultPatron] = useState("");
	useEffect(() => {
		fetchData();
	  }, []);
	
	  const fetchData = async () => {
		try {
			console.log(Document);
		  const response = await axios.post(`${BASE_URL}/DocPatronesInfo`, {
			Name:Document,
			Document:Id
		  });
		  setData(response.data);
		  console.log(response.data)
		} catch (error) {
		  console.error('Error al obtener datos de la API:', error);
		} finally {
		  setIsLoading(false);
		}
	};
	const mostrarOcultarValorar = () => {
		let resultValorar = "";
		Object.entries(data[0]?.["Que Valora"]).forEach(([afeccion, descripcion]) => {
            resultValorar = resultValorar+`${afeccion}: ${descripcion}`+"\n";
          });
		setResultValorar(resultValorar);
		setMostrarInformacionValorar(!mostrarInformacionValorar);
	};
	const mostrarOcultarResultados = () => {
		let resultValorar = "";
		Object.entries(data[0]?.["Resultados"]).forEach(([afeccion, descripcion]) => {
            resultValorar = resultValorar+`${afeccion}: ${descripcion}`+"\n";
          });
		setResultResultados(resultValorar);
		setMostrarInformacionResultados(!mostrarInformacionResultados);
	};
	const mostrarOcultarPatrones = () => {
		let resultValorar = "";
		Object.entries(data[0]?.["Alteraciones del Patrón"]).forEach(([afeccion, descripcion]) => {
            resultValorar = resultValorar+`${afeccion}: ${descripcion}`+"\n";
          });
		setResultPatron(resultValorar);
		setMostrarInformacionPatron(!mostrarInformacionPatron);
	};
	transformarAfecciones= () =>{

		
	}
	return (
	  <View style={styles.container}>
		  <Spinner />
		  <Text style={styles.textoBien} >Patrones de Marjory Gordon</Text>
		  	<View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
			  <Image
					source={require('../../img/Rectangulo.png')}
					style={styles.Image}
				/>
				<Image style={styles.anotherImage} source={{ uri: data[0]?.Img }}>
        		</Image>
				<Text style={styles.colorTxtLogo}>{data[0]?.Título}</Text>
			</View>
			  <Text style={styles.txtArea} >{data[0]?.Definición}</Text>
			  <View style={styles.Contenedor}>
				<TouchableOpacity
					style={styles.colorBtn} onPress={mostrarOcultarValorar}>
						<Text style={styles.colorTxtBtn}>¿Que valora?</Text>
						<View>
							{
								mostrarInformacionValorar && (
									transformarAfecciones(),
									<>
									<Text style={{ fontSize: 14, marginVertical: 10,color: '#003F72',fontWeight: 'bold',}}>{resultValorar}</Text>
        							</>
								)
							}
						</View>
					</TouchableOpacity>
				<TouchableOpacity
					style={styles.colorBtn} onPress={mostrarOcultarPatrones}>
						<Text style={styles.colorTxtBtn}>Alteraciones del Patrón</Text>
						<View>
							{
								mostrarInformacionPatron && (
									transformarAfecciones(),
									<>
									<Text style={{ fontSize: 14, marginVertical: 10,color: '#003F72',fontWeight: 'bold',}}>{resultPatron}</Text>
        							</>
								)
							}
						</View>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.colorBtn} onPress={mostrarOcultarResultados}>
						<Text style={styles.colorTxtBtn}>Resultados</Text>
						<View>
							{
								mostrarInformacionResultados && (
									transformarAfecciones(),
									<>
									<Text style={{ fontSize: 14, marginVertical: 10,color: '#003F72',fontWeight: 'bold',}}>{resultResultados}</Text>
        							</>
								)
							}
						</View>
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
    transform: [{ translateX: -218.5 }, { translateY: -15.5 }],
    borderRadius: 10, 
    
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
        				