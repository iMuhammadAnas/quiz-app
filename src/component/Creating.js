import React from 'react'
import { HiArrowCircleRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import './creating.css'

const Creating = () => {
    return (
        <div className='c-main'>
            <div className='c-box'>
                <h2>🎉 Quiz Ready!</h2>
                <img width='150px' src='https://png.pngtree.com/png-vector/20220811/ourmid/pngtree-drunk-business-woman-vector-png-image_5840540.png' />
                <p>now, send quiz link to your friends</p>
                <div className='c-btn-main'>
                    <Link className='c-btn' to='/share'>Share Quiz <HiArrowCircleRight className='c-icon' /></Link>
                </div>
            </div>
        </div>
    )
}

export default Creating
