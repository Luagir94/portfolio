import React, { useState, useEffect } from 'react'
import CustomImg from '../../Components/Imgs/customImg'
import IMAGES from '../../Assets'
import './index.scss'
import Fade from 'react-reveal/Fade';
import { BrandHtml5, BrandSass, BrandJavascript, BrandReactNative, BrandFirebase, Api } from 'tabler-icons-react';
const AboutMe = () => {
  const [myAge, setMyAge] = useState('');
  const [screenW, setScreenW] = useState(document.documentElement.clientWidth);
  const nacimiento = new Date('1994/2/11')
  const hoy = new Date()
  useEffect(() => {

    const diff = hoy - nacimiento
    const years = Math.floor((diff / (1000 * 60 * 60 * 24) / 365))
    setMyAge(years)
  }, []);


  return (
    <main className='aboutMe'>
      {screenW < 769
        ?
        <div className='aboutMe__pic'>
          <Fade right>
            <CustomImg {...IMAGES.profilePic} clase="home__imgDiv-img" />
          </Fade>
        </div> : null

      }
      <div className='aboutMe__info'>
        <div className='aboutMe__info-text'>
          <Fade right>
            <h1 >
              About Me
            </h1>

            <h2>Bienvenidxs! Me llamo Luciano Giraudi, me dicen Lucho, tengo {myAge} años.</h2>

              <p >
              Apasionado por el gaming, comics, el manga y anime entre otros.
              <br />
              Siempre estuve interesado por la informatica, decidí encaminarme en el mundo de la programacion arrancando mi camino
              como Front-End Developer y luego como Back-End Developer para completar el MERN stack.
              <br />
              Trabajando en una agencia de medios digitales tambien adquirí conocimiento en plataformas de Google
              como Google Analytics, Google Tag Manager, Google Optimize en entre otros.
              <br />
              Mi objetivo es seguir aprendiendo todos los días y seguir profesionalizandome para incrementar mi experiencia
              y abrir nuevos caminos en este rumbo que tomé.

            </p>


          </Fade>
          <Fade right>
            <div>


              <div class="all">
                <div class="lefter">
                  <div class="text">GMP</div>
                </div>
                <div class="left">
                  <div class="text">GCP</div>
                </div>
                <div class="center">
                  <div class="explainer"><span>Stack</span></div>
                  <div class="text">React JS</div>
                </div>
                <div class="right">
                  <div class="text">Express JS</div>
                </div>
                <div class="righter">
                  <div class="text">Python</div>
                </div>
              </div>
            </div>
          </Fade>
        </div>

      </div>

      {screenW > 769
        ?
        <div className='aboutMe__pic'>
          <Fade right>
            <CustomImg {...IMAGES.profilePic} clase="home__imgDiv-img" />
          </Fade>
        </div> : null

      }


    </main>
  )
}

export default AboutMe