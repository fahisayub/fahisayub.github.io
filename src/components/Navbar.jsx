import React from 'react';
import { Container } from '@chakra-ui/react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <Container h='60px' marginBottom='50px' padding='20px' maxW='100%' display='flex' justifyContent='space-evenly'bg='black'color='white' >
                <Link to='/'>About Me</Link>
                <Link to='/'>Skills</Link>
                <Link to='/'>Projects</Link>
                <Link to='/'>Contact</Link>
            </Container>

            
        </div>
    );
};

export default Navbar;