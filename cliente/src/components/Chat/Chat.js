import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";

import './Chat.css';

let socket;

const Chat = ({ location }) => {

    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const [users, setUsers] = useState("");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    
    useEffect(() => {
        socket.on('message', message => {
          setMessages(messages => [ ...messages, message ]);
        });
        
        socket.on("roomData", ({ users }) => {
          setUsers(users);
        });
    }, []);
    
      const sendMessage = (event) => {
        event.preventDefault();
    
        if(message) {
          socket.emit('sendMessage', message, () => setMessage(''));
        }
      }

    return (
        <h1>Chat</h1>
    )
}

export default Chat;