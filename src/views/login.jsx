import * as React from "react";
import {Image, StyleSheet, Text, View} from "react-native";

const Login = () => {
  	
  	return (
    		<View style={styles.login}>
      			<Image style={styles.marcaUtpl2018011} resizeMode="cover" source="../../img/logo.png" />
      			<Text style={[styles.ingreseSuContrasea1, styles.ingreseLayout]}>Ingrese su contraseña</Text>
      			<Text style={[styles.idioma, styles.idiomaTypo]}>Idioma</Text>
      			<Text style={[styles.usuario, styles.usuarioTypo]}>Usuario</Text>
      			<Text style={[styles.bienvenidoDeNuevo1, styles.usuarioTypo]}>{`Bienvenido de nuevo
`}</Text>
            <Text style={[styles.contrasea, styles.usuarioTypo]}>Contraseña</Text>
            <View style={styles.loginChild} />
            <Text style={[styles.ingresar, styles.usuarioTypo]}>Ingresar</Text>
            <View style={[styles.loginItem, styles.loginItemShadowBox]} />
            <View style={styles.loginInner} />
            <View style={[styles.rectangleView, styles.loginItemShadowBox]} />
            <Text style={[styles.ingreseSuUsuario1, styles.ingreseLayout]}>Ingrese su usuario</Text>
            <Text style={[styles.ingresaParaContinuar1, styles.idiomaTypo]}>Ingresa para continuar</Text>
            <Text style={styles.noTienesCuentaContainer}>
                <Text style={styles.noTienesCuenta1}>
                    <Text style={styles.noTienesCuenta2}>No tienes cuenta,</Text>
                </Text>
                <Text style={styles.nursinghelpTypo}>
                        <Text style={styles.noTienesCuenta1}>{` `}</Text>
                    <Text style={styles.creaUnaNueva}>Crea una nueva cuenta</Text>
                </Text>
            </Text>
            <Image style={styles.carbonuserAvatarFilledIcon} resizeMode="cover" source="../../img/user.png" />
            <Image style={[styles.materialSymbolsmailOutlineIcon1, styles.outlineIconLayout]} resizeMode="cover" source="material-symbols:mail-outline.png" />
            <Image style={[styles.mdipasswordOutlineIcon1, styles.outlineIconLayout]} resizeMode="cover" source="mdi:password-outline.png" />
            <View style={[styles.loginChild1, styles.loginChildPosition]} />
            <Text style={[styles.nursinghelp, styles.nursinghelpTypo]}>NursingHelp</Text>
            <View style={[styles.loginChild2, styles.loginChildPosition]} />
            <Image style={[styles.solararrowDownOutlineIcon1, styles.ingreseLayout]} resizeMode="cover" source="solar:arrow-down-outline.png" />
            <Image style={styles.image13Icon} resizeMode="cover" source="image 13.png" />
        </View>);
};

const styles = StyleSheet.create({
    ingreseLayout: {
        height: 17,
        position: "absolute"
    },
    idiomaTypo: {
        fontSize: 15,
        height: 17,
        textAlign: "left",
        color: "#002233",
        fontFamily: "Inter-ExtraLight",
        fontWeight: "200",
        position: "absolute"
    },
    usuarioTypo: {
        height: 47,
        fontFamily: "Inter-Bold",
        fontWeight: "700",
        textAlign: "left",
        position: "absolute"
    },
    loginItemShadowBox: {
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
        left: 63,
        position: "absolute"
    },
    outlineIconLayout: {
        height: 24,
        width: 24,
        position: "absolute",
        overflow: "hidden"
    },
    loginChildPosition: {
        top: 80,
        position: "absolute",
        backgroundColor: "#fff"
    },
    nursinghelpTypo: {
        fontFamily: "Inter-Bold",
        fontWeight: "700"
    },
    marcaUtpl2018011: {
        top: 34,
        left: 24,
        width: 104,
        height: 42,
        position: "absolute"
    },
    ingreseSuContrasea1: {
        top: 599,
        left: 78,
        width: 252,
        fontSize: 20,
        height: 17,
        textAlign: "left",
        color: "#002233",
        fontFamily: "Inter-ExtraLight",
        fontWeight: "200"
    },
    idioma: {
        left: 175,
        width: 57,
        top: 824
    },
    usuario: {
        left: 114,
        width: 181,
        height: 47,
        color: "#eaab00",
        fontSize: 20,
        top: 461
    },
    bienvenidoDeNuevo1: {
        top: 359,
        left: 82,
        fontSize: 25,
        color: "#003f72",
        width: 292
    },
    contrasea: {
        left: 109,
        top: 571,
        width: 181,
        height: 47,
        color: "#eaab00",
        fontSize: 20
    },
    loginChild: {
        top: 695,
        backgroundColor: "#003f72",
        height: 53,
        width: 294,
        borderRadius: 10,
        left: 63,
        position: "absolute"
    },
    ingresar: {
        top: 705,
        left: 162,
        fontSize: 23,
        color: "#fff",
        width: 195
    },
    loginItem: {
        top: 457
    },
    loginInner: {
        top: 813,
        left: 167,
        width: 89,
        height: 38,
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
        borderRadius: 10,
        position: "absolute"
    },
    rectangleView: {
        top: 566
    },
    ingreseSuUsuario1: {
        top: 487,
        left: 80,
        width: 252,
        fontSize: 20,
        height: 17,
        textAlign: "left",
        color: "#002233",
        fontFamily: "Inter-ExtraLight",
        fontWeight: "200"
    },
    ingresaParaContinuar1: {
        top: 390,
        left: 129,
        width: 162
    },
    noTienesCuenta2: {
        fontFamily: "Inter-ExtraLight",
        fontWeight: "200"
    },
    noTienesCuenta1: {
        color: "#002233"
    },
    creaUnaNueva: {
        color: "#eaab00"
    },
    noTienesCuentaContainer: {
        top: 767,
        width: 321,
        height: 31,
        left: 63,
        fontSize: 15,
        textAlign: "left",
        position: "absolute"
    },
    carbonuserAvatarFilledIcon: {
        top: 153,
        left: 116,
        width: 192,
        height: 201,
        position: "absolute",
        overflow: "hidden"
    },
    materialSymbolsmailOutlineIcon1: {
        left: 80,
        top: 461
    },
    mdipasswordOutlineIcon1: {
        left: 77,
        top: 571
    },
    loginChild1: {
        left: 287,
        width: 128,
        height: 22
    },
    nursinghelp: {
        top: 79,
        left: 283,
        fontSize: 22,
        color: "#20d0ce",
        textAlign: "left",
        fontWeight: "700",
        position: "absolute"
    },
    loginChild2: {
        left: 277,
        width: 141,
        height: 40
    },
    solararrowDownOutlineIcon1: {
        left: 232,
        width: 17,
        top: 824,
        overflow: "hidden"
    },
    image13Icon: {
        top: 8,
        left: 302,
        width: 109,
        height: 100,
        position: "absolute"
    },
    login: {
        flex: 1,
        width: "100%",
        height: 926,
        overflow: "hidden",
        backgroundColor: "#fff"
    }
});

export default Login;
