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
    return (
        <h1>Chat</h1>
    )
}

export default Chat;