import React from 'react'
import github from '../../Assets/github.png'
import mail from '../../Assets/mail.png'
import linkedin from '../../Assets/linkedin.png'
import '../NavbarLeft/leftNav.css'
const LeftNav = () => {
    return (
        <div className='leftNav'>
            <img className="githublogo" alt="githublogo" src={github} />
            <img className="maillogo" alt="maillogo" src={mail} />
            <img className="linkedinlogo" alt="linkedinlogo" src={linkedin} />
        </div>
    )
}

export default LeftNav