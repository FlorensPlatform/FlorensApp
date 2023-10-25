import * as React from "react";
import {Text, StyleSheet, View, Image} from "react-native";

const Contenido = () => {
  	
  	return (
    		<View style={styles.contenido}>
      			<Text style={styles.contenido1}>Contenido</Text>
      			<View style={styles.contenidoChild} />
      			<View style={[styles.contenidoItem, styles.contenidoLayout]} />
      			<View style={[styles.contenidoInner, styles.contenidoLayout]} />
      			<Text style={[styles.necesidadesBasicas, styles.dominiosDeNandaTypo]}>{` Necesidades Basicas `}</Text>
      			<Text style={[styles.henderson, styles.nandaTypo]}> Henderson</Text>
      			<Text style={[styles.gordon, styles.nandaTypo]}> Gordon</Text>
      			<Text style={[styles.nanda, styles.nandaTypo]}>NANDA</Text>
      			<Text style={[styles.patronesFuncionales, styles.dominiosDeNandaTypo]}>{` Patrones Funcionales `}</Text>
      			<Text style={[styles.dominiosDeNanda, styles.dominiosDeNandaTypo]}>{` Dominios de NANDA `}</Text>
      			<Image style={styles.lauserNurseIcon} resizeMode="cover" source="la:user-nurse.png" />
      			<Image style={styles.carbondeploymentPatternIcon} resizeMode="cover" source="carbon:deployment-pattern.png" />
      			<Image style={styles.bxbookAddIcon} resizeMode="cover" source="bx:book-add.png" />
      			<View style={[styles.rectangleView, styles.contenidoLayout]} />
      			<Text style={[styles.tutor, styles.nandaTypo]}>Tutor</Text>
      			<Text style={[styles.tutorAutomatizado, styles.dominiosDeNandaTypo]}>Tutor Automatizado</Text>
      			<Text style={[styles.bienvenidoA, styles.florensTypo]}>Bienvenido  a</Text>
      			<Text style={[styles.florens, styles.florensTypo]}>Florens</Text>
      			<Image style={styles.marcaUtpl2018011} resizeMode="cover" source="marca UTPL 2018-01 1.png" />
      			<Image style={styles.logo221} resizeMode="cover" source="Logo 2 2.png" />
      			<Image style={styles.vectorIcon1} resizeMode="cover" source="Vector.png" />
    		</View>);
};

const styles = StyleSheet.create({
  	contenidoLayout: {
    		width: 327,
    		left: -33,
    		height: 83,
    		backgroundColor: "#003f72",
    		borderRadius: 50,
    		position: "absolute"
  	},
  	dominiosDeNandaTypo: {
    		color: "#edfffd",
    		fontSize: 22,
    		textAlign: "left",
    		fontFamily: "Inter-Bold",
    		fontWeight: "700",
    		position: "absolute"
  	},
  	nandaTypo: {
    		color: "#eaab00",
    		fontSize: 20,
    		textAlign: "left",
    		fontFamily: "Inter-Bold",
    		fontWeight: "700",
    		position: "absolute"
  	},
  	florensTypo: {
    		color: "#125873",
    		fontSize: 30,
    		textAlign: "left",
    		fontFamily: "Inter-Bold",
    		fontWeight: "700",
    		position: "absolute"
  	},
  	contenido1: {
    		top: 243,
    		left: 143,
    		fontSize: 28,
    		color: "#003f72",
    		textAlign: "left",
    		fontFamily: "Inter-Bold",
    		fontWeight: "700",
    		position: "absolute"
  	},
  	contenidoChild: {
    		top: 302,
    		left: -42,
    		width: 335,
    		height: 83,
    		backgroundColor: "#003f72",
    		borderRadius: 50,
    		position: "absolute"
  	},
  	contenidoItem: {
    		top: 436
  	},
  	contenidoInner: {
    		top: 567
  	},
  	necesidadesBasicas: {
    		top: 333,
    		left: 0,
    		width: 303
  	},
  	henderson: {
    		top: 356,
    		left: 298,
    		width: 117,
    		height: 29
  	},
  	gordon: {
    		top: 495,
    		left: 316,
    		width: 80
  	},
  	nanda: {
    		top: 626,
    		left: 321,
    		width: 90
  	},
  	patronesFuncionales: {
    		top: 466,
    		left: 5,
    		width: 282
  	},
  	dominiosDeNanda: {
    		top: 594,
    		left: 4,
    		width: 275,
    		height: 37
  	},
  	lauserNurseIcon: {
    		top: 277,
    		left: 315,
    		width: 83,
    		height: 79,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	carbondeploymentPatternIcon: {
    		top: 430,
    		left: 324,
    		width: 63,
    		height: 61,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	bxbookAddIcon: {
    		top: 553,
    		left: 325,
    		width: 62,
    		height: 64,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	rectangleView: {
    		top: 698
  	},
  	tutor: {
    		top: 757,
    		left: 330,
    		width: 66
  	},
  	tutorAutomatizado: {
    		top: 726,
    		left: 12,
    		width: 264
  	},
  	bienvenidoA: {
    		top: 116,
    		left: 159
  	},
  	florens: {
    		top: 152,
    		left: 220
  	},
  	marcaUtpl2018011: {
    		top: 34,
    		left: 24,
    		width: 104,
    		height: 42,
    		position: "absolute"
  	},
  	logo221: {
    		top: 108,
    		left: 48,
    		width: 93,
    		height: 88,
    		position: "absolute"
  	},
  	vectorIcon1: {
    		height: "5.4%",
    		width: "11.68%",
    		top: "75.38%",
    		right: "10.98%",
    		bottom: "19.22%",
    		left: "77.34%",
    		maxWidth: "100%",
    		maxHeight: "100%",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	contenido: {
    		backgroundColor: "#fff",
    		flex: 1,
    		width: "100%",
    		height: 926,
    		overflow: "hidden"
  	}
});

export default Contenido;
