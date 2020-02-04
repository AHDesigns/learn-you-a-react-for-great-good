import React from 'react';
import './style.css';

const me = '123456';

const users = [
  {
    id: '987234',
    name: 'Bertrum',
    picture: 'url:/...',
  }
]
// https://www.draw.io/#G1zbx8wtys6szbTyDGzAa2gN8Wjy1hLPW_
/*
type Messages = Array<{
  id: string;
  text: string;
  clientId: string;
  timeStamp: unix-timestamp
}> */
const messages = [
  {
    id: '123',
    text: 'hellow pudding',
    clientId: '987234',
    timeStamp: '1580838486',
  },
  {
    id: '1234',
    text: 'why hello there pudding',
    clientId: '123456',
    timeStamp: '1580838894',
  },
  {
    id: '567',
    text: 'I am a panda',
    clientId: '678901',
    timeStamp: '1580839006',
  },
  {
    id: '890',
    text: 'I am too a panda',
    clientId: '234567',
    timeStamp: '1580839051',
  },
  {
    id: '890',
    text: 'PANDA do do do, panda do do do',
    clientId: '234567',
    timeStamp: '1580839051',
  }
]


function Component() {
  return (
    <div className="feed">
      <div className="messageWrapper">
        {messages.map(message => (
          <div className={
            `messageBox messageBox-${me === message.clientId ? 'Me' : 'Them'}`
          }
          >
            <p>{message.text}</p>
          </div>

        ))}

      </div>
    </div>
  )
}

export default Component;
