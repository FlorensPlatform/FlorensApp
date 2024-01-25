import React, { useState, useEffect, useContext } from 'react';
import { Alert, View, ImageBackground, Image } from 'react-native';
import { GiftedChat, Send } from 'react-native-gifted-chat';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { BASE_URL } from '../config';
import { AuthContext } from "../../context/AuthContext";

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [Data, setData] = useState("");
  const {checkUserAuthentication} = useContext(AuthContext);
  useEffect(() => {
    checkUserAuthentication();
    loadInitialMessages();
    const intervalId = setInterval(() => {
      checkUserAuthentication();
    }, 2000); 
    
    return () => clearInterval(intervalId);
  }, []);

  const loadInitialMessages = async () => {
    const stored = await AsyncStorage.getItem('userData');
    const userData = JSON.parse(stored);
    setData(userData.usuario);
    console.log(Data);
    try {
      const storedMessages = await AsyncStorage.getItem('chat_history'+userData.usuario);

      if (storedMessages) {
        // Si hay mensajes almacenados
        setMessages(JSON.parse(storedMessages));
        console.log(JSON.parse(storedMessages));
      } else {
        // Si no hay mensajes almacenados
        setMessages([
          {
            _id: 1,
            text: 'Hola soy Lucia, ¿en qué puedo ayudarte?',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'Asistente',
              avatar: 'https://lh3.googleusercontent.com/ogw/ANLem4anf8RVn1mOTxOoo3fB8lyB2aU2vVSUV2tpBWRZNDg=s32-c-mo',
            },
          },
        ]);
      }
    } catch (error) {
      console.error('Error al cargar mensajes iniciales:', error);
    }
  };

  const onSend = async (newMessages = []) => {
    const userMessage = newMessages[0];
    const response = await sendUserMessage(userMessage.text);

    // Obtener la respuesta del servidor y agregarla a los mensajes
    const botMessage = {
      _id: Math.random().toString(),
      text: response.data.Respuesta,
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'Asistente',
        avatar: 'https://i.pinimg.com/236x/cd/d0/98/cdd098f38ca5c29c2fd88936e3339004.jpg',
      },
    };

    // Actualizar el estado de los mensajes
    setMessages((prevMessages) => GiftedChat.append(prevMessages,[botMessage,userMessage]));
    saveMessagesToStorage([...messages, botMessage, userMessage]);
  };

  const sendUserMessage = async (text) => {
    const data = { text };

    try {
      // Realizar la solicitud POST al servidor con el texto del usuario
      const response = await axios.post(`${BASE_URL}/Chat/Chatbot`, { Mensaje: data });

      // Imprimir la respuesta del servidor (útil para depurar)
      console.log('Respuesta del servidor:', response.data);
      console.log(messages);
      return response;
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      throw error;
    }
  };
  const saveMessagesToStorage = async (messagesToSave) => {
    try {
      // Guarda los mensajes en AsyncStorage como una cadena JSON
      const valor = AsyncStorage.setItem('chat_history'+Data, JSON.stringify(messagesToSave));
      console.log(valor);
    } catch (error) {
      console.error('Error al guardar mensajes en AsyncStorage:', error);
    }
  };

  const renderSend = (props)=>{
    return (
      <Send {... props}>
        <View>
          <Image source={require('../../img/enviar.png')} style={{width: 30, height: 30, marginBottom: 7, marginRight: 8}}>
          </Image>
        </View>
      </Send>
    )
  }
  return (
    <ImageBackground source={require('../../img/fondo.jpg')} 
      style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'transparent'}}>
        <GiftedChat
          messages={messages}
          onSend={(newMessages) => onSend(newMessages)}
          user={{ _id: 1 }}
          placeholder="Ingresa una instrucción"
          renderSend={renderSend}
        />
    </View>
    </ImageBackground>
  );
};

export default ChatScreen;