import React,{useState,useEffect} from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import { Home, Folders, User, Mail, BrandLinkedin,BrandTwitter,BrandGithub ,Menu2} from 'tabler-icons-react';
import Fade from 'react-reveal/Fade';
const NavBar = () => {
const [toggleMenu, setToggleMenu] = useState(false);
const [screenWidth, setScreenWidth] = useState(window.innerWidth)
const [orientation, setOrientation] = useState('portrait');
const [show, setShow] = useState(false);
const toggleNav = () => {
  
  

      setToggleMenu(!toggleMenu)



  
}
const handleRotation =()=>{
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

useEffect(() => {
console.log(orientation);
}, [orientation]);
  return (<>
    <header className='navBar'>
      {(screenWidth > 768) &&(
        <>

              <nav className='navBar__nav'>
              <ol className='navBar__nav-list'>
                <li className='navBar__nav-list-item'><Link className='navBar__nav-list-item-link' to={`/`}><Home size={48} strokeWidth={2} color={'#F5F5F5'}/>Home</Link></li>
                <li className='navBar__nav-list-item'><Link className='navBar__nav-list-item-link' to={`/projects`}><Folders size={48} strokeWidth={2} color={'#F5F5F5'}/>My Projects</Link></li>
                <li className='navBar__nav-list-item'><Link className='navBar__nav-list-item-link' to={`/aboutMe`}><User size={48} strokeWidth={2} color={'#F5F5F5'}/>About Me</Link></li>
                <li className='navBar__nav-list-item'><Link className='navBar__nav-list-item-link' to={`/contact`}><Mail size={48}strokeWidth={2} color={'#F5F5F5'}/>Contact</Link></li>
              </ol>
              </nav>
              
              {  (screenWidth > 768) &&
              
              
              (<nav className='navBar__social'>
              <ol className='navBar__social-list'>
                <li className='navBar__social-list-item'><a className='navBar__social-list-item-link' target={`_blank`} href="https://www.linkedin.com/feed/"><BrandLinkedin size={48} strokeWidth={2} color={'#F5F5F5'}/>LinkedIn</a></li>
                <li className='navBar__social-list-item'><a className='navBar__social-list-item-link' target={`_blank`} href="https://github.com/Luagir94"><BrandTwitter size={48} strokeWidth={2} color={'#F5F5F5'}/>GitHub</a></li>
                <li className='navBar__social-list-item'><a className='navBar__social-list-item-link' target={`_blank`} href="https://twitter.com/home"><BrandGithub size={48} strokeWidth={2} color={'#F5F5F5'}/>Twitter</a></li>
                
              </ol>
              </nav>)}
              </>
      )}
       { (screenWidth <= 768 ) &&
         <Fade left when={toggleMenu} opposite >
   <nav className='navBar__nav'>
              <ol className='navBar__nav-list'>
                <li className='navBar__nav-list-item'><Link className='navBar__nav-list-item-link' to={`/`}><Home size={48} strokeWidth={2} color={'#F5F5F5'}/>Home</Link></li>
                <li className='navBar__nav-list-item'><Link className='navBar__nav-list-item-link' to={`/projects`}><Folders size={48} strokeWidth={2} color={'#F5F5F5'}/>My Projects</Link></li>
                <li className='navBar__nav-list-item'><Link className='navBar__nav-list-item-link' to={`/aboutMe`}><User size={48} strokeWidth={2} color={'#F5F5F5'}/>About Me</Link></li>
                <li className='navBar__nav-list-item'><Link className='navBar__nav-list-item-link' to={`/contact`}><Mail size={48}strokeWidth={2} color={'#F5F5F5'}/>Contact</Link></li>
              </ol>
              </nav>
  
   </Fade>
   }
{(screenWidth <= 768) &&(
  <>
  <div className={`navBar__divButton`}>
<button onClick={toggleNav} className={`navBar__divButton-button`}><Menu2 size={40} strokeWidth={3}  onClick={toggleNav} color={'#F5F5F5'}/></button>
  </div>
  
   </>
)}

    </header>
    </>
  )
}

export default NavBar