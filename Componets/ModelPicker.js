import React from "react";
import {View, Text, Picker, StyleSheet, TouchableOpacity, Dimensions, ScrollView} from 'react-native'


const OPTIONS = ["Español","Ingles"];
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
const ModalPicker = (props) =>{

    const onPressItem = (option) =>{
        props.changeModalVisibility(false);
        props.setData(option);
    }
    const option = OPTIONS.map((item, index) =>{
        return (
            <TouchableOpacity
                style = {styles.option}
                key = {index}
                onPress = {() => onPressItem(item)}
            >
                <Text style={styles.text}>
                    {item}
                </Text>
            </TouchableOpacity>
        )
    })
    return(
        <TouchableOpacity
            onPress={() => props.changeModalVisibility(false)}
            style = {styles.container}
        >
            <View style = {[styles.modal, {width:WIDTH - 150, height:HEIGHT/4.2, left: 65, top: 60,}]}>
                <ScrollView>
                    {option}
                </ScrollView>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      textAlign: 'center',
      justifyContent: 'center'
    },
    modal: {
      backgroundColor: "#003F72", // Fondo con un poco más de transparencia
      borderRadius: 50,
      margin: 10,
      padding: 35,
      elevation: 15,
      borderColor: "#000",
      shadowColor: "#FFFFFF", // Sombra alrededor del modal
      shadowOpacity: 0.15, // Opacidad de la sombra
      shadowRadius: 5,
    },
    option: {
      alignItems: "flex-start",
      backgroundColor: "#EAAB00", // Fondo amarillo
      borderWidth: 1, // Borde fino
      borderColor: "#ccc", // Color del borde
      marginBottom: 10, // Espacio entre opciones
      height:50,
      borderRadius: 10,
    },
    text: {
      margin: 5,
      fontSize: 20,
      marginLeft: 60,
      marginTop: 10,
      color: "#FFF",
      fontWeight: 'bold',
    }
  });
  
export {ModalPicker}