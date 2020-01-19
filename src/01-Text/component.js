import React from 'react';
import './style.css';



function Component({ text, heading, angelica }) {
  const textToRender = angelica
    ? text.replace(/\S/g, "🐼")
    : text

  if (heading) {
    return <h2 className='test'>{textToRender}</h2>;
  }

  return <p className='test'>{textToRender}</p>;
}

export default Component;
