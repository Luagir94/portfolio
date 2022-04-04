import React, { useState, useEffect, useContext } from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import { Home, Folders, User, Mail, BrandLinkedin, BrandTwitter, BrandGithub, Menu2, FileDownload } from 'tabler-icons-react';
import Fade from 'react-reveal/Fade';
import resume from '../../Assets/cvLucianoGiraudi.pdf'
import PortfolioContext from '../../Context/PortfolioContext';
const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [orientation, setOrientation] = useState('portrait');
  const [show, setShow] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const { userId } = useContext(PortfolioContext);
  const toggleNav = () => {
    if (!toggle) {
      setToggle(true)
      setTimeout(() => {
        setToggleMenu(!toggleMenu)
      }, 100);
    } else {
      setToggleMenu(!toggleMenu)
      setTimeout(() => {
        setToggle(false)

      }, 500);
    }







  }
  const handleRotation = () => {
    setOrientation(window.matchMedia)
  }
  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    handleRotation()
    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [])


  return (<>
    <header className='navBar'>
      {(screenWidth > 768) && (
        <>

          <nav className='navBar__nav'>
            <ol className='navBar__nav-list'>
              <li className='navBar__nav-list-item'><Link className='navBar__nav-list-item-link' title='home' to={`/`}><Home size={48} strokeWidth={2} color={'#F5F5F5'} />Home</Link></li>
              <li className='navBar__nav-list-item'><Link className='navBar__nav-list-item-link' title='proyects' to={`/projects`}><Folders size={48} strokeWidth={2} color={'#F5F5F5'} />My Projects</Link></li>
              <li className='navBar__nav-list-item'><Link className='navBar__nav-list-item-link' title='about me' to={`/aboutMe`}><User size={48} strokeWidth={2} color={'#F5F5F5'} />About Me</Link></li>
              <li className='navBar__nav-list-item'><Link className='navBar__nav-list-item-link' title='contact' to={`/contact`}><Mail size={48} strokeWidth={2} color={'#F5F5F5'} />Contact</Link></li>
              <li className='navBar__nav-list-item'><a className='navBar__nav-list-item-link' title='resume' href={resume} download onClick={() => window.dataLayer.push({ 'event': 'descargaCV', 'userId': userId })}><FileDownload size={48} strokeWidth={2} color={'#F5F5F5'} />Download CV</a></li>
            </ol>
          </nav>

          {(screenWidth > 768) &&


            (<nav className='navBar__social'>
              <ol className='navBar__social-list'>
                <li className='navBar__social-list-item'><a className='navBar__social-list-item-link' title='linkedin' target={`_blank`} href="https://www.linkedin.com/feed/" onClick={() => window.dataLayer.push({ 'event': 'visitaLinkedinHeader', 'userId': userId })}><BrandLinkedin size={48} strokeWidth={2} color={'#F5F5F5'} />LinkedIn</a></li>
                <li className='navBar__social-list-item'><a className='navBar__social-list-item-link' title='github' target={`_blank`} href="https://github.com/Luagir94" onClick={() => window.dataLayer.push({ 'event': 'visitaGitHubHeader', 'userId': userId })}>< BrandGithub size={48} strokeWidth={2} color={'#F5F5F5'} />GitHub</a></li>
                <li className='navBar__social-list-item'><a className='navBar__social-list-item-link' title='twitter' target={`_blank`} href="https://twitter.com/home" onClick={() => window.dataLayer.push({ 'event': 'visitaTwitterHeader', 'userId': userId })}><  BrandTwitter size={48} strokeWidth={2} color={'#F5F5F5'} />Twitter</a></li>

              </ol>
            </nav>)}
        </>
      )}
      {(screenWidth <= 768 && toggle) &&

        <Fade left when={toggleMenu} >
          <nav className='navBar__nav'>
            <ol className='navBar__nav-list'>
              <li className='navBar__nav-list-item'><Link className='navBar__nav-list-item-link' title='home' to={`/`}><Home size={48} strokeWidth={2} color={'#F5F5F5'} />Home</Link></li>
              <li className='navBar__nav-list-item'><Link className='navBar__nav-list-item-link' title='proejcts' to={`/projects`}><Folders size={48} strokeWidth={2} color={'#F5F5F5'} />My Projects</Link></li>
              <li className='navBar__nav-list-item'><Link className='navBar__nav-list-item-link' title='about me' to={`/aboutMe`}><User size={48} strokeWidth={2} color={'#F5F5F5'} />About Me</Link></li>
              <li className='navBar__nav-list-item'><Link className='navBar__nav-list-item-link' title='contact' to={`/contact`}><Mail size={48} strokeWidth={2} color={'#F5F5F5'} />Contact</Link></li>
              <li className='navBar__nav-list-item'><a className='navBar__nav-list-item-link' title='resume' href={resume} download><FileDownload size={48} strokeWidth={2} color={'#F5F5F5'} />Download CV</a></li>
            </ol>
          </nav>

        </Fade>
      }
      {(screenWidth <= 768) && (
        <>
          <div className={`navBar__divButton`}>
            <button onClick={toggleNav} className={`navBar__divButton-button`}><Menu2 size={40} strokeWidth={3} onClick={toggleNav} color={'#F5F5F5'} /></button>
          </div>

        </>
      )}

    </header>
  </>
  )
}

export default NavBar