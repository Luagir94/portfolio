import React, { useState, useEffect, useContext,useCallback } from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import { Home, Folders, User, Mail, BrandLinkedin, BrandTwitter, BrandGithub, Menu2, FileDownload } from 'tabler-icons-react';
import Fade from 'react-reveal/Fade';
import PortfolioContext from '../../Context/PortfolioContext';
import Flag  from 'react-world-flags'
import resume from '../../Assets/resumeLucianoGiraudi.pdf'
const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [orientation, setOrientation] = useState('portrait');
  const [toggle, setToggle] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const handleWindowResize = useCallback(event => {

    setScreenWidth(window.innerWidth);

}, []); 
  const { userId, setLenguage , lenguage } = useContext(PortfolioContext);
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
  
  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [handleWindowResize]);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [window.innerWidth])



useEffect(() => {
  screenWidth <= 980 ? setToggleMenu(false) : setToggleMenu(true)
  screenWidth <= 980 ? setToggle(false) : setToggle(true)
}, [screenWidth]);

  return (<>
    <header className='navBar'>
      {(screenWidth > 980) && (
        <>

          <nav className='navBar__nav'>
            <ol className='navBar__nav-list'>
            <Flag title='esFlag' alt='esFlag' code="es" height="25"  width='50' onClick={() => setLenguage('es')}/>
              <Flag title='gbFlag' alt='gbFlag' code="gb" height="25" width='40' onClick={() => setLenguage('en')} />
              <li className='navBar__nav-list-item'><Link className='navBar__nav-list-item-link' title='home' to={`/`}><Home size={48} strokeWidth={2} color={'#F5F5F5'} />{lenguage ==='en' ? 'Home'  : 'Inicio' }</Link></li>
              <li className='navBar__nav-list-item'><Link className='navBar__nav-list-item-link' title='projects' to={`/projects`}><Folders size={48} strokeWidth={2} color={'#F5F5F5'} />{lenguage ==='en' ? 'My Projects'  :'Mis Proyectos'}</Link></li>
              <li className='navBar__nav-list-item'><Link className='navBar__nav-list-item-link' title='about me' to={`/aboutMe`}><User size={48} strokeWidth={2} color={'#F5F5F5'} />{lenguage ==='en' ? 'About Me'  :'Sobre Mi'}</Link></li>
              <li className='navBar__nav-list-item'><Link className='navBar__nav-list-item-link' title='contact' to={`/contact`}><Mail size={48} strokeWidth={2} color={'#F5F5F5'} />{lenguage ==='en' ? 'Contact'  :'Contacto'}</Link></li>
              <li className='navBar__nav-list-item'><a className='navBar__nav-list-item-link' title='resume' href={resume} download onClick={() => window.dataLayer.push({ 'event': 'descargaCV', 'userId': userId })}><FileDownload size={48} strokeWidth={2} color={'#F5F5F5'} />{lenguage ==='en' ? 'Download Resume'  :'Descargar CV'}</a></li>
              
              
              
            </ol>
          </nav>

          {(screenWidth > 980) ?
            (<nav className='navBar__social'>
              <ol className='navBar__social-list'>
                <li className='navBar__social-list-item'><a className='navBar__social-list-item-link' title='linkedin' target={`_blank`} href="https://www.linkedin.com/in/lucianogiraudi/" onClick={() => window.dataLayer.push({ 'event': 'visitaLinkedinHeader', 'userId': userId })}><BrandLinkedin size={48} strokeWidth={2} color={'#F5F5F5'} />LinkedIn</a></li>
                <li className='navBar__social-list-item'><a className='navBar__social-list-item-link' title='github' target={`_blank`} href="https://github.com/Luagir94" onClick={() => window.dataLayer.push({ 'event': 'visitaGitHubHeader', 'userId': userId })}>< BrandGithub size={48} strokeWidth={2} color={'#F5F5F5'} />GitHub</a></li>
                <li className='navBar__social-list-item'><a className='navBar__social-list-item-link' title='twitter' target={`_blank`} href="https://twitter.com/LuagirDev" onClick={() => window.dataLayer.push({ 'event': 'visitaTwitterHeader', 'userId': userId })}><  BrandTwitter size={48} strokeWidth={2} color={'#F5F5F5'} />Twitter</a></li>
              </ol>
            </nav>) : null}
        </>
      )}
      {(screenWidth <= 980 && toggle) &&

        <Fade left when={toggleMenu} >
          <nav className='navBar__nav'>
            <ol className='navBar__nav-list'>
              <li className='navBar__nav-list-item' onClick={toggleNav}><Link className='navBar__nav-list-item-link' title='home' to={`/`}><Home size={48} strokeWidth={2} color={'#F5F5F5'} />{lenguage ==='en' ? 'Home'  : 'Inicio' }</Link></li>
              <li className='navBar__nav-list-item' onClick={toggleNav}><Link className='navBar__nav-list-item-link' title='proejcts' to={`/projects`}><Folders size={48} strokeWidth={2} color={'#F5F5F5'} />{lenguage ==='en' ? 'My Projects'  :'Mis Proyectos'}</Link></li>
              <li className='navBar__nav-list-item' onClick={toggleNav}><Link className='navBar__nav-list-item-link' title='about me' to={`/aboutMe`}><User size={48} strokeWidth={2} color={'#F5F5F5'} />{lenguage ==='en' ? 'About Me'  :'Sobre Mi'}</Link></li>
              <li className='navBar__nav-list-item' onClick={toggleNav}><Link className='navBar__nav-list-item-link' title='contact' to={`/contact`}><Mail size={48} strokeWidth={2} color={'#F5F5F5'} />{lenguage ==='en' ? 'Contact'  :'Contacto'}</Link></li>
              <li className='navBar__nav-list-item' onClick={toggleNav}><a className='navBar__nav-list-item-link' title='resume' href={resume} download><FileDownload size={48} strokeWidth={2} color={'#F5F5F5'} />{lenguage ==='en' ? 'Download Resume'  :'Descargar CV'}</a></li>
              <li className='flagsDiv' onClick={toggleNav}><Flag title='esFlag' alt='esFlag' code="es" height="25"  width='60' onClick={() => setLenguage('es')}/>
              <Flag title='gbFlag' alt='gbFlag' code="gb" height="25" width='40' onClick={() => setLenguage('en')} /></li>
              
            </ol>
          </nav>

        </Fade>
      }
      {(screenWidth <= 980) ? (
        <>
          <div className={`navBar__divButton`}>
            <button onClick={toggleNav} className={`navBar__divButton-button`}><Menu2 size={40} strokeWidth={3} onClick={toggleNav} color={'#F5F5F5'} /></button>
          </div>

        </>
      ) : null}

    </header>
  </>
  )
}

export default NavBar