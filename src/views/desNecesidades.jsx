import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import axios from 'axios';
import { useNavigation } from "@react-navigation/native";
import { BASE_URL } from '../config';
import Spinner from 'react-native-loading-spinner-overlay';
import styles from "../styles/stylesNecesidades"
import { AuthContext } from "../../context/AuthContext";
const DesNecesidades = ({route}) => {
	const [data, setData] = useState([]);
	const [datosBibliografia, setDatosBibliografia] = useState([]);
	const navigation = useNavigation();
	const {Document} = route.params;
	const {Id} = route.params;
	const [mostrarInformacion, setMostrarInformacion] = useState(false);
	const [mostrarInformacionAfecciones, setMostrarInformacionAfecciones] = useState(false);
	const [mostrarInformacionCuidados, setMostrarInformacionCuidados] = useState(false);
	const [mostrarInformacionBiblio, setMostrarInformacionBiblio] = useState(false);
	const [resultAfecciones, setResultAfecciones] = useState("");
	const [resultadosCuidados, setResultCuidados] = useState("");
	const [resultadosBiblio, setResultBiblio] = useState("");
	const {checkUserAuthentication} = useContext(AuthContext);
	useEffect(() => {
		checkUserAuthentication();
		const intervalId = setInterval(() => {
			checkUserAuthentication();
		}, 2000); 
		fetchData();
		ObtenerBibliografia();
		return () => clearInterval(intervalId);
	}, []);
	
	  const fetchData = async () => {
		try {
			console.log(Document+Id);
		  const response = await axios.post(`${BASE_URL}/DocNecesidadesInfo`, {
			Name:Document,
			Document:Id
		  });
		  setData(response.data);
		  console.log(response.data)
		} catch (error) {
		  console.error('Error al obtener datos de la API:', error);
		}
	  };
	  	const ObtenerBibliografia = async () => {
			try {
				const response = await axios.get(`${BASE_URL}/BibliografiasList/Necesidades`);
				console.log(`${BASE_URL}/BibliografiasList/Necesidades`)
				setDatosBibliografia(response.data);
				console.log(response.data)
			} catch (error) {
				console.error('Error al obtener datos de la API:', error);
			}
		};
	  const mostrarOcultarInformacion = () => {
		setMostrarInformacion(!mostrarInformacion);
	  };
	  const mostrarOcultarAfecciones = () => {
		let resultAfecciones = "";
		Object.entries(data[0]?.Afecciones).forEach(([afeccion, descripcion]) => {
            console.log(`${afeccion}: ${descripcion}`);
            resultAfecciones = resultAfecciones+`${afeccion}: ${descripcion}`+"\n";
          });
		setResultAfecciones(resultAfecciones);
		setMostrarInformacionAfecciones(!mostrarInformacionAfecciones);
	  };
	  const mostrarOcultarCuidados = () => {
		resultrCuidados = "";
        Object.entries(data[0]?.Cuidados).forEach(([afeccion, descripcion]) => {
            console.log(`${afeccion}: ${descripcion}`);
            resultrCuidados = resultrCuidados+`${afeccion}: ${descripcion}`+"\n";
          });
		setResultCuidados(resultrCuidados);
		setMostrarInformacionCuidados(!mostrarInformacionCuidados);
	  };
	  const mostrarOcultarBiblio = () => {
		let resultAfecciones = "";
		Object.entries(datosBibliografia.Bibliografias).forEach(([afeccion, descripcion]) => {
            console.log(`${afeccion}: ${descripcion}`);
            resultAfecciones = resultAfecciones+`${afeccion}: ${descripcion}`+"\n";
          });
		setResultBiblio(resultAfecciones);
		setMostrarInformacionBiblio(!mostrarInformacionBiblio);
	  };
	  transformarAfecciones= () =>{
	  }
  	return (
		<View style={styles.containerDev}>
			<ScrollView>
				<Text style={styles.textoBien} >Necesidades de Virginia Henderson</Text>
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
						style={styles.colorBtn} onPress={mostrarOcultarInformacion}>
							<Text style={styles.colorTxtBtn}>Objetivo</Text>
							<View>
								{
									mostrarInformacion && (
										<>
										<Text style={{ fontSize: 17, marginVertical: 15,color: '#003F72',fontWeight: 'bold',textAlign:"justify",}}>{data[0]?.Objetivo}</Text>
										</>
									)
								}
							</View>
						</TouchableOpacity>
					<TouchableOpacity
						style={styles.colorBtn} onPress={mostrarOcultarAfecciones}>
							<Text style={styles.colorTxtBtn}>Afecciones Derivadas</Text>
							<View>
								{
									mostrarInformacionAfecciones && (
										transformarAfecciones(),
										<>
										<Text style={{ fontSize: 17, marginVertical: 15,color: '#003F72',fontWeight: 'bold',textAlign:"justify",}}>{resultAfecciones}</Text>
										</>
									)
								}
							</View>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.colorBtn} onPress={mostrarOcultarCuidados}>
							<Text style={styles.colorTxtBtn}>Cuidados A Aplicar</Text>
							<View>
								{
									mostrarInformacionCuidados && (
										transformarAfecciones(),
										<>
										<Text style={{ fontSize: 17, marginVertical: 15,color: '#003F72',fontWeight: 'bold',textAlign:"justify",}}>{resultadosCuidados}</Text>
										</>
									)
								}
							</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={mostrarOcultarBiblio}
						style={styles.colorBtn} >
							<Text style={styles.colorTxtBtn}>Bibliografia Relacionada</Text>
							<View>
								{
									mostrarInformacionBiblio && (
										<>
										<Text style={{ fontSize: 17, marginVertical: 15,color: '#003F72',fontWeight: 'bold',textAlign:"justify",}}>{resultadosBiblio}</Text>
										</>
									)
								}
							</View>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</View>)
};


export default DesNecesidades;
