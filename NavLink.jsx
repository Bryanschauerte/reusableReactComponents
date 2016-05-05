import React from 'react'
import { Link } from 'react-router'
//use it <NavLink to="/route">title</NavLink>
const style ={
  text:{color:"green"}
}

export default React.createClass({
  render() {
    return <Link {...this.props} activeStyle={style.text}/>
  }
})
