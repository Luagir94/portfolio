import React,{useState,useEffect} from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import { Home, Folders, User, Mail, BrandLinkedin,BrandTwitter,BrandGithub ,Menu2, FileDownload} from 'tabler-icons-react';
import Fade from 'react-reveal/Fade';
const Footer = () => {


  return (<>
    <footer className='footer'>
<nav className='footer__social'>
              <ol className='footer__social-list'>
                <li className='footer__social-list-item'><a title='linkedin' className='footer__social-list-item-link' target={`_blank`} href="https://www.linkedin.com/feed/"><BrandLinkedin size={20} strokeWidth={2} color={'#F5F5F5'}/>LinkedIn</a></li>
                <li className='footer__social-list-item'><a title='github' className='footer__social-list-item-link' target={`_blank`} href="https://github.com/Luagir94"><BrandGithub size={20} strokeWidth={2} color={'#F5F5F5'}/>GitHub</a></li>
                <li className='footer__social-list-item'><a title='twitter' className='footer__social-list-item-link' target={`_blank`} href="https://twitter.com/home"><BrandTwitter size={20} strokeWidth={2} color={'#F5F5F5'}/>Twitter</a></li>
                
              </ol>
              </nav>

    </footer>
    </>
  )
}

export default Footer