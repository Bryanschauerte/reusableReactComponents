import React from 'react';
import LinkState from './LinkState';

const TextInput({ valuesLink, ...props}) => (
  <input {...props}
    type="text"
    value={valuesLink.value}
    onChange= { e => valuesLink.set( e.target.value)}
    />
)
