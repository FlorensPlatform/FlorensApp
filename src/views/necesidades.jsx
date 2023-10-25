import * as React from "react";
import {StyleSheet, View, Text, Image} from "react-native";

const Necesidades = () => {
  	
  	return (
    		<View style={styles.necesidades}>
      			<View style={[styles.necesidadesChild, styles.necesidadesChildLayout3]} />
      			<View style={[styles.necesidadesItem, styles.necesidadesLayout1]} />
      			<View style={[styles.necesidadesInner, styles.necesidadesLayout]} />
      			<View style={[styles.rectangleView, styles.necesidadesLayout1]} />
      			<View style={[styles.necesidadesChild1, styles.necesidadesLayout1]} />
      			<View style={[styles.necesidadesChild2, styles.necesidadesChildLayout2]} />
      			<Text style={[styles.text14, styles.textTypo4]}>13</Text>
      			<View style={[styles.necesidadesChild3, styles.necesidadesChildLayout2]} />
      			<Text style={[styles.ocio, styles.ocioTypo]}>Ocio</Text>
      			<View style={[styles.necesidadesChild4, styles.necesidadesChildLayout1]} />
      			<View style={[styles.necesidadesChild5, styles.necesidadesChildLayout1]} />
      			<View style={[styles.necesidadesChild6, styles.necesidadesChildLayout1]} />
      			<View style={[styles.necesidadesChild7, styles.necesidadesChildPosition1]} />
      			<View style={[styles.necesidadesChild8, styles.necesidadesChildPosition1]} />
      			<View style={[styles.necesidadesChild9, styles.necesidadesChildPosition1]} />
      			<View style={[styles.necesidadesChild10, styles.necesidadesChildLayout]} />
      			<View style={[styles.necesidadesChild11, styles.necesidadesChildLayout]} />
      			<Text style={[styles.respirar, styles.textTypo4]}>Respirar</Text>
      			<Text style={[styles.dormir, styles.dormirTypo]}>Dormir</Text>
      			<Text style={[styles.vestirse, styles.dormirTypo]}>Vestirse</Text>
      			<Text style={[styles.moverse, styles.dormirTypo]}>Moverse</Text>
      			<Text style={[styles.autorealizacion, styles.valoresTypo]}>Autorealizacion</Text>
      			<Text style={[styles.valores, styles.valoresTypo]}>Valores</Text>
      			<Text style={[styles.comunicarse, styles.valoresTypo]}>Comunicarse</Text>
      			<Text style={[styles.aprender, styles.ocioTypo]}>Aprender</Text>
      			<Text style={[styles.peligros, styles.textTypo4]}>Peligros</Text>
      			<Text style={[styles.higiene, styles.beberTypo]}>Higiene</Text>
      			<Text style={[styles.temperatura, styles.textTypo4]}>Temperatura</Text>
      			<Text style={[styles.eliminar, styles.textTypo4]}>Eliminar</Text>
      			<Text style={[styles.beber, styles.beberTypo]}>Beber</Text>
      			<View style={[styles.necesidadesChild12, styles.necesidadesChildPosition]} />
      			<Text style={[styles.dominios, styles.tutorTypo]}>Dominios</Text>
      			<Text style={[styles.tutor, styles.tutorTypo]}>Tutor</Text>
      			<Text style={[styles.patrones, styles.tutorTypo]}>Patrones</Text>
      			<Image style={styles.carbondeploymentPatternIcon} resizeMode="cover" source="carbon:deployment-pattern.png" />
      			<Image style={styles.bxbookAddIcon} resizeMode="cover" source="bx:book-add.png" />
      			<View style={[styles.necesidadesChild13, styles.necesidadesChildPosition]} />
      			<Image style={styles.lauserNurseIcon} resizeMode="cover" source="la:user-nurse.png" />
      			<Text style={[styles.necesidades1, styles.tutorTypo]}>{`Necesidades `}</Text>
      			<Image style={styles.carbonuserAvatarFilledIcon1} resizeMode="cover" source="carbon:user-avatar-filled.png" />
      			<Image style={styles.marcaUtpl2018012} resizeMode="cover" source="marca UTPL 2018-01 2.png" />
      			<Text style={[styles.florens, styles.text19Typo]}>Florens</Text>
      			<Text style={[styles.text15, styles.textTypo3]}>1</Text>
      			<Text style={[styles.text16, styles.textTypo3]}>3</Text>
      			<Text style={styles.text17}>2</Text>
      			<Text style={[styles.text18, styles.textTypo2]}>4</Text>
      			<Text style={[styles.text19, styles.text19Typo]}>6</Text>
      			<Text style={[styles.text20, styles.textTypo1]}>5</Text>
      			<Text style={[styles.text21, styles.textTypo2]}>7</Text>
      			<Text style={[styles.text22, styles.textTypo1]}>9</Text>
      			<Text style={[styles.text23, styles.textTypo4]}>8</Text>
      			<Text style={[styles.text24, styles.textTypo]}>10</Text>
      			<Text style={[styles.text25, styles.textTypo4]}>12</Text>
      			<Text style={[styles.text26, styles.textTypo]}>11</Text>
      			<Text style={[styles.text27, styles.textTypo4]}>{`14
`}</Text>
            <Image style={styles.vectorIcon1} resizeMode="cover" source="Vector.png" />
        </View>);
};

const styles = StyleSheet.create({
    necesidadesChildLayout3: {
        height: 100,
        borderRadius: 50
    },
    necesidadesLayout1: {
        top: 109,
        height: 100,
        width: 100,
        backgroundColor: "#003f72",
        borderRadius: 50,
        position: "absolute"
    },
    necesidadesLayout: {
        width: 428,
        backgroundColor: "#003f72"
    },
    necesidadesChildLayout2: {
        top: 685,
        height: 100,
        width: 100,
        backgroundColor: "#003f72",
        borderRadius: 50,
        position: "absolute"
    },
    textTypo4: {
        height: 22,
        textAlign: "left",
        fontFamily: "Inter-Bold",
        fontWeight: "700",
        position: "absolute"
    },
    ocioTypo: {
        top: 784,
        color: "#003f72",
        fontSize: 18,
        height: 22,
        textAlign: "left",
        fontFamily: "Inter-Bold",
        fontWeight: "700",
        position: "absolute"
    },
    necesidadesChildLayout1: {
        top: 543,
        height: 100,
        width: 100,
        backgroundColor: "#003f72",
        borderRadius: 50,
        position: "absolute"
    },
    necesidadesChildPosition1: {
        top: 401,
        width: 100,
        backgroundColor: "#003f72",
        position: "absolute"
    },
    necesidadesChildLayout: {
        top: 259,
        height: 100,
        width: 100,
        backgroundColor: "#003f72",
        borderRadius: 50,
        position: "absolute"
    },
    dormirTypo: {
        top: 358,
        width: 77,
        color: "#003f72",
        fontSize: 18,
        height: 22,
        textAlign: "left",
        fontFamily: "Inter-Bold",
        fontWeight: "700",
        position: "absolute"
    },
    valoresTypo: {
        top: 642,
        color: "#003f72",
        fontSize: 18,
        height: 22,
        textAlign: "left",
        fontFamily: "Inter-Bold",
        fontWeight: "700",
        position: "absolute"
    },
    beberTypo: {
        left: 191,
        color: "#003f72",
        fontSize: 18,
        height: 22,
        textAlign: "left",
        fontFamily: "Inter-Bold",
        fontWeight: "700",
        position: "absolute"
    },
    necesidadesChildPosition: {
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
    text19Typo: {
        textAlign: "left",
        fontFamily: "Inter-Bold",
        fontWeight: "700",
        color: "#fff",
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
    necesidadesChild: {
        top: 256,
        width: 100,
        backgroundColor: "#003f72",
        height: 100,
        borderRadius: 50,
        left: 25,
        position: "absolute"
    },
    necesidadesItem: {
        left: 26
    },
    necesidadesInner: {
        top: 0,
        left: 0,
        height: 86,
        position: "absolute"
    },
    rectangleView: {
        left: 306
    },
    necesidadesChild1: {
        left: 166
    },
    necesidadesChild2: {
        left: 26
    },
    text14: {
        width: 25,
        fontSize: 17,
        color: "#fff",
        left: 65,
        top: 756,
        height: 22
    },
    necesidadesChild3: {
        left: 168
    },
    ocio: {
        left: 50,
        width: 46,
        color: "#003f72",
        fontSize: 18
    },
    necesidadesChild4: {
        left: 26
    },
    necesidadesChild5: {
        left: 310
    },
    necesidadesChild6: {
        left: 168
    },
    necesidadesChild7: {
        borderRadius: 75,
        height: 92,
        top: 401,
        left: 25
    },
    necesidadesChild8: {
        left: 310,
        height: 100,
        borderRadius: 50,
        top: 401
    },
    necesidadesChild9: {
        left: 168,
        height: 100,
        borderRadius: 50,
        top: 401
    },
    necesidadesChild10: {
        left: 310
    },
    necesidadesChild11: {
        left: 161
    },
    respirar: {
        width: 77,
        left: 33,
        top: 214,
        color: "#003f72",
        fontSize: 18
    },
    dormir: {
        left: 181
    },
    vestirse: {
        left: 323
    },
    moverse: {
        left: 33
    },
    autorealizacion: {
        left: 286,
        width: 142
    },
    valores: {
        left: 178,
        width: 77
    },
    comunicarse: {
        left: 12,
        width: 121
    },
    aprender: {
        left: 175,
        width: 85,
        color: "#003f72",
        fontSize: 18
    },
    peligros: {
        left: 324,
        top: 500,
        width: 77,
        color: "#003f72",
        fontSize: 18
    },
    higiene: {
        top: 500,
        width: 77
    },
    temperatura: {
        left: 14,
        width: 120,
        top: 500,
        color: "#003f72",
        fontSize: 18
    },
    eliminar: {
        left: 319,
        width: 77,
        top: 214,
        color: "#003f72",
        fontSize: 18
    },
    beber: {
        width: 58,
        top: 214
    },
    necesidadesChild12: {
        left: -1,
        width: 428,
        backgroundColor: "#003f72"
    },
    dominios: {
        left: 244,
        width: 75,
        color: "#fff"
    },
    tutor: {
        left: 355,
        width: 44,
        color: "#fff"
    },
    patrones: {
        left: 134,
        width: 76,
        color: "#fff"
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
    necesidadesChild13: {
        left: 4,
        backgroundColor: "#eaab00",
        width: 112
    },
    lauserNurseIcon: {
        left: 18,
        width: 83,
        height: 79,
        top: 819,
        position: "absolute",
        overflow: "hidden"
    },
    necesidades1: {
        left: 10,
        width: 99,
        color: "#003f72"
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
        top: 40,
        left: 171,
        fontSize: 22
    },
    text15: {
        left: 71
    },
    text16: {
        left: 349
    },
    text17: {
        width: 18,
        left: 209,
        top: 178,
        fontSize: 18,
        height: 22,
        textAlign: "left",
        color: "#fff",
        fontFamily: "Inter-Bold",
        fontWeight: "700",
        position: "absolute"
    },
    text18: {
        width: 21,
        top: 324
    },
    text19: {
        left: 356,
        top: 324,
        fontSize: 18
    },
    text20: {
        top: 328,
        left: 205
    },
    text21: {
        top: 463,
        width: 18
    },
    text22: {
        top: 467,
        left: 354
    },
    text23: {
        top: 469,
        left: 213,
        width: 18,
        fontSize: 18,
        color: "#fff"
    },
    text24: {
        width: 25,
        fontSize: 17,
        left: 65
    },
    text25: {
        top: 612,
        left: 351,
        width: 27,
        fontSize: 18,
        color: "#fff"
    },
    text26: {
        width: 22,
        left: 209,
        fontSize: 18
    },
    text27: {
        left: 209,
        width: 25,
        fontSize: 17,
        color: "#fff",
        top: 756,
        height: 22
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
    necesidades: {
        backgroundColor: "#fff",
        flex: 1,
        width: "100%",
        height: 926,
        overflow: "hidden"
    }
});

export default Necesidades;
