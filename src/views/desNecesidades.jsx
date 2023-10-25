import * as React from "react";
import {StyleSheet, View, Image, Text} from "react-native";

const DesNecesidades = () => {
  	
  	return (
    		<View style={styles.desnecesidades}>
      			<View style={[styles.desnecesidadesChild, styles.desnecesidadesLayout]} />
      			<View style={[styles.desnecesidadesItem, styles.desnecesidadesLayout]} />
      			<Image style={styles.streamlineinterfaceAdd1ExpIcon4} resizeMode="cover" source="streamline:interface-add-1-expand-cross-buttons-button-more-remove-plus-add.png" />
      			<View style={[styles.desnecesidadesInner, styles.desnecesidadesLayout]} />
      			<View style={[styles.rectangleView, styles.desnecesidadesLayout]} />
      			<View style={styles.desnecesidadesChild1} />
      			<Text style={[styles.respirarNormalmente, styles.florensTypo]}>  1. Respirar Normalmente</Text>
      			<Text style={[styles.necesidadesDeVirginia1, styles.florensTypo]}>Necesidades de Virginia Henderson</Text>
      			<Text style={styles.capacidadDeLa1}>Capacidad de la persona para mantener el intercambio gaseoso con niveles suficientes de oxigenación</Text>
      			<Text style={[styles.objetivo, styles.florensTypo]}>Objetivo</Text>
      			<Text style={[styles.aspectosAValorar1, styles.aspectosAValorar1Typo]}>Aspectos a Valorar</Text>
      			<Text style={[styles.cuidadosAAplicar1, styles.aspectosAValorar1Typo]}>{`Cuidados A Aplicar `}</Text>
      			<Text style={[styles.bibliografiaRelacionada, styles.florensTypo]}>Bibliografia Relacionada</Text>
      			<Image style={[styles.streamlineinterfaceAdd1ExpIcon5, styles.streamlineinterfaceIconPosition]} resizeMode="cover" source="streamline:interface-add-1-expand-cross-buttons-button-more-remove-plus-add.png" />
      			<Image style={[styles.streamlineinterfaceAdd1ExpIcon6, styles.streamlineinterfaceIconPosition]} resizeMode="cover" source="streamline:interface-add-1-expand-cross-buttons-button-more-remove-plus-add.png" />
      			<Image style={[styles.streamlineinterfaceAdd1ExpIcon7, styles.streamlineinterfaceIconPosition]} resizeMode="cover" source="streamline:interface-add-1-expand-cross-buttons-button-more-remove-plus-add.png" />
      			<View style={[styles.desnecesidadesChild2, styles.desnecesidadesChildLayout]} />
      			<Image style={styles.carbonuserAvatarFilledIcon1} resizeMode="cover" source="carbon:user-avatar-filled.png" />
      			<Image style={styles.marcaUtpl2018012} resizeMode="cover" source="marca UTPL 2018-01 2.png" />
      			<Text style={[styles.florens, styles.florensTypo]}>Florens</Text>
      			<View style={[styles.desnecesidadesChild3, styles.desnecesidadesChildPosition]} />
      			<View style={[styles.desnecesidadesChild3, styles.desnecesidadesChildPosition]} />
      			<Text style={[styles.dominios, styles.tutorTypo]}>Dominios</Text>
      			<Text style={[styles.tutor, styles.tutorTypo]}>Tutor</Text>
      			<Text style={[styles.patrones, styles.tutorTypo]}>Patrones</Text>
      			<Image style={styles.carbondeploymentPatternIcon} resizeMode="cover" source="carbon:deployment-pattern.png" />
      			<Image style={styles.bxbookAddIcon} resizeMode="cover" source="bx:book-add.png" />
      			<View style={[styles.desnecesidadesChild5, styles.desnecesidadesChildPosition]} />
      			<Image style={styles.lauserNurseIcon} resizeMode="cover" source="la:user-nurse.png" />
      			<Text style={[styles.necesidades, styles.tutorTypo]}>{`Necesidades `}</Text>
      			<Image style={styles.vectorIcon1} resizeMode="cover" source="Vector.png" />
    		</View>);
};

const styles = StyleSheet.create({
  	desnecesidadesLayout: {
    		height: 44,
    		width: 289,
    		borderRadius: 10,
    		left: 23,
    		backgroundColor: "#eaab00",
    		position: "absolute"
  	},
  	florensTypo: {
    		textAlign: "left",
    		fontFamily: "Inter-Bold",
    		fontWeight: "700",
    		position: "absolute"
  	},
  	aspectosAValorar1Typo: {
    		left: 29,
    		textAlign: "left",
    		color: "#003f72",
    		fontFamily: "Inter-Bold",
    		fontWeight: "700",
    		fontSize: 20,
    		position: "absolute"
  	},
  	streamlineinterfaceIconPosition: {
    		left: 283,
    		height: 14,
    		width: 14,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	desnecesidadesChildLayout: {
    		width: 428,
    		backgroundColor: "#003f72"
  	},
  	desnecesidadesChildPosition: {
    		height: 111,
    		top: 819,
    		position: "absolute"
  	},
  	tutorTypo: {
    		fontSize: 15,
    		top: 898,
    		textAlign: "left",
    		fontFamily: "Inter-Bold",
    		fontWeight: "700",
    		position: "absolute"
  	},
  	desnecesidadesChild: {
    		top: 398
  	},
  	desnecesidadesItem: {
    		top: 475
  	},
  	streamlineinterfaceAdd1ExpIcon4: {
    		top: 490,
    		left: 282,
    		height: 14,
    		width: 14,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	desnecesidadesInner: {
    		top: 554
  	},
  	rectangleView: {
    		top: 631
  	},
  	desnecesidadesChild1: {
    		top: 171,
    		borderRadius: 20,
    		width: 92,
    		height: 92,
    		left: 28,
    		backgroundColor: "#eaab00",
    		position: "absolute"
  	},
  	respirarNormalmente: {
    		top: 205,
    		left: 142,
    		color: "#003f72",
    		fontSize: 20,
    		textAlign: "left"
  	},
  	necesidadesDeVirginia1: {
    		top: 117,
    		left: 48,
    		color: "#003f72",
    		fontSize: 20,
    		textAlign: "left"
  	},
  	capacidadDeLa1: {
    		top: 293,
    		fontSize: 16,
    		textAlign: "justify",
    		width: 354,
    		height: 70,
    		color: "#003f72",
    		fontFamily: "Inter-Bold",
    		fontWeight: "700",
    		left: 28,
    		position: "absolute"
  	},
  	objetivo: {
    		top: 406,
    		left: 34,
    		color: "#003f72",
    		fontSize: 20,
    		textAlign: "left"
  	},
  	aspectosAValorar1: {
    		top: 485,
    		width: 196
  	},
  	cuidadosAAplicar1: {
    		top: 564
  	},
  	bibliografiaRelacionada: {
    		top: 643,
    		left: 31,
    		color: "#003f72",
    		fontSize: 20,
    		textAlign: "left"
  	},
  	streamlineinterfaceAdd1ExpIcon5: {
    		top: 411
  	},
  	streamlineinterfaceAdd1ExpIcon6: {
    		top: 648
  	},
  	streamlineinterfaceAdd1ExpIcon7: {
    		top: 562
  	},
  	desnecesidadesChild2: {
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
    		top: 35,
    		left: 177,
    		fontSize: 22,
    		color: "#fff"
  	},
  	desnecesidadesChild3: {
    		left: 3,
    		width: 428,
    		backgroundColor: "#003f72"
  	},
  	dominios: {
    		left: 248,
    		width: 75,
    		color: "#fff"
  	},
  	tutor: {
    		left: 359,
    		width: 44,
    		color: "#fff"
  	},
  	patrones: {
    		left: 138,
    		width: 76,
    		color: "#fff"
  	},
  	carbondeploymentPatternIcon: {
    		top: 828,
    		left: 141,
    		width: 63,
    		height: 61,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	bxbookAddIcon: {
    		top: 824,
    		left: 249,
    		width: 62,
    		height: 64,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	desnecesidadesChild5: {
    		left: 8,
    		width: 112,
    		backgroundColor: "#eaab00",
    		height: 111
  	},
  	lauserNurseIcon: {
    		left: 22,
    		width: 83,
    		height: 79,
    		top: 819,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	necesidades: {
    		left: 14,
    		width: 99,
    		color: "#003f72"
  	},
  	vectorIcon1: {
    		height: "5.4%",
    		width: "11.68%",
    		top: "89.74%",
    		right: "5.14%",
    		bottom: "4.86%",
    		left: "83.18%",
    		maxWidth: "100%",
    		maxHeight: "100%",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	desnecesidades: {
    		backgroundColor: "#fff",
    		flex: 1,
    		width: "100%",
    		height: 926,
    		overflow: "hidden"
  	}
});

export default DesNecesidades;
