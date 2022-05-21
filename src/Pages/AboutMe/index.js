import React, { useState, useEffect, useContext } from 'react'
import { Helmet } from 'react-helmet';
import CustomImg from '../../Components/Imgs/customImg'
import IMAGES from '../../Assets'
import './index.scss'
import Fade from 'react-reveal/Fade';
import PortfolioContext from '../../Context/PortfolioContext';
const AboutMe = () => {
  const [myAge, setMyAge] = useState('');
  const [screenW, setScreenW] = useState(document.documentElement.clientWidth);
  const nacimiento = new Date('1994/2/11')
  const {lenguage} = useContext(PortfolioContext);
  const hoy = new Date()
  useEffect(() => {

    const diff = hoy - nacimiento
    const years = Math.floor((diff / (1000 * 60 * 60 * 24) / 365))
    setMyAge(years)
  }, []);


  return (
    <>
     <Helmet>
        <title>About Me | Luciano Giraudi Developer</title>
        <meta property="og:title" content="About Me | Luciano Giraudi - Developer"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://lucianogiraudi.com/contact"/>
        <meta property="og:image" content="https://pbs.twimg.com/profile_images/1520939333485838337/7ED4V9hF_400x400.png"/>
 
    </Helmet>
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
{lenguage == 'en' ? 
<Fade>
<h1 >
  About Me
</h1>
<h2>Welcome! My name is Luciano Giraudi, you can call me Lucho, I'm 28  years and a fullstack dev.</h2>
<p>


I love gaming, comics, manga and anime.
<br />
I've always been into tech, so I decided to venture into development starting with frontend (React) and then backend (Node) to complete the MERN stack.
<br />
I'm currently working for a digital media agency with other technologies such as Google Analytics, Google Tag Manager, Google Optimize along with the frontend development and analytics of their site.
<br />
I aim at learning more every day to increase my experience, to open up new career roads in the future.
</p>

</Fade>
:
<Fade right>
<h1 >
  Sobre mi
</h1>

<h2>¡Bienvenidxs! Me llamo Luciano Giraudi, me dicen Lucho, tengo 28 años  y soy Desarrollador Full-Stack.</h2>

<p>
  Soy un apasionado por el gaming, los cómics, el manga y animé entre otros.
  <br />
  Siempre estuve interesado por la informática, decidí encaminarme en el mundo de la programación arrancando mi camino como Front-End Developer (React) y luego como Back-End Developer (Node) para completar el MERN stack.
  <br />
  Trabajando en una agencia de medios digitales también adquirí conocimiento en plataformas de Google como Google Analytics, Google Tag Manager, Google Optimize entre otros, en consecuencia estoy capacitado tanto para el desarrollo del sitio y la analítica de este.
  <br />
  Mi objetivo es seguir aprendiendo todos los días y seguir profesionalizándome para incrementar mi experiencia y abrir nuevos caminos en este rumbo que tomé.
</p>


</Fade>

}


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
    </>
  )
}

export default AboutMe