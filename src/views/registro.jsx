import * as React from "react";
import {Text, StyleSheet, View, Image} from "react-native";

const Registro = () => {
  	
  	return (
    		<View style={styles.registro}>
      			<Text style={[styles.nombre, styles.crearTypo]}>Nombre</Text>
      			<Text style={[styles.ingreseSuNombre1, styles.ingreseTypo]}>Ingrese su nombre</Text>
      			<Text style={[styles.eMailUsuario, styles.paisLayout]}>E-mail (Usuario)</Text>
      			<Text style={[styles.ingreseSuEMail1, styles.ingreseTypo]}>Ingrese su E-mail</Text>
      			<Text style={[styles.universidad, styles.paisLayout]}>Universidad</Text>
      			<Text style={[styles.ingreseSuContrasea2, styles.ingreseTypo]}>Ingrese su contraseña</Text>
      			<Text style={[styles.contrasea, styles.paisTypo]}>Contraseña</Text>
      			<Text style={[styles.ingreseSuContrasea3, styles.ingreseTypo]}>Ingrese su contraseña</Text>
      			<Text style={[styles.pais, styles.paisLayout]}>Pais</Text>
      			<Text style={[styles.ingreseSuPais1, styles.ingreseTypo]}>Ingrese su pais</Text>
      			<Text style={[styles.crearCuenta, styles.crearTypo]}>Crear Cuenta</Text>
      			<Text style={[styles.crearNuevaCuenta1, styles.cuentaTypo]}>Crear nueva cuenta</Text>
      			<View style={[styles.registroChild, styles.registroChildShadowBox]} />
      			<View style={[styles.registroItem, styles.registroChildShadowBox]} />
      			<Text style={[styles.ciudad, styles.paisLayout]}>Ciudad</Text>
      			<Text style={[styles.ingreseSuCiudad1, styles.ingreseTypo]}>Ingrese su ciudad</Text>
      			<View style={[styles.registroInner, styles.registroChildShadowBox]} />
      			<View style={[styles.rectangleView, styles.registroChildShadowBox]} />
      			<View style={[styles.registroChild1, styles.registroChildShadowBox]} />
      			<View style={[styles.registroChild2, styles.registroChildShadowBox]} />
      			<View style={styles.registroChild3} />
      			<Text style={[styles.crearCuenta1, styles.crearTypo]}>Crear Cuenta</Text>
      			<Text style={[styles.yaTienesCuentaContainer, styles.cuentaTypo]}>
        				<Text style={styles.yaTienesCuenta1}>
          					<Text style={styles.yaTienesCuenta2}>Ya tienes cuenta,</Text>
          					<Text style={styles.text}>{` `}</Text>
        				</Text>
        				<Text style={styles.text}>
          					<Text style={styles.ingresa1}>Ingresa</Text>
        				</Text>
      			</Text>
      			<View style={styles.registroChild4} />
      			<Image style={styles.marcaUtpl2018011} resizeMode="cover" source="marca UTPL 2018-01 1.png" />
      			<Image style={styles.logo211} resizeMode="cover" source="Logo 2 1.png" />
    		</View>);
};

const styles = StyleSheet.create({
  	crearTypo: {
    		height: 47,
    		textAlign: "left",
    		fontFamily: "Inter-Bold",
    		fontWeight: "700",
    		position: "absolute"
  	},
  	ingreseTypo: {
    		height: 17,
    		color: "#002233",
    		fontFamily: "Inter-ExtraLight",
    		fontWeight: "200"
  	},
  	paisLayout: {
    		width: 181,
    		color: "#eaab00",
    		fontSize: 20
  	},
  	paisTypo: {
    		textAlign: "left",
    		fontFamily: "Inter-Bold",
    		fontWeight: "700",
    		position: "absolute"
  	},
  	cuentaTypo: {
    		fontSize: 15,
    		textAlign: "left",
    		position: "absolute"
  	},
  	registroChildShadowBox: {
    		height: 64,
    		borderWidth: 1,
    		borderColor: "#003f72",
    		borderStyle: "solid",
    		shadowOpacity: 1,
    		elevation: 4,
    		shadowRadius: 4,
    		shadowOffset: {
      			width: 0,
      			height: 4
    		},
    		shadowColor: "rgba(0, 0, 0, 0.25)",
    		backgroundColor: "rgba(217, 217, 217, 0)",
    		width: 294,
    		borderRadius: 10,
    		left: 67,
    		position: "absolute"
  	},
  	nombre: {
    		top: 202,
    		width: 181,
    		color: "#eaab00",
    		fontSize: 20,
    		left: 76
  	},
  	ingreseSuNombre1: {
    		top: 232,
    		width: 252,
    		height: 17,
    		textAlign: "left",
    		fontSize: 20,
    		position: "absolute",
    		left: 77
  	},
  	eMailUsuario: {
    		top: 506,
    		left: 77,
    		textAlign: "left",
    		fontFamily: "Inter-Bold",
    		fontWeight: "700",
    		position: "absolute"
  	},
  	ingreseSuEMail1: {
    		top: 529,
    		width: 252,
    		height: 17,
    		textAlign: "left",
    		fontSize: 20,
    		position: "absolute",
    		left: 77
  	},
  	universidad: {
    		top: 604,
    		left: 77,
    		textAlign: "left",
    		fontFamily: "Inter-Bold",
    		fontWeight: "700",
    		position: "absolute"
  	},
  	ingreseSuContrasea2: {
    		top: 632,
    		width: 252,
    		height: 17,
    		textAlign: "left",
    		fontSize: 20,
    		position: "absolute",
    		left: 77
  	},
  	contrasea: {
    		top: 711,
    		width: 265,
    		left: 77,
    		color: "#eaab00",
    		fontSize: 20
  	},
  	ingreseSuContrasea3: {
    		top: 734,
    		width: 252,
    		height: 17,
    		textAlign: "left",
    		fontSize: 20,
    		position: "absolute",
    		left: 76
  	},
  	pais: {
    		top: 308,
    		left: 75,
    		textAlign: "left",
    		fontFamily: "Inter-Bold",
    		fontWeight: "700",
    		position: "absolute"
  	},
  	ingreseSuPais1: {
    		top: 332,
    		width: 252,
    		height: 17,
    		textAlign: "left",
    		fontSize: 20,
    		position: "absolute",
    		left: 77
  	},
  	crearCuenta: {
    		top: 117,
    		left: 109,
    		fontSize: 30,
    		color: "#003f72",
    		width: 212
  	},
  	crearNuevaCuenta1: {
    		top: 154,
    		left: 143,
    		width: 143,
    		height: 17,
    		color: "#002233",
    		fontFamily: "Inter-ExtraLight",
    		fontWeight: "200"
  	},
  	registroChild: {
    		top: 198
  	},
  	registroItem: {
    		top: 300
  	},
  	ciudad: {
    		top: 404,
    		left: 77,
    		textAlign: "left",
    		fontFamily: "Inter-Bold",
    		fontWeight: "700",
    		position: "absolute"
  	},
  	ingreseSuCiudad1: {
    		top: 431,
    		width: 252,
    		height: 17,
    		textAlign: "left",
    		fontSize: 20,
    		position: "absolute",
    		left: 77
  	},
  	registroInner: {
    		top: 399
  	},
  	rectangleView: {
    		top: 497
  	},
  	registroChild1: {
    		top: 600
  	},
  	registroChild2: {
    		top: 702
  	},
  	registroChild3: {
    		top: 797,
    		backgroundColor: "#003f72",
    		height: 53,
    		width: 294,
    		borderRadius: 10,
    		left: 67,
    		position: "absolute"
  	},
  	crearCuenta1: {
    		top: 812,
    		left: 146,
    		color: "#fff",
    		width: 135,
    		fontSize: 20
  	},
  	yaTienesCuenta2: {
    		fontFamily: "Inter-ExtraLight",
    		fontWeight: "200"
  	},
  	text: {
    		fontFamily: "Inter-Bold",
    		fontWeight: "700"
  	},
  	yaTienesCuenta1: {
    		color: "#002233"
  	},
  	ingresa1: {
    		color: "#eaab00"
  	},
  	yaTienesCuentaContainer: {
    		top: 862,
    		left: 123,
    		width: 183,
    		height: 31
  	},
  	registroChild4: {
    		top: 77,
    		left: 290,
    		width: 128,
    		height: 22,
    		position: "absolute",
    		backgroundColor: "#fff"
  	},
  	marcaUtpl2018011: {
    		top: 34,
    		left: 24,
    		width: 104,
    		height: 42,
    		position: "absolute"
  	},
  	logo211: {
    		top: 11,
    		left: 329,
    		width: 93,
    		height: 88,
    		position: "absolute"
  	},
  	registro: {
    		flex: 1,
    		width: "100%",
    		height: 926,
    		overflow: "hidden",
    		backgroundColor: "#fff"
  	}
});

export default Registro;
