import React from 'react';

import './Input.css';
import sendButton from '../../icons/send-button.png';

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Escribe un mensaje..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <button className="sendButton" onClick={e => sendMessage(e)}><img src={sendButton} alt="online icon" /></button>
  </form>
)

export default Input;