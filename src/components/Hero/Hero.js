import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import './hero.css'
const Hero = () => {
  return (
    <div className="hero">
      <div className='background'> </div >
      <div className="h-left">
        <div className="h-name">
          <span>Hy! I Am</span>
          <span>Gunameghana Urlana</span>
          <TypeAnimation
            sequence={[
              'Frontend Developer',
              1000,
              'Mobile App Developer',
              1000,
              'Unity Developer',
              1000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block', fontFamily: 'Solway' }}
            repeat={Infinity}
          />
        </div>
        <div className='buttons'>
          <button className="button h-button">
            Hire me
          </button>
          <button className="button h-button">
            Contact
          </button>
        </div>
      </div>

    </div>
  )
}

export default Hero