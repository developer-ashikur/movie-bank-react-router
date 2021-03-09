import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className='bg-dark text-center py-3 text-white'>
            <Container>
                <h6>&copy; All rights reserved. {new Date().getFullYear()}</h6>
            </Container>
        </footer>
        
    );
};

export default Footer;