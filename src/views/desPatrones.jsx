import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Spinner from 'react-native-loading-spinner-overlay';
import axios from 'axios';
import { BASE_URL } from '../config';
import styles from "../styles/stylesPatrones";
import { AuthContext } from "../../context/AuthContext";
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
	const {checkUserAuthentication} = useContext(AuthContext);
	useEffect(() => {
		checkUserAuthentication();
		const intervalId = setInterval(() => {
			checkUserAuthentication();
		}, 2000); 
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
		Object.entries(data[0]?.["Alteraciones del Patron"]).forEach(([afeccion, descripcion]) => {
            resultValorar = resultValorar+`${afeccion}: ${descripcion}`+"\n";
          });
		setResultPatron(resultValorar);
		setMostrarInformacionPatron(!mostrarInformacionPatron);
	};
	transformarAfecciones= () =>{

		
	}
	return (
	  	<View style={styles.containerDev}>
			<ScrollView>
				<Text style={styles.textoBien} >Patrones de Marjory Gordon</Text>
				<View style={{ flexDirection: 'row', justifyContent: 'center', padding: 5 }}>
				<Image
						source={require('../../img/Rectangulo.png')}
						style={styles.Image}
					/>
					<Image style={styles.anotherImageDev} source={{ uri: data[0]?.Img }}>
					</Image>
					<Text style={styles.colorTxtLogo}>{data[0]?.Titulo}</Text>
				</View>
				<Text style={styles.txtArea} >{data[0]?.Definicion}</Text>
				<View style={styles.Contenedor}>
					<TouchableOpacity
						style={styles.colorBtn} onPress={mostrarOcultarValorar}>
							<Text style={styles.colorTxtBtn}>¿Que valora?</Text>
							<View>
								{
									mostrarInformacionValorar && (
										transformarAfecciones(),
										<>
										<Text style={{ fontSize: 17, marginVertical: 15,color: '#003F72',fontWeight: 'bold',textAlign:"justify",}}>{resultValorar}</Text>
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
										<Text style={{ fontSize: 17, marginVertical: 15,color: '#003F72',fontWeight: 'bold',textAlign:"justify",}}>{resultPatron}</Text>
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
										<Text style={{ fontSize: 17, marginVertical: 15,color: '#003F72',fontWeight: 'bold',textAlign:"justify",}}>{resultResultados}</Text>
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
			</ScrollView>
	  </View>
	);
};

        				
export default DesPatrones;
        				