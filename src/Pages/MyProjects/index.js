import React, { useState, useContext, useEffect } from 'react'
import './index.scss'
import { Carousel } from '../../Components/Carousel';
import PortfolioContext from '../../Context/PortfolioContext';
import IMAGES from '../../Assets';
import CustomImg from '../../Components/Imgs/customImg';
import { BrandHtml5, BrandSass, BrandJavascript, BrandReactNative, BrandFirebase, Api } from 'tabler-icons-react';
import Fade from 'react-reveal/Fade';
const MyProjects = () => {

  const [screenW, setScreenW] = useState(document.documentElement.clientWidth);

  const { myRepos } = useContext(PortfolioContext);
  const [goToSlide, setGoToSlide] = useState(0);
  const slides = [
    <div><a href="https://luagir94.github.io/pokemonJS/" target={`_blank`}><CustomImg {...IMAGES.poke} clase="carouselImg" /></a><div></div><p>Used Stack:</p> <div><BrandHtml5 size={60} strokeWidth={2} color={'#E44D26'} />
      <BrandJavascript size={60} strokeWidth={2} color={'#f0db4f'} /><BrandSass size={60} strokeWidth={2} color={'#cd6799'} /><Api size={60} strokeWidth={2} color={'black'} /></div></div>,
    <div><a href="https://luagir94.github.io/dunderMifflinGiraudi/" target={`_blank`}><CustomImg {...IMAGES.dunder} clase="carouselImg" /></a><div><p>Used Stack:</p> <div><BrandReactNative size={60} strokeWidth={2} color={'#61DBFB'} /><BrandSass size={60} strokeWidth={2} color={'#cd6799'} /><BrandFirebase size={60} strokeWidth={2} color={'orange'} /></div></div></div>,
    <div><a href="https://luagir94.github.io/yugiapp/" target={`_blank`}><CustomImg {...IMAGES.yugi} clase="carouselImg" /></a><div><p>Used Stack:</p> <div></div><BrandReactNative size={60} strokeWidth={2} color={'#61DBFB'} /><BrandSass size={60} strokeWidth={2} color={'#cd6799'} /> <Api size={60} strokeWidth={2} color={'black'} /></div></div>,
    <div><a href="https://luagir94.github.io/SySRetratos/" target={`_blank`}><CustomImg {...IMAGES.sys} clase="carouselImg" /></a><div><p>Used Stack:</p> <div><BrandSass size={60} strokeWidth={2} color={'#cd6799'} />
      <BrandHtml5 size={60} strokeWidth={2} color={'#E44D26'} /></div></div></div>
  ]


  return (
    <div className='myProjects'>
      <Fade right>
      <h1>My Projects</h1>
      </Fade>
      <div className='myProjects__conteiner'>
        { screenW >768 ? <Carousel slides={slides} autoplay={false} interval={1000} arrows={true} /> :

        <div className='myProjects__conteiner-mobile'>

          {
            <Fade right>
          {slides}
          </Fade>
          }
        </div>


        }
      
      </div>

     


    </div>
  )
}

export default MyProjects