import * as React from "react";
import {StyleSheet, View, Image, Text} from "react-native";

const DesPatrones = () => {
  	
  	return (
    		<View style={styles.despatrones}>
      			<View style={[styles.despatronesChild, styles.despatronesChildLayout]} />
      			<Image style={[styles.streamlineinterfaceAdd1ExpIcon4, styles.streamlineinterfaceIconLayout]} resizeMode="cover" source="streamline:interface-add-1-expand-cross-buttons-button-more-remove-plus-add.png" />
      			<View style={[styles.despatronesItem, styles.despatronesPosition]} />
      			<Text style={[styles.queValora, styles.florensTypo]}>¿Que valora?</Text>
        				<Text style={styles.seRefiereA1}>Se refiere a la percepción que tiene el individuo de su estado de salud y su capacidad para controlar y manejar su propia salud</Text>
        				<Text style={[styles.percepcinManejo1, styles.florensTypo]}>Percepción – manejo de salud</Text>
        				<View style={[styles.despatronesInner, styles.despatronesPosition]} />
        				<Image style={[styles.streamlineinterfaceAdd1ExpIcon5, styles.streamlineinterfaceIconLayout]} resizeMode="cover" source="streamline:interface-add-1-expand-cross-buttons-button-more-remove-plus-add.png" />
        				<Text style={[styles.comoSeValora1, styles.comoSeValora1Typo]}>¿Como se valora?</Text>
          					<View style={[styles.rectangleView, styles.despatronesChildLayout]} />
          					<Text style={[styles.diagnosticoDeEnfermeria1, styles.comoSeValora1Typo]}>Diagnostico de Enfermeria</Text>
          					<View style={[styles.despatronesChild1, styles.despatronesChildLayout]} />
          					<Image style={[styles.streamlineinterfaceAdd1ExpIcon6, styles.streamlineinterfaceIconLayout]} resizeMode="cover" source="streamline:interface-add-1-expand-cross-buttons-button-more-remove-plus-add.png" />
          					<Text style={[styles.bibliografiaRelacionada, styles.florensTypo]}>Bibliografia Relacionada</Text>
          					<Image style={[styles.streamlineinterfaceAdd1ExpIcon7, styles.streamlineinterfaceIconLayout]} resizeMode="cover" source="streamline:interface-add-1-expand-cross-buttons-button-more-remove-plus-add.png" />
          					<View style={[styles.despatronesChild2, styles.despatronesChildPosition]} />
          					<Image style={styles.carbonuserAvatarFilledIcon1} resizeMode="cover" source="carbon:user-avatar-filled.png" />
          					<Image style={styles.marcaUtpl2018012} resizeMode="cover" source="marca UTPL 2018-01 2.png" />
          					<Text style={[styles.florens, styles.florensTypo]}>Florens</Text>
          					<Text style={[styles.patronesDeMarjory1, styles.florensTypo]}>Patrones de Marjory Gordon</Text>
          					<View style={[styles.despatronesChild3, styles.despatronesChildPosition]} />
          					<Text style={[styles.dominios, styles.tutorTypo]}>Dominios</Text>
          					<Text style={[styles.necesidades, styles.tutorTypo]}>{`Necesidades `}</Text>
          					<View style={[styles.despatronesChild4, styles.despatronesChildBg]} />
          					<Image style={styles.carbondeploymentPatternIcon} resizeMode="cover" source="carbon:deployment-pattern.png" />
          					<Text style={[styles.patrones, styles.tutorTypo]}>Patrones</Text>
          					<Text style={[styles.tutor, styles.tutorTypo]}>Tutor</Text>
          					<Image style={styles.lauserNurseIcon} resizeMode="cover" source="la:user-nurse.png" />
          					<Image style={styles.bxbookAddIcon} resizeMode="cover" source="bx:book-add.png" />
          					<Image style={styles.vectorIcon1} resizeMode="cover" source="Vector.png" />
          					</View>);
        				};
        				
        				const styles = StyleSheet.create({
          					despatronesChildLayout: {
            						height: 44,
            						borderRadius: 10
          					},
          					streamlineinterfaceIconLayout: {
            						height: 14,
            						width: 14,
            						position: "absolute",
            						overflow: "hidden"
          					},
          					despatronesPosition: {
            						left: 13,
            						backgroundColor: "#eaab00",
            						position: "absolute"
          					},
          					florensTypo: {
            						textAlign: "left",
            						fontFamily: "Inter-Bold",
            						fontWeight: "700",
            						position: "absolute"
          					},
          					comoSeValora1Typo: {
            						left: 22,
            						textAlign: "left",
            						color: "#003f72",
            						fontFamily: "Inter-Bold",
            						fontWeight: "700",
            						fontSize: 20,
            						position: "absolute"
          					},
          					despatronesChildPosition: {
            						width: 428,
            						backgroundColor: "#003f72",
            						left: 0,
            						position: "absolute"
          					},
          					tutorTypo: {
            						fontSize: 15,
            						textAlign: "left",
            						fontFamily: "Inter-Bold",
            						fontWeight: "700",
            						position: "absolute"
          					},
          					despatronesChildBg: {
            						backgroundColor: "#eaab00",
            						position: "absolute"
          					},
          					despatronesChild: {
            						top: 401,
            						width: 289,
            						height: 44,
            						borderRadius: 10,
            						backgroundColor: "#eaab00",
            						position: "absolute",
            						left: 14
          					},
          					streamlineinterfaceAdd1ExpIcon4: {
            						top: 416,
            						left: 279,
            						height: 14,
            						width: 14
          					},
          					despatronesItem: {
            						top: 187,
            						borderRadius: 20,
            						width: 92,
            						height: 92
          					},
          					queValora: {
            						top: 411,
            						color: "#003f72",
            						fontSize: 20,
            						textAlign: "left",
            						left: 30
          					},
          					seRefiereA1: {
            						top: 300,
            						left: 19,
            						fontSize: 14,
            						textAlign: "justify",
            						width: 371,
            						height: 29,
            						color: "#003f72",
            						fontFamily: "Inter-Bold",
            						fontWeight: "700",
            						position: "absolute"
          					},
          					percepcinManejo1: {
            						top: 221,
            						left: 105,
            						fontSize: 19,
            						color: "#003f72"
          					},
          					despatronesInner: {
            						top: 482,
            						height: 44,
            						borderRadius: 10,
            						width: 289
          					},
          					streamlineinterfaceAdd1ExpIcon5: {
            						top: 497,
            						left: 275
          					},
          					comoSeValora1: {
            						top: 494,
            						width: 196
          					},
          					rectangleView: {
            						top: 563,
            						width: 314,
            						backgroundColor: "#eaab00",
            						position: "absolute",
            						height: 44,
            						borderRadius: 10,
            						left: 14
          					},
          					diagnosticoDeEnfermeria1: {
            						top: 573,
            						width: 281
          					},
          					despatronesChild1: {
            						top: 644,
            						width: 289,
            						height: 44,
            						borderRadius: 10,
            						backgroundColor: "#eaab00",
            						position: "absolute",
            						left: 14
          					},
          					streamlineinterfaceAdd1ExpIcon6: {
            						top: 659,
            						left: 279,
            						height: 14,
            						width: 14
          					},
          					bibliografiaRelacionada: {
            						top: 654,
            						color: "#003f72",
            						fontSize: 20,
            						textAlign: "left",
            						left: 30
          					},
          					streamlineinterfaceAdd1ExpIcon7: {
            						top: 578,
            						left: 296
          					},
          					despatronesChild2: {
            						top: 0,
            						height: 86
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
            						left: 174,
            						fontSize: 22,
            						color: "#fff"
          					},
          					patronesDeMarjory1: {
            						top: 117,
            						left: 83,
            						color: "#003f72",
            						fontSize: 20,
            						textAlign: "left"
          					},
          					despatronesChild3: {
            						top: 817,
            						height: 111
          					},
          					dominios: {
            						left: 247,
            						width: 75,
            						top: 898,
            						fontSize: 15,
            						color: "#fff"
          					},
          					necesidades: {
            						left: 25,
            						width: 99,
            						top: 898,
            						fontSize: 15,
            						color: "#fff"
          					},
          					despatronesChild4: {
            						top: 815,
            						left: 130,
            						width: 103,
            						height: 112
          					},
          					carbondeploymentPatternIcon: {
            						top: 828,
            						left: 152,
            						width: 63,
            						height: 61,
            						position: "absolute",
            						overflow: "hidden"
          					},
          					patrones: {
            						top: 894,
            						left: 143,
            						width: 76,
            						color: "#003f72"
          					},
          					tutor: {
            						top: 899,
            						left: 354,
            						width: 44,
            						color: "#fff"
          					},
          					lauserNurseIcon: {
            						top: 819,
            						left: 35,
            						width: 83,
            						height: 79,
            						position: "absolute",
            						overflow: "hidden"
          					},
          					bxbookAddIcon: {
            						top: 825,
            						left: 250,
            						width: 62,
            						height: 64,
            						position: "absolute",
            						overflow: "hidden"
          					},
          					vectorIcon1: {
            						height: "5.4%",
            						width: "11.68%",
            						top: "89.96%",
            						right: "7.01%",
            						bottom: "4.64%",
            						left: "81.31%",
            						maxWidth: "100%",
            						maxHeight: "100%",
            						position: "absolute",
            						overflow: "hidden"
          					},
          					despatrones: {
            						backgroundColor: "#fff",
            						flex: 1,
            						width: "100%",
            						height: 926,
            						overflow: "hidden"
          					}
        				});
        				
        				export default DesPatrones;
        				