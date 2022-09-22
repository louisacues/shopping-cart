import React from 'react'
import { addDecorator } from '@storybook/react'
import '../src/styles/storybook.css'
import '../src/styles/fonts.css';
import './fonts.css';
import '../src/styles/custom.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'gray',
    values: [
      {
        name: 'pucha',
        value: '#d9a6a6'
      },
      {
        name: 'tengene',
        value: '#1B1B1D'
      },
      {
        name: 'arte',
        value: '#232225'
      },
      { name: 'mapute', value: '#ffffff' }
    ]
  }
}

addDecorator((story) => (
  <>
    {story()}
  </>
))