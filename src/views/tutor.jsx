import React, { useState, useEffect } from 'react';
import { Alert, View, ImageBackground, Image } from 'react-native';
import { GiftedChat, Send } from 'react-native-gifted-chat';
import axios from 'axios';
import { BASE_URL } from '../config';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    loadInitialMessages();
  }, []);

  const loadInitialMessages = () => {
    setMessages([
      // Ejemplo de mensaje del bot
      {
        _id: 1,
        text: 'Hola soy Lucia, ¿en que puedo ayudarte?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Asistente',
          avatar: 'https://lh3.googleusercontent.com/ogw/ANLem4anf8RVn1mOTxOoo3fB8lyB2aU2vVSUV2tpBWRZNDg=s32-c-mo',
        },
      },
    ]);
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
        avatar: 'https://lh3.googleusercontent.com/ogw/ANLem4anf8RVn1mOTxOoo3fB8lyB2aU2vVSUV2tpBWRZNDg=s32-c-mo',
      },
    };

    // Actualizar el estado de los mensajes
    setMessages((prevMessages) => GiftedChat.append(prevMessages,[botMessage,userMessage]));
    
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