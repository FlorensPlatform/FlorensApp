import * as React from "react";
import {StyleSheet, View, Text, Image} from "react-native";

const Patrones = () => {
  	
  	return (
    		<View style={styles.patrones}>
      			<View style={[styles.patronesChild, styles.patronesChildLayout3]} />
      			<View style={[styles.patronesItem, styles.patronesChildLayout3]} />
      			<View style={[styles.patronesInner, styles.patronesChildLayout2]} />
      			<View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      			<View style={[styles.patronesChild1, styles.patronesChildLayout2]} />
      			<View style={[styles.patronesChild2, styles.patronesChildLayout2]} />
      			<View style={[styles.patronesChild3, styles.patronesChildLayout1]} />
      			<View style={[styles.patronesChild4, styles.patronesChildLayout1]} />
      			<View style={[styles.patronesChild5, styles.patronesChildLayout3]} />
      			<View style={[styles.patronesChild6, styles.patronesChildLayout3]} />
      			<View style={[styles.patronesChild7, styles.patronesChildLayout]} />
      			<View style={[styles.patronesChild8, styles.patronesChildLayout]} />
      			<Text style={[styles.descanzo, styles.descanzoTypo]}>Descanzo</Text>
      			<Text style={[styles.congnitivo, styles.congnitivoLayout]}>Congnitivo</Text>
      			<Text style={[styles.actividad, styles.descanzoTypo]}>Actividad</Text>
      			<Text style={[styles.valores, styles.valoresTypo]}>Valores</Text>
      			<Text style={[styles.adaptacion, styles.valoresTypo]}>Adaptacion</Text>
      			<Text style={[styles.sexualidad, styles.sexualidadTypo]}>Sexualidad</Text>
      			<Text style={[styles.eliminacion, styles.descanzoTypo]}>Eliminacion</Text>
      			<Text style={[styles.nutricional, styles.descanzoTypo]}>Nutricional</Text>
      			<View style={[styles.patronesChild9, styles.patronesChild9Position]} />
      			<Text style={[styles.dominios, styles.textTypo4]}>Dominios</Text>
      			<Text style={[styles.tutor, styles.textTypo4]}>Tutor</Text>
      			<Text style={[styles.patrones1, styles.textTypo4]}>Patrones</Text>
      			<Image style={styles.bxbookAddIcon} resizeMode="cover" source="bx:book-add.png" />
      			<Text style={[styles.necesidades, styles.textTypo4]}>{`Necesidades `}</Text>
      			<Image style={styles.carbonuserAvatarFilledIcon1} resizeMode="cover" source="carbon:user-avatar-filled.png" />
      			<Image style={styles.marcaUtpl2018012} resizeMode="cover" source="marca UTPL 2018-01 2.png" />
      			<Text style={[styles.florens, styles.textTypo4]}>Florens</Text>
      			<Text style={[styles.text11, styles.textTypo3]}>1</Text>
      			<Text style={[styles.text12, styles.textTypo3]}>3</Text>
      			<Text style={[styles.text13, styles.textPosition]}>2</Text>
      			<Text style={[styles.text14, styles.textTypo2]}>4</Text>
      			<Text style={[styles.text15, styles.textTypo4]}>6</Text>
      			<Text style={[styles.text16, styles.textTypo1]}>5</Text>
      			<Text style={[styles.text17, styles.textTypo2]}>7</Text>
      			<Text style={[styles.text18, styles.textTypo1]}>9</Text>
      			<Text style={[styles.text19, styles.textTypo4]}>8</Text>
      			<Text style={[styles.text20, styles.textTypo]}>10</Text>
      			<Text style={[styles.text21, styles.textTypo]}>11</Text>
      			<Image style={styles.vectorIcon1} resizeMode="cover" source="Vector.png" />
      			<Text style={[styles.percepcin, styles.percepcinTypo]}>Percepción</Text>
      			<Text style={[styles.autoconcepto, styles.sexualidadTypo]}>Autoconcepto</Text>
      			<Text style={[styles.relaciones, styles.percepcinTypo]}>Relaciones</Text>
      			<Image style={[styles.lauserNurseIcon, styles.patronesChild9Position]} resizeMode="cover" source="la:user-nurse.png" />
      			<Image style={styles.carbondeploymentPatternIcon} resizeMode="cover" source="carbon:deployment-pattern.png" />
    		</View>);
};

const styles = StyleSheet.create({
  	patronesChildLayout3: {
    		height: 100,
    		width: 100,
    		backgroundColor: "#003f72",
    		borderRadius: 50,
    		position: "absolute"
  	},
  	patronesChildLayout2: {
    		top: 109,
    		height: 100,
    		width: 100,
    		backgroundColor: "#003f72",
    		borderRadius: 50,
    		position: "absolute"
  	},
  	rectangleViewLayout: {
    		width: 428,
    		backgroundColor: "#003f72"
  	},
  	patronesChildLayout1: {
    		top: 543,
    		height: 100,
    		width: 100,
    		backgroundColor: "#003f72",
    		borderRadius: 50,
    		position: "absolute"
  	},
  	patronesChildLayout: {
    		top: 259,
    		height: 100,
    		width: 100,
    		backgroundColor: "#003f72",
    		borderRadius: 50,
    		position: "absolute"
  	},
  	descanzoTypo: {
    		textAlign: "left",
    		color: "#003f72",
    		fontFamily: "Inter-Bold",
    		fontWeight: "700",
    		height: 22,
    		position: "absolute"
  	},
  	congnitivoLayout: {
    		width: 102,
    		fontSize: 18
  	},
  	valoresTypo: {
    		top: 642,
    		height: 22,
    		textAlign: "left",
    		color: "#003f72",
    		fontFamily: "Inter-Bold",
    		fontWeight: "700",
    		fontSize: 18,
    		position: "absolute"
  	},
  	sexualidadTypo: {
    		top: 507,
    		height: 22,
    		textAlign: "left",
    		color: "#003f72",
    		fontFamily: "Inter-Bold",
    		fontWeight: "700",
    		position: "absolute"
  	},
  	patronesChild9Position: {
    		top: 819,
    		position: "absolute"
  	},
  	textTypo4: {
    		color: "#fff",
    		textAlign: "left",
    		fontFamily: "Inter-Bold",
    		fontWeight: "700",
    		position: "absolute"
  	},
  	textTypo3: {
    		width: 15,
    		top: 178,
    		color: "#fff",
    		height: 22,
    		textAlign: "left",
    		fontFamily: "Inter-Bold",
    		fontWeight: "700",
    		fontSize: 18,
    		position: "absolute"
  	},
  	textPosition: {
    		left: 209,
    		fontSize: 18
  	},
  	textTypo2: {
    		left: 67,
    		color: "#fff",
    		height: 22,
    		textAlign: "left",
    		fontFamily: "Inter-Bold",
    		fontWeight: "700",
    		fontSize: 18,
    		position: "absolute"
  	},
  	textTypo1: {
    		width: 17,
    		color: "#fff",
    		height: 22,
    		textAlign: "left",
    		fontFamily: "Inter-Bold",
    		fontWeight: "700",
    		fontSize: 18,
    		position: "absolute"
  	},
  	textTypo: {
    		top: 613,
    		color: "#fff",
    		height: 22,
    		textAlign: "left",
    		fontFamily: "Inter-Bold",
    		fontWeight: "700",
    		position: "absolute"
  	},
  	percepcinTypo: {
    		width: 107,
    		height: 22,
    		textAlign: "left",
    		color: "#003f72",
    		fontFamily: "Inter-Bold",
    		fontWeight: "700",
    		fontSize: 18,
    		position: "absolute"
  	},
  	patronesChild: {
    		left: 25,
    		top: 401,
    		width: 100,
    		backgroundColor: "#003f72",
    		borderRadius: 50
  	},
  	patronesItem: {
    		top: 256,
    		left: 25
  	},
  	patronesInner: {
    		left: 26
  	},
  	rectangleView: {
    		top: 0,
    		left: 0,
    		height: 86,
    		position: "absolute"
  	},
  	patronesChild1: {
    		left: 306
  	},
  	patronesChild2: {
    		left: 166
  	},
  	patronesChild3: {
    		left: 26
  	},
  	patronesChild4: {
    		left: 168
  	},
  	patronesChild5: {
    		left: 310,
    		top: 401,
    		width: 100,
    		backgroundColor: "#003f72",
    		borderRadius: 50
  	},
  	patronesChild6: {
    		left: 168,
    		top: 401,
    		width: 100,
    		backgroundColor: "#003f72",
    		borderRadius: 50
  	},
  	patronesChild7: {
    		left: 310
  	},
  	patronesChild8: {
    		left: 161
  	},
  	descanzo: {
    		left: 165,
    		height: 22,
    		width: 99,
    		fontSize: 18,
    		top: 362,
    		color: "#003f72",
    		fontFamily: "Inter-Bold",
    		fontWeight: "700"
  	},
  	congnitivo: {
    		height: 22,
    		textAlign: "left",
    		color: "#003f72",
    		fontFamily: "Inter-Bold",
    		fontWeight: "700",
    		position: "absolute",
    		top: 362,
    		left: 310
  	},
  	actividad: {
    		left: 28,
    		width: 97,
    		height: 22,
    		fontSize: 18,
    		top: 362,
    		color: "#003f72",
    		fontFamily: "Inter-Bold",
    		fontWeight: "700"
  	},
  	valores: {
    		left: 178,
    		width: 77
  	},
  	adaptacion: {
    		left: 12,
    		width: 121
  	},
  	sexualidad: {
    		left: 311,
    		width: 102,
    		fontSize: 18
  	},
  	eliminacion: {
    		left: 301,
    		width: 106,
    		top: 218,
    		height: 22,
    		fontSize: 18
  	},
  	nutricional: {
    		width: 103,
    		top: 218,
    		height: 22,
    		fontSize: 18,
    		left: 168
  	},
  	patronesChild9: {
    		left: -1,
    		height: 111,
    		width: 428,
    		backgroundColor: "#003f72"
  	},
  	dominios: {
    		left: 244,
    		width: 75,
    		fontSize: 15,
    		top: 898,
    		color: "#fff"
  	},
  	tutor: {
    		left: 355,
    		width: 44,
    		fontSize: 15,
    		top: 898,
    		color: "#fff"
  	},
  	patrones1: {
    		left: 134,
    		width: 76,
    		fontSize: 15,
    		top: 898,
    		color: "#fff"
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
    		fontSize: 15,
    		top: 898,
    		color: "#fff",
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
    		width: 104,
    		height: 42,
    		position: "absolute"
  	},
  	florens: {
    		top: 33,
    		left: 182,
    		fontSize: 22
  	},
  	text11: {
    		left: 71
  	},
  	text12: {
    		left: 349
  	},
  	text13: {
    		width: 18,
    		top: 178,
    		left: 209,
    		color: "#fff",
    		height: 22,
    		textAlign: "left",
    		fontFamily: "Inter-Bold",
    		fontWeight: "700",
    		position: "absolute"
  	},
  	text14: {
    		top: 324,
    		width: 21
  	},
  	text15: {
    		top: 327,
    		left: 356,
    		fontSize: 18
  	},
  	text16: {
    		top: 328,
    		left: 205
  	},
  	text17: {
    		top: 470,
    		width: 18
  	},
  	text18: {
    		top: 467,
    		left: 354
  	},
  	text19: {
    		top: 469,
    		left: 213,
    		width: 18,
    		height: 22,
    		fontSize: 18
  	},
  	text20: {
    		left: 65,
    		fontSize: 17,
    		width: 25
  	},
  	text21: {
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
  	percepcin: {
    		top: 218,
    		left: 25
  	},
  	autoconcepto: {
    		left: 23,
    		fontSize: 16,
    		width: 113
  	},
  	relaciones: {
    		top: 504,
    		left: 177
  	},
  	lauserNurseIcon: {
    		left: 18,
    		width: 83,
    		height: 79,
    		overflow: "hidden"
  	},
  	carbondeploymentPatternIcon: {
    		top: 828,
    		left: 137,
    		width: 63,
    		height: 61,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	patrones: {
    		backgroundColor: "#fff",
    		flex: 1,
    		width: "100%",
    		height: 926,
    		overflow: "hidden"
  	}
});

export default Patrones;
