import React from 'react';
import TextInput from './TextInput';
import LinkState from './LinkState';

const AddUser = React.createClass({

  getInitialState(){
    return{
      name: '',
      email: '',
      isActive: true
    }
  },
  //two ways
  render(){
    const {state} = this;
    return(
      <form onSubmit ={this.onSubmit}>
        <label>
          Name:
          <TextInput
            valuesLink= {LinkState(this, 'name') }/>

        </label>
        <label>
          email:
          <input
            type="text"
            value={state.email}
            onChange={e=> this.setState({email: e.target.value})} />
        </label>
        <label>
          Is Active:
          <input
            type="checkbox"
            checked={state.isActive}
            onChange={e=> this.setState({isActive: e.target.checked})} />
        </label>
        <button type="submit">Add User </button>
      </form>
    );
  },
  onSubmit(){
console.log('')
  }
})
module.export = AddUser;
