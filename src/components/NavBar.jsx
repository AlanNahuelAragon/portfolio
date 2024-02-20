import { useEffect } from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/Alan-logo.png';
import navLinkedin from '../assets/img/socials/nav-linkedin.png';
import navGmail from '../assets/img/socials/nav-gmail.png';
import navGit from '../assets/img/socials/nav-git.png';


export const NavBar = () => {

    const [activeLink, SetActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener('scroll',onScroll);

        return () => window.removeEventListener('scroll',onScroll);

    }, [])

    const onUpdateActiveLink = (value)=>{
        SetActiveLink(value);
    }

    return (
        <Navbar expand="lg" className= {scrolled ? 'scrolled':''} >{/*className="bg-body-tertiary"*/}
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt='Alan-Aragon-Dev' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink==='home'?'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink==='skills'?'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#about" className={activeLink==='about'?'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('about')}>About</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href="https://www.linkedin.com/in/developer-alan-aragon/">
                                <img src={navLinkedin} alt='LinkedIn' />
                            </a>
                            <a href="#" onClick={() => { window.open(`mailto:${import.meta.env.VITE_CONTACT_EMAIL}`)  }}>
                                <img src={navGmail} alt='Gmail' />
                            </a>
                            <a href="https://github.com/AlanNahuelAragon">
                                <img src={navGit} alt='Github' />
                            </a>
                        </div>

                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );


}