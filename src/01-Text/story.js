import React from 'react';
import { action } from '@storybook/addon-actions';
import './style.css';
import Component from './component';

export default {
  title: '01_Text',
  component: Component,
};

export const Text = () => (
  <div className='text'>
    <Component onClick={action('clicked')} />
  </div>
);
