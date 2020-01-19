import React from 'react';
import { action } from '@storybook/addon-actions';
import './style.css';
import Button from './component';

export default {
  title: '02-Button',
  component: Button,
};

export const Text = () => (
  <div className='text'>
    <Button onClick={(e) => { console.log("Clickedy click") }}>I am a Button</ Button>
    <Button
      onClick={action('I was clicked! 🐼')}
      type="primary"
    >
      I am a Button
    </ Button>
    <Button
      type="disabled"
      onClick={action('I was clicked! 🐼')}
    >
      I am a panda
    </ Button>
  </div>
);
