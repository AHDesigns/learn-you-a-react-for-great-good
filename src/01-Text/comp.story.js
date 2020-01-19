import React from 'react';
// import { action } from '@storybook/addon-actions';
import './style.css';
import Text from './component';

export default {
  title: '01_Text',
  component: Text,
};

export const Main = () => (
  <div className='text'>
    <p>no heading example:</p>
    <Text text="Hello Pudding" />
    <p>heading example:</p>
    <Text text="Hello Pudding" heading />
    <p>Angelica example:</p>
    <Text text="Hello Pudding" angelica />
  </div>
);
