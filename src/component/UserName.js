import React from 'react';
import './userName.css';
import MaleFemale from './MaleFemale';
import { Link } from 'react-router-dom';



class UserName extends React.Component {
  state = {
    testcomponent: false,
    input:'',
    error:''
  }
  render() {
    const onChange = (e)=>{
      const letters = /^[A-Za-z]+$/;
      if(!e.target.value.match(letters) && this.state.input.length){

        this.setState({error:'Symbols are not allowed'})
        console.log(e.target.value)
      }else{

        this.setState({input:e.target.value,error:''})
      }
    }
    const onchangeInput = ()=>{
      if(!this.state.input){
        this.setState({error:'Please write Your user Name'})
      }
    }
    return (
      <div>
        {this.state.testcomponent ? <MaleFemale /> : <div className='un-main'>
          <div className='un-box'>
            <h1>what is your <br /><span className='sp-1'>Name </span></h1>
            <img src='https://cdn-icons-png.flaticon.com/512/3094/3094866.png' alt='logo' className='un-img' />
            <div className='inputsec'>
              <span>{this.state.error}</span> <br/>
              <input onChange={onChange} onBlur={onchangeInput} type='text' width={20} />

            </div>
            <Link to='/' className='btn'>create quiz</Link>
          </div>
        </div>}
      </div>
    )
  }
};

export default UserName
