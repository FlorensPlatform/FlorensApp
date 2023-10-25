import * as React from "react";
import {StyleSheet, View, Image, Text} from "react-native";

const DesDominios = () => {
  	
  	return (
    		<View style={styles.desdominios}>
      			<View style={[styles.desdominiosChild, styles.desdominiosChildLayout1]} />
      			<Image style={[styles.streamlineinterfaceAdd1ExpIcon5, styles.streamlineinterfaceIconLayout]} resizeMode="cover" source="streamline:interface-add-1-expand-cross-buttons-button-more-remove-plus-add.png" />
      			<View style={styles.desdominiosItem} />
      			<Text style={[styles.promocionDeSalud1, styles.resultadosNocTypo]}>  1. Promocion de Salud</Text>
      			<Text style={styles.seRefiereA1}>Se refiere a las acciones y prácticas que fomentan el bienestar y la prevención de enfermedades y lesiones en las personas, las familias y las comunidades</Text>
      			<Text style={[styles.clasesDelDominio1, styles.resultadosNocTypo]}>Clases del dominio</Text>
      			<View style={[styles.desdominiosInner, styles.desdominiosChildLayout1]} />
      			<Text style={[styles.clase1Toma1, styles.clase1Toma1Typo]}>Clase 1: Toma de conciencia de salud</Text>
      			<View style={[styles.rectangleView, styles.desdominiosChildLayout1]} />
      			<Image style={[styles.streamlineinterfaceAdd1ExpIcon6, styles.streamlineinterfaceIconLayout]} resizeMode="cover" source="streamline:interface-add-1-expand-cross-buttons-button-more-remove-plus-add.png" />
      			<Text style={[styles.deficitDeActividades1, styles.resultadosNocTypo]}>Deficit  de actividades recreativas</Text>
      			<View style={[styles.desdominiosChild1, styles.desdominiosChildLayout1]} />
      			<Image style={[styles.streamlineinterfaceAdd1ExpIcon7, styles.streamlineinterfaceIconLayout]} resizeMode="cover" source="streamline:interface-add-1-expand-cross-buttons-button-more-remove-plus-add.png" />
      			<Text style={[styles.caracteristicas, styles.clase1Toma1Typo]}>Caracteristicas</Text>
      			<View style={[styles.desdominiosChild2, styles.desdominiosChildLayout1]} />
      			<Image style={[styles.streamlineinterfaceAdd1ExpIcon8, styles.diagnosticosAlternativosSuge1Position]} resizeMode="cover" source="streamline:interface-add-1-expand-cross-buttons-button-more-remove-plus-add.png" />
      			<Text style={[styles.diagnosticosAlternativosSuge1, styles.diagnosticosAlternativosSuge1Position]}>Diagnosticos alternativos sugeridos</Text>
      			<View style={[styles.desdominiosChild3, styles.desdominiosChildLayout1]} />
      			<Image style={[styles.streamlineinterfaceAdd1ExpIcon9, styles.streamlineinterfaceIconLayout]} resizeMode="cover" source="streamline:interface-add-1-expand-cross-buttons-button-more-remove-plus-add.png" />
      			<Text style={[styles.resultadosNoc, styles.resultadosNocTypo]}>Resultados NOC</Text>
      			<View style={[styles.desdominiosChild4, styles.desdominiosChildLayout]} />
      			<Image style={styles.carbonuserAvatarFilledIcon1} resizeMode="cover" source="carbon:user-avatar-filled.png" />
      			<Image style={styles.marcaUtpl2018012} resizeMode="cover" source="marca UTPL 2018-01 2.png" />
      			<Text style={styles.florens}>Florens</Text>
      			<View style={[styles.desdominiosChild5, styles.desdominiosChildPosition]} />
      			<Text style={[styles.patrones, styles.tutorTypo]}>Patrones</Text>
      			<Image style={styles.carbondeploymentPatternIcon} resizeMode="cover" source="carbon:deployment-pattern.png" />
      			<View style={[styles.desdominiosChild6, styles.desdominiosChildPosition]} />
      			<Image style={styles.lauserNurseIcon} resizeMode="cover" source="la:user-nurse.png" />
      			<Text style={[styles.necesidades, styles.tutorTypo]}>{`Necesidades `}</Text>
      			<Image style={styles.bxbookAddIcon} resizeMode="cover" source="bx:book-add.png" />
      			<Text style={[styles.dominios, styles.tutorTypo]}>Dominios</Text>
      			<Text style={[styles.dominiosDeNanda, styles.resultadosNocTypo]}>Dominios de NANDA</Text>
      			<Text style={[styles.tutor, styles.tutorTypo]}>Tutor</Text>
      			<Image style={styles.vectorIcon1} resizeMode="cover" source="Vector.png" />
    		</View>);
};

const styles = StyleSheet.create({
  	desdominiosChildLayout1: {
    		height: 44,
    		borderRadius: 10,
    		left: 19,
    		backgroundColor: "#eaab00",
    		position: "absolute"
  	},
  	streamlineinterfaceIconLayout: {
    		height: 14,
    		width: 14,
    		overflow: "hidden"
  	},
  	resultadosNocTypo: {
    		textAlign: "left",
    		fontSize: 20,
    		color: "#003f72",
    		fontFamily: "Inter-Bold",
    		fontWeight: "700",
    		position: "absolute"
  	},
  	clase1Toma1Typo: {
    		left: 30,
    		textAlign: "left",
    		color: "#003f72",
    		fontFamily: "Inter-Bold",
    		fontWeight: "700",
    		fontSize: 20
  	},
  	diagnosticosAlternativosSuge1Position: {
    		top: 700,
    		position: "absolute"
  	},
  	desdominiosChildLayout: {
    		width: 428,
    		backgroundColor: "#003f72"
  	},
  	desdominiosChildPosition: {
    		height: 111,
    		top: 819,
    		position: "absolute"
  	},
  	tutorTypo: {
    		fontSize: 15,
    		textAlign: "left",
    		fontFamily: "Inter-Bold",
    		fontWeight: "700",
    		position: "absolute"
  	},
  	desdominiosChild: {
    		top: 388,
    		width: 276
  	},
  	streamlineinterfaceAdd1ExpIcon5: {
    		top: 399,
    		left: 265,
    		position: "absolute"
  	},
  	desdominiosItem: {
    		top: 179,
    		borderRadius: 20,
    		width: 92,
    		height: 92,
    		left: 26,
    		backgroundColor: "#eaab00",
    		position: "absolute"
  	},
  	promocionDeSalud1: {
    		top: 216,
    		left: 131
  	},
  	seRefiereA1: {
    		top: 291,
    		fontSize: 14,
    		textAlign: "justify",
    		width: 371,
    		height: 29,
    		color: "#003f72",
    		fontFamily: "Inter-Bold",
    		fontWeight: "700",
    		left: 19,
    		position: "absolute"
  	},
  	clasesDelDominio1: {
    		top: 398,
    		left: 26
  	},
  	desdominiosInner: {
    		top: 462,
    		width: 395
  	},
  	clase1Toma1: {
    		top: 472,
    		position: "absolute"
  	},
  	rectangleView: {
    		top: 536,
    		width: 387
  	},
  	streamlineinterfaceAdd1ExpIcon6: {
    		top: 555,
    		left: 382,
    		position: "absolute"
  	},
  	deficitDeActividades1: {
    		top: 545,
    		left: 26
  	},
  	desdominiosChild1: {
    		top: 610,
    		width: 207
  	},
  	streamlineinterfaceAdd1ExpIcon7: {
    		top: 628,
    		left: 202,
    		position: "absolute"
  	},
  	caracteristicas: {
    		top: 619,
    		width: 196,
    		position: "absolute"
  	},
  	desdominiosChild2: {
    		top: 687,
    		width: 393
  	},
  	streamlineinterfaceAdd1ExpIcon8: {
    		left: 388,
    		height: 14,
    		width: 14,
    		overflow: "hidden"
  	},
  	diagnosticosAlternativosSuge1: {
    		width: 406,
    		left: 30,
    		textAlign: "left",
    		color: "#003f72",
    		fontFamily: "Inter-Bold",
    		fontWeight: "700",
    		fontSize: 20
  	},
  	desdominiosChild3: {
    		top: 761,
    		width: 214
  	},
  	streamlineinterfaceAdd1ExpIcon9: {
    		top: 775,
    		left: 209,
    		position: "absolute"
  	},
  	resultadosNoc: {
    		top: 770,
    		left: 32,
    		width: 194
  	},
  	desdominiosChild4: {
    		top: 0,
    		left: 0,
    		height: 86,
    		position: "absolute"
  	},
  	carbonuserAvatarFilledIcon1: {
    		top: 10,
    		left: 365,
    		width: 50,
    		height: 50,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	marcaUtpl2018012: {
    		top: 28,
    		left: 20,
    		width: 104,
    		height: 42,
    		position: "absolute"
  	},
  	florens: {
    		top: 31,
    		left: 182,
    		fontSize: 22,
    		color: "#fff",
    		textAlign: "left",
    		fontFamily: "Inter-Bold",
    		fontWeight: "700",
    		position: "absolute"
  	},
  	desdominiosChild5: {
    		left: -1,
    		width: 428,
    		backgroundColor: "#003f72"
  	},
  	patrones: {
    		left: 133,
    		width: 76,
    		top: 899,
    		fontSize: 15,
    		color: "#fff"
  	},
  	carbondeploymentPatternIcon: {
    		top: 829,
    		left: 136,
    		width: 63,
    		height: 61,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	desdominiosChild6: {
    		left: 226,
    		width: 112,
    		backgroundColor: "#eaab00"
  	},
  	lauserNurseIcon: {
    		top: 820,
    		left: 17,
    		width: 83,
    		height: 79,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	necesidades: {
    		left: 9,
    		width: 99,
    		top: 899,
    		fontSize: 15,
    		color: "#fff"
  	},
  	bxbookAddIcon: {
    		top: 832,
    		left: 252,
    		width: 62,
    		height: 64,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	dominios: {
    		top: 898,
    		left: 248,
    		width: 75,
    		color: "#003f72"
  	},
  	dominiosDeNanda: {
    		top: 125,
    		left: 123
  	},
  	tutor: {
    		left: 361,
    		width: 44,
    		top: 899,
    		fontSize: 15,
    		color: "#fff"
  	},
  	vectorIcon1: {
    		height: "5.4%",
    		width: "11.68%",
    		top: "89.96%",
    		right: "5.37%",
    		bottom: "4.64%",
    		left: "82.94%",
    		maxWidth: "100%",
    		maxHeight: "100%",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	desdominios: {
    		backgroundColor: "#fff",
    		flex: 1,
    		width: "100%",
    		height: 926,
    		overflow: "hidden"
  	}
});

export default DesDominios;
