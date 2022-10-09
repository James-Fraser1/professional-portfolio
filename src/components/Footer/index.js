import React from 'react';
import { SocialIcon } from 'react-social-icons';
import Nav from 'react-bootstrap/Nav';

function Footer() {
    return (
        <>
            <footer className='footer'>
                <Nav.Link href="#linkedIn">
                    <SocialIcon className='footerIcon' url="https://www.linkedin.com/in/jamesfraservmi22" />
                    <SocialIcon className='footerIcon' bgColor='#999999' url="https://github.com/James-Fraser1" />
                </Nav.Link>
            </footer>
        </>
    )
}

export default Footer;