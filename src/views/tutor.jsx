import React, { useState, useEffect } from 'react';
import { Alert, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
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

  return (
    <View style={{ flex: 1 }}>
      <GiftedChat
        messages={messages}
        onSend={(newMessages) => onSend(newMessages)}
        user={{ _id: 1 }}
        placeholder="Ingresa una instrucción"
      />
    </View>
  );
};

export default ChatScreen;