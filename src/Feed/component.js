import React, { useState, useEffect } from 'react';
import './style.css';

const me = '123456';

const users = [
  {
    id: '987234',
    name: 'Bertrum',
    picture: 'url:/...',
  }
]

function Feed({ messages, sendMessage }) {
  const [userMessage, setUserMessage] = useState("Hello pudding");
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
      <div className="feedInput">
        <form onSubmit={(e) => {
          e.preventDefault();
          sendMessage((oldMessages) => oldMessages.concat({
            text: userMessage
          }))
        }
        }>
          <label>
            <textarea value={userMessage} onChange={(e) => { setUserMessage(e.target.value); }} />
          </label>
          <button>

          </button>
        </form>
      </div>
    </div>
  )
}

export default Feed;
