import * as React from "react";
import {StyleSheet, View, Text, Image} from "react-native";

const Dominios = () => {
  	
  	return (
    		<View style={styles.dominios}>
      			<View style={[styles.dominiosChild, styles.dominiosChildLayout2]} />
      			<View style={[styles.dominiosItem, styles.dominiosLayout1]} />
      			<View style={[styles.dominiosInner, styles.dominiosLayout]} />
      			<View style={[styles.rectangleView, styles.dominiosLayout1]} />
      			<View style={[styles.dominiosChild1, styles.dominiosLayout1]} />
      			<View style={[styles.dominiosChild2, styles.dominiosChildLayout2]} />
      			<Text style={[styles.text13, styles.textTypo4]}>13</Text>
      			<Text style={[styles.desarrollo, styles.confortTypo]}>Desarrollo</Text>
      			<View style={[styles.dominiosChild3, styles.dominiosChildLayout1]} />
      			<View style={[styles.dominiosChild4, styles.dominiosChildLayout1]} />
      			<View style={[styles.dominiosChild5, styles.dominiosChildLayout1]} />
      			<View style={[styles.dominiosChild6, styles.dominiosChildPosition]} />
      			<View style={[styles.dominiosChild7, styles.dominiosChildPosition]} />
      			<View style={[styles.dominiosChild8, styles.dominiosChildPosition]} />
      			<View style={[styles.dominiosChild9, styles.dominiosChildLayout]} />
      			<View style={[styles.dominiosChild10, styles.dominiosChildLayout]} />
      			<Text style={[styles.salud, styles.saludTypo]}>Salud</Text>
      			<Text style={[styles.congnicion, styles.congnicionLayout]}>Congnicion</Text>
      			<Text style={[styles.autopercepcion, styles.confortTypo]}>Autopercepcion</Text>
      			<Text style={[styles.reposo, styles.saludTypo]}>Reposo</Text>
      			<Text style={[styles.confort, styles.confortTypo]}>Confort</Text>
      			<Text style={[styles.seguridad, styles.seguridadTypo]}>Seguridad</Text>
      			<Text style={[styles.vitalidad, styles.seguridadTypo]}>Vitalidad</Text>
      			<Text style={[styles.tolerancia, styles.confortTypo]}>Tolerancia</Text>
      			<Text style={[styles.sexualidad, styles.confortTypo]}>Sexualidad</Text>
      			<Text style={[styles.relaciones, styles.confortTypo]}>Relaciones</Text>
      			<Text style={[styles.eliminacion, styles.confortTypo]}>Eliminacion</Text>
      			<Text style={[styles.nutricion, styles.confortTypo]}>Nutricion</Text>
      			<View style={[styles.dominiosChild11, styles.dominiosChild11Position]} />
      			<Text style={[styles.dominios1, styles.tutorTypo]}>Dominios</Text>
      			<Text style={[styles.tutor, styles.tutorTypo]}>Tutor</Text>
      			<Text style={[styles.patrones, styles.tutorTypo]}>Patrones</Text>
      			<Image style={styles.carbondeploymentPatternIcon} resizeMode="cover" source="carbon:deployment-pattern.png" />
      			<Image style={styles.bxbookAddIcon} resizeMode="cover" source="bx:book-add.png" />
      			<Text style={[styles.necesidades, styles.tutorTypo]}>{`Necesidades `}</Text>
      			<Image style={styles.carbonuserAvatarFilledIcon1} resizeMode="cover" source="carbon:user-avatar-filled.png" />
      			<Image style={[styles.marcaUtpl2018012, styles.congnicionLayout]} resizeMode="cover" source="marca UTPL 2018-01 2.png" />
      			<Text style={[styles.florens, styles.text18Typo]}>Florens</Text>
      			<Text style={[styles.text14, styles.textTypo3]}>1</Text>
      			<Text style={[styles.text15, styles.textTypo3]}>3</Text>
      			<Text style={[styles.text16, styles.textPosition]}>2</Text>
      			<Text style={[styles.text17, styles.textTypo2]}>4</Text>
      			<Text style={[styles.text18, styles.text18Typo]}>6</Text>
      			<Text style={[styles.text19, styles.textTypo1]}>5</Text>
      			<Text style={[styles.text20, styles.textTypo2]}>7</Text>
      			<Text style={[styles.text21, styles.textTypo1]}>9</Text>
      			<Text style={[styles.text22, styles.textTypo4]}>8</Text>
      			<Text style={[styles.text23, styles.textTypo]}>10</Text>
      			<Text style={[styles.text24, styles.textTypo4]}>12</Text>
      			<Text style={[styles.text25, styles.textTypo]}>11</Text>
      			<Image style={styles.vectorIcon1} resizeMode="cover" source="Vector.png" />
      			<Image style={[styles.lauserNurseIcon, styles.dominiosChild11Position]} resizeMode="cover" source="la:user-nurse.png" />
    		</View>);
};

const styles = StyleSheet.create({
  	dominiosChildLayout2: {
    		height: 100,
    		borderRadius: 50
  	},
  	dominiosLayout1: {
    		top: 109,
    		height: 100,
    		width: 100,
    		backgroundColor: "#003f72",
    		borderRadius: 50,
    		position: "absolute"
  	},
  	dominiosLayout: {
    		width: 428,
    		backgroundColor: "#003f72"
  	},
  	textTypo4: {
    		height: 22,
    		textAlign: "left",
    		color: "#fff",
    		fontFamily: "Inter-Bold",
    		fontWeight: "700",
    		position: "absolute"
  	},
  	confortTypo: {
    		color: "#003f72",
    		height: 22,
    		textAlign: "left",
    		fontFamily: "Inter-Bold",
    		fontWeight: "700"
  	},
  	dominiosChildLayout1: {
    		top: 543,
    		height: 100,
    		width: 100,
    		backgroundColor: "#003f72",
    		borderRadius: 50,
    		position: "absolute"
  	},
  	dominiosChildPosition: {
    		top: 401,
    		width: 100,
    		backgroundColor: "#003f72",
    		position: "absolute"
  	},
  	dominiosChildLayout: {
    		top: 259,
    		height: 100,
    		width: 100,
    		backgroundColor: "#003f72",
    		borderRadius: 50,
    		position: "absolute"
  	},
  	saludTypo: {
    		width: 77,
    		color: "#003f72",
    		fontSize: 18,
    		height: 22,
    		textAlign: "left",
    		fontFamily: "Inter-Bold",
    		fontWeight: "700",
    		position: "absolute"
  	},
  	congnicionLayout: {
    		width: 104,
    		position: "absolute"
  	},
  	seguridadTypo: {
    		top: 645,
    		color: "#003f72",
    		fontSize: 18,
    		height: 22,
    		textAlign: "left",
    		fontFamily: "Inter-Bold",
    		fontWeight: "700",
    		position: "absolute"
  	},
  	dominiosChild11Position: {
    		top: 819,
    		position: "absolute"
  	},
  	tutorTypo: {
    		fontSize: 15,
    		top: 898,
    		textAlign: "left",
    		color: "#fff",
    		fontFamily: "Inter-Bold",
    		fontWeight: "700",
    		position: "absolute"
  	},
  	text18Typo: {
    		textAlign: "left",
    		color: "#fff",
    		fontFamily: "Inter-Bold",
    		fontWeight: "700",
    		position: "absolute"
  	},
  	textTypo3: {
    		width: 15,
    		top: 178,
    		fontSize: 18,
    		height: 22,
    		textAlign: "left",
    		color: "#fff",
    		fontFamily: "Inter-Bold",
    		fontWeight: "700",
    		position: "absolute"
  	},
  	textPosition: {
    		left: 209,
    		fontSize: 18
  	},
  	textTypo2: {
    		left: 67,
    		fontSize: 18,
    		height: 22,
    		textAlign: "left",
    		color: "#fff",
    		fontFamily: "Inter-Bold",
    		fontWeight: "700",
    		position: "absolute"
  	},
  	textTypo1: {
    		width: 17,
    		fontSize: 18,
    		height: 22,
    		textAlign: "left",
    		color: "#fff",
    		fontFamily: "Inter-Bold",
    		fontWeight: "700",
    		position: "absolute"
  	},
  	textTypo: {
    		top: 613,
    		height: 22,
    		textAlign: "left",
    		color: "#fff",
    		fontFamily: "Inter-Bold",
    		fontWeight: "700",
    		position: "absolute"
  	},
  	dominiosChild: {
    		top: 256,
    		width: 100,
    		position: "absolute",
    		backgroundColor: "#003f72",
    		height: 100,
    		borderRadius: 50,
    		left: 25
  	},
  	dominiosItem: {
    		left: 26
  	},
  	dominiosInner: {
    		top: 0,
    		left: 0,
    		height: 86,
    		position: "absolute"
  	},
  	rectangleView: {
    		left: 306
  	},
  	dominiosChild1: {
    		left: 166
  	},
  	dominiosChild2: {
    		top: 685,
    		left: 26,
    		width: 100,
    		position: "absolute",
    		backgroundColor: "#003f72",
    		height: 100,
    		borderRadius: 50
  	},
  	text13: {
    		top: 756,
    		width: 25,
    		left: 65,
    		fontSize: 17
  	},
  	desarrollo: {
    		top: 791,
    		left: 21,
    		fontSize: 18,
    		width: 100,
    		position: "absolute"
  	},
  	dominiosChild3: {
    		left: 26
  	},
  	dominiosChild4: {
    		left: 310
  	},
  	dominiosChild5: {
    		left: 168
  	},
  	dominiosChild6: {
    		borderRadius: 75,
    		height: 92,
    		left: 25
  	},
  	dominiosChild7: {
    		left: 310,
    		height: 100,
    		borderRadius: 50,
    		top: 401
  	},
  	dominiosChild8: {
    		left: 168,
    		height: 100,
    		borderRadius: 50,
    		top: 401
  	},
  	dominiosChild9: {
    		left: 310
  	},
  	dominiosChild10: {
    		left: 161
  	},
  	salud: {
    		left: 54,
    		top: 211
  	},
  	congnicion: {
    		top: 359,
    		left: 157,
    		color: "#003f72",
    		height: 22,
    		textAlign: "left",
    		fontFamily: "Inter-Bold",
    		fontWeight: "700",
    		fontSize: 18
  	},
  	autopercepcion: {
    		top: 362,
    		left: 294,
    		width: 148,
    		fontSize: 17,
    		color: "#003f72",
    		position: "absolute"
  	},
  	reposo: {
    		top: 358,
    		left: 33
  	},
  	confort: {
    		top: 648,
    		left: 322,
    		width: 80,
    		fontSize: 18,
    		position: "absolute"
  	},
  	seguridad: {
    		left: 169,
    		width: 93
  	},
  	vitalidad: {
    		left: 37,
    		width: 121
  	},
  	tolerancia: {
    		top: 501,
    		left: 312,
    		fontSize: 18,
    		width: 100,
    		position: "absolute"
  	},
  	sexualidad: {
    		top: 500,
    		width: 103,
    		left: 168,
    		fontSize: 18,
    		position: "absolute"
  	},
  	relaciones: {
    		top: 497,
    		width: 120,
    		fontSize: 18,
    		left: 25,
    		position: "absolute"
  	},
  	eliminacion: {
    		left: 304,
    		width: 106,
    		top: 211,
    		fontSize: 18,
    		position: "absolute"
  	},
  	nutricion: {
    		left: 178,
    		width: 107,
    		top: 211,
    		fontSize: 18,
    		position: "absolute"
  	},
  	dominiosChild11: {
    		left: -1,
    		height: 111,
    		width: 428,
    		backgroundColor: "#003f72"
  	},
  	dominios1: {
    		left: 244,
    		width: 75
  	},
  	tutor: {
    		left: 355,
    		width: 44
  	},
  	patrones: {
    		left: 134,
    		width: 76
  	},
  	carbondeploymentPatternIcon: {
    		top: 828,
    		left: 137,
    		width: 63,
    		height: 61,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	bxbookAddIcon: {
    		top: 824,
    		left: 245,
    		width: 62,
    		height: 64,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	necesidades: {
    		left: 10,
    		width: 99
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
    		height: 42
  	},
  	florens: {
    		top: 35,
    		left: 180,
    		fontSize: 22
  	},
  	text14: {
    		left: 71
  	},
  	text15: {
    		left: 349
  	},
  	text16: {
    		width: 18,
    		top: 178,
    		left: 209,
    		height: 22,
    		textAlign: "left",
    		color: "#fff",
    		fontFamily: "Inter-Bold",
    		fontWeight: "700",
    		position: "absolute"
  	},
  	text17: {
    		width: 21,
    		top: 324
  	},
  	text18: {
    		left: 356,
    		top: 324,
    		fontSize: 18
  	},
  	text19: {
    		top: 328,
    		left: 205
  	},
  	text20: {
    		top: 463,
    		width: 18
  	},
  	text21: {
    		top: 467,
    		left: 354
  	},
  	text22: {
    		top: 469,
    		left: 213,
    		width: 18,
    		fontSize: 18
  	},
  	text23: {
    		width: 25,
    		left: 65,
    		fontSize: 17
  	},
  	text24: {
    		top: 612,
    		left: 351,
    		width: 27,
    		fontSize: 18
  	},
  	text25: {
    		width: 22,
    		left: 209,
    		fontSize: 18
  	},
  	vectorIcon1: {
    		height: "5.4%",
    		width: "11.68%",
    		top: "89.74%",
    		right: "6.07%",
    		bottom: "4.86%",
    		left: "82.24%",
    		maxWidth: "100%",
    		maxHeight: "100%",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	lauserNurseIcon: {
    		left: 18,
    		width: 83,
    		height: 79,
    		overflow: "hidden"
  	},
  	dominios: {
    		backgroundColor: "#fff",
    		flex: 1,
    		width: "100%",
    		height: 926,
    		overflow: "hidden"
  	}
});

export default Dominios;
