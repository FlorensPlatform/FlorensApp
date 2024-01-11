import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import axios from 'axios';
import { useNavigation } from "@react-navigation/native";
import { BASE_URL } from '../config';
import Spinner from 'react-native-loading-spinner-overlay';
import styles from "../styles/stylesNecesidades"

const DesNecesidades = ({route}) => {
	const [data, setData] = useState([]);
	const navigation = useNavigation();
	const {Document} = route.params;
	const {Id} = route.params;
	const [mostrarInformacion, setMostrarInformacion] = useState(false);
	const [mostrarInformacionAfecciones, setMostrarInformacionAfecciones] = useState(false);
	const [mostrarInformacionCuidados, setMostrarInformacionCuidados] = useState(false);
	const [resultAfecciones, setResultAfecciones] = useState("");
	const [resultadosCuidados, setResultCuidados] = useState("");
	useEffect(() => {
		fetchData();
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
		} finally {
		  setIsLoading(false);
		}
	  };
	  const mostrarOcultarInformacion = () => {
		setMostrarInformacion(!mostrarInformacion);
	  };
	  const mostrarOcultarAfecciones = () => {
		let resultAfecciones = "";
		Object.entries(data[0]?.["Afecciones Derivadas"]).forEach(([afeccion, descripcion]) => {
            console.log(`${afeccion}: ${descripcion}`);
            resultAfecciones = resultAfecciones+`${afeccion}: ${descripcion}`+"\n";
          });
		setResultAfecciones(resultAfecciones);
		setMostrarInformacionAfecciones(!mostrarInformacionAfecciones);
	  };
	  const mostrarOcultarCuidados = () => {
		resultrCuidados = "";
        Object.entries(data[0]?.["Cuidados por Aplicar"]).forEach(([afeccion, descripcion]) => {
            console.log(`${afeccion}: ${descripcion}`);
            resultrCuidados = resultrCuidados+`${afeccion}: ${descripcion}`+"\n";
          });
		setResultCuidados(resultrCuidados);
		setMostrarInformacionCuidados(!mostrarInformacionCuidados);
	  };
	  transformarAfecciones= () =>{

		
	  }
  	return (
		<View style={styles.containerDev}>
			<ScrollView>
				<Text style={styles.textoBien} >Necesidades de Virginia Henderson</Text>
				<View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
					<Image
						source={require('../../img/Rectangulo.png')}
						style={styles.Image}
					/>
					<Image style={styles.anotherImageDes} source={{ uri: data[0]?.Img }}>
					</Image>
					<Text style={styles.colorTxtLogo}>{data[0]?.Título}</Text>
				</View>
				<Text style={styles.txtArea} >{data[0]?.Definición}</Text>
				<View style={styles.Contenedor}>
					<TouchableOpacity
						style={styles.colorBtn} onPress={mostrarOcultarInformacion}>
							<Text style={styles.colorTxtBtn}>Objetivo</Text>
							<View>
								{
									mostrarInformacion && (
										<>
										<Text style={{ fontSize: 14, marginVertical: 10,color: '#003F72',fontWeight: 'bold',}}>{data[0]?.Objetivo}</Text>
										</>
									)
								}
							</View>
						</TouchableOpacity>
					<TouchableOpacity
						style={styles.colorBtn} onPress={mostrarOcultarAfecciones}>
							<Text style={styles.colorTxtBtn}>Aspectos a Valora</Text>
							<View>
								{
									mostrarInformacionAfecciones && (
										transformarAfecciones(),
										<>
										<Text style={{ fontSize: 14, marginVertical: 10,color: '#003F72',fontWeight: 'bold',}}>{resultAfecciones}</Text>
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
										<Text style={{ fontSize: 14, marginVertical: 10,color: '#003F72',fontWeight: 'bold',}}>{resultadosCuidados}</Text>
										</>
									)
								}
							</View>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.colorBtn} >
							<Text style={styles.colorTxtBtn}>Bibliografia Relacionada</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</View>)
};


export default DesNecesidades;
