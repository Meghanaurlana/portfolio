import React from 'react';
import '../About/About.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

const About = () => {
  return (
    <div className='about'>
      <div className='Overview'>
      <span>Overview</span>
<span >
        I'm a skilled software developer with experience in 
        JavaScript, and React I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
</span>
<div className='Progress-bar'>
  <div className='Progress-bar-left'>
       <h3>Html</h3>
      <ProgressBar variant="secondary" now={80} />
      <h3>Css</h3>
      <ProgressBar variant="secondary" now={80} />
      <h3>Javascript</h3>
      <ProgressBar variant="secondary" now={70} />
      <h3>React</h3>
      <ProgressBar variant="secondary" now={75} />
  </div>
  <div className='Progress-bar-right'>
      <h3>Java</h3>
      <ProgressBar variant="secondary" now={50} />
      <h3>SpringBoot</h3>
      <ProgressBar variant="secondary" now={50} />
      <h3>MySQL</h3>
      <ProgressBar variant="secondary" now={60} />
      <h3>unity</h3>
      <ProgressBar variant="secondary" now={60} />
   </div>
</div>
      </div>

    </div>
  )
}

export default About
