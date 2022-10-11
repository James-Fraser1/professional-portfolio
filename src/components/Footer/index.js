import React from 'react';
import { SocialIcon } from 'react-social-icons';
import Nav from 'react-bootstrap/Nav';

function Footer() {
    return (
        <>
            <footer className='footer'>
                <Nav.Link href="#linkedIn">
                    <SocialIcon className='footerIcon' url="https://www.linkedin.com/in/jamesfraservmi22" />
                    <SocialIcon className='footerIcon' url="https://github.com/James-Fraser1" />
                    <SocialIcon className='footerIcon' url="https://stackoverflow.com/users/20216069/james" />
                </Nav.Link>
            </footer>
        </>
    )
}

export default Footer;