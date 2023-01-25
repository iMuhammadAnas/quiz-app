import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='main'>
            <div className='start-box'>
                <h1>How much your <br /> friends are <br /><span className='sp-1'>🤝 Real </span>or <span className='sp-2'>Fake 🐍</span></h1>
                <img src='https://snake.youtest.me/static/img/common/home.svg' className='img' alt='image' />
                <Link to='/user-name' className='btn'>create quiz</Link>
            </div>
        </div>
    )
}

export default Home
