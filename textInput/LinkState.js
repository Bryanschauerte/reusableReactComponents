import React from 'react';

export default function LinkState( component, attribute){
  return {
    value: component.state[attribute],
    set( x ){
      component.setState({[attribute] : x });
    }
  };
}
