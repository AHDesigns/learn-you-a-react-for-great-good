import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import './style.css';
import Feed from './component';

const messageList = [
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
  // {
  //   id: '890',
  //   text: 'PANDA do do do, panda do do do',
  //   clientId: '234567',
  //   timeStamp: '1580839051',
  // }
]

export default {
  title: 'Feed',
  component: Feed,

};

export function Text() {
  const [messages, setMessages] = useState(messageList);
  return (
    <div className='text'>
      <Feed messages={messages} sendMessage={setMessages} />
    </div>
  )
}
