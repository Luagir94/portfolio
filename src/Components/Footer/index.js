import React, { useContext } from 'react'
import './index.scss'
import { BrandLinkedin, BrandTwitter, BrandGithub } from 'tabler-icons-react';
import PortfolioContext from '../../Context/PortfolioContext';
const Footer = () => {
  const { userId } = useContext(PortfolioContext);
  return (<>
    <footer className='footer'>
      <nav className='footer__social'>
        <ol className='footer__social-list'>
          <li className='footer__social-list-item'><a title='linkedin' className='footer__social-list-item-link' target={`_blank`} href="https://www.linkedin.com/feed/" onClick={() => window.dataLayer.push({ 'event': 'visitaLinkedinHeader', 'userId': userId })}><BrandLinkedin size={20} strokeWidth={2} color={'#F5F5F5'} />LinkedIn</a></li>
          <li className='footer__social-list-item'><a title='github' className='footer__social-list-item-link' target={`_blank`} href="https://github.com/Luagir94" onClick={() => window.dataLayer.push({ 'event': 'visitaGitHubHeader', 'userId': userId })}><BrandGithub size={20} strokeWidth={2} color={'#F5F5F5'} />GitHub</a></li>
          <li className='footer__social-list-item'><a title='twitter' className='footer__social-list-item-link' target={`_blank`} href="https://twitter.com/home" onClick={() => window.dataLayer.push({ 'event': 'visitaTwitterHeader', 'userId': userId })}><BrandTwitter size={20} strokeWidth={2} color={'#F5F5F5'} />Twitter</a></li>

        </ol>
      </nav>

    </footer>
  </>
  )
}

export default Footer