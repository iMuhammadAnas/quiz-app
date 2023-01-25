import React from 'react';
import './userName.css';
import MaleFemale from './MaleFemale';
import { Link } from 'react-router-dom';


class UserName extends React.Component {
  state = {
    testcomponent: false,
  }
  render() {
    return (
      <div>
        {this.state.testcomponent ? <MaleFemale /> : <div className='un-main'>
          <div className='un-box'>
            <h1>what is your <br /><span className='sp-1'>Name </span></h1>
            <img src='https://cdn-icons-png.flaticon.com/512/3094/3094866.png' alt='logo' className='un-img' />
            <Link to='/' className='btn'>create quiz</Link>
          </div>
        </div>}
      </div>
    )
  }
};

export default UserName
