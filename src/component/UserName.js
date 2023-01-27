import React from 'react';
import './userName.css';
import MaleFemale from './MaleFemale';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';



class UserName extends React.Component {
  state = {
    testcomponent: false,
    input: '',
    error: ''
  }
  render() {
    const onChange = (e) => {
      if (e.target.value.length > 15){
        e.preventDefault();
        return;
      };
      
      const letters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
      if (e.target.value.match(letters) && this.state.input.length > 1) {

        this.setState({ error: 'Symbols are not allowed' })
        console.log(e.target.value)
      } else {

        this.setState({ input: e.target.value, error: '' })
      }
    }

    const onchangeInput = () => {
      if (!this.state.input) {
        this.setState({ error: 'Your name is required' })
      }
    }
    const redirect = (e)=>{
      e.preventDefault();
      if(this.state.input ===''){
        this.setState({ error: 'Your name is required' })
        return
      }else{

        this.setState({testcomponent: true})
      }
      }

    return (
      <div>
        {this.state.testcomponent ? <MaleFemale name={this.state.input} /> : <div className='un-main'>
          <div className='un-box'>
            <h1>What is your <br /><span className='sp-1'>Name </span></h1>
            <img src='https://cdn-icons-png.flaticon.com/512/3094/3094866.png' alt='logo' className='un-img' />
            <div className='inputsec'>
              {this.state.error&& <span className='er'>{this.state.error}</span> }<br />
              <div className='input-main'>
                <div className='un-icon'>
                  <FaUser />
                </div>
                <input className='un-input' onInput={onChange} onBlur={onchangeInput} placeholder='Your name...' type='text' value={this.state.input} />
                <div className='count'>{this.state.input.length}/15</div>
              </div>

            </div>
            <Link onClick={redirect} className='btn'>create quiz</Link>
          </div>
        </div>}
      </div>
    )
  }
};

export default UserName
