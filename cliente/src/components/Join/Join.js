import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Join.css';
import background from '../../icons/join.jpg';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="joinOuterContainer">
      <img src={background} className="background" alt="background join" />
      <div className="joinInnerContainer">
        <h1 className="heading">Kuepa Realtime Chat💬</h1>
        <div>
          <input placeholder="Nombre de usuario" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="# de la clase
          " className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Unirse</button>
        </Link>
      </div>
    </div>
  );
}