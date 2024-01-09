import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { BASE_URL } from '../config';
import { GiftedChat } from 'react-native-gifted-chat';
import axios from 'axios';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Cargar mensajes iniciales o realizar otras acciones al montar el componente
    loadInitialMessages();
  }, []);

  const loadInitialMessages = () => {
    // Puedes cargar mensajes iniciales desde algún lugar, si es necesario
    // Por ejemplo, cargar mensajes de una conversación previa
    setMessages([...messages]);
  };

  const onSend = async (newMessages = []) => {
    // Enviar el nuevo mensaje al servidor
    const userMessage = newMessages[0];
    const response = await sendUserMessage(userMessage.text);

    // Obtener la respuesta del servidor y agregarla a los mensajes
    const botMessage = {
      _id: Math.random().toString(),
      text: response.data.Respuesta, // Ajusta la propiedad según la estructura de la respuesta
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'Asistente',
      },
    };

    setMessages((prevMessages) => GiftedChat.append(prevMessages, [botMessage]));
  };

  const sendUserMessage = async (text) => {
    const data = { text };

    try {
      const response = await axios.post(`${BASE_URL}/Chat/Chatbot`, {Mensaje: data});
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
      />
    </View>
  );
};

export default ChatScreen;
