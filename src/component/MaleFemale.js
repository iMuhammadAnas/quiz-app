import React from 'react';
import { useNavigate } from 'react-router-dom';
import './maleFemale.css';


const MaleFemale = (props) => {

  let navigate = useNavigate();
  const routeChange = () => {
    let path = '/creating';
    navigate(path)
  }


  return (
    <div className='mf-main'>
      <div className='mf-box'>
        <h1>who are you <br /> <span className='user-name'>{props.name}</span></h1>
        <div className='male-female'>
          <div className='male' onClick={routeChange}>
            <div className='m-image'>
              <img width={"130px"} src='https://snake.youtest.me/static/img/common/man.svg' alt='Boy' />
            </div>
            <h1 className='mf-text'>Boy</h1>
          </div>
          <div className='female' onClick={routeChange}>
            <div className='f-image'>
              <img width={"130px"} src='https://snake.youtest.me/static/img/common/woman.svg' alt='Girl' />
            </div>
            <h1 className='mf-text'>Girl</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MaleFemale