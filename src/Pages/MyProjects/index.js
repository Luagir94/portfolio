import React, { useState, useContext, useEffect } from 'react'
import './index.scss'
import Cards from '../../Components/Cards';
import PortfolioContext from '../../Context/PortfolioContext';
import IMAGES from '../../Assets';
import CustomImg from '../../Components/Imgs/customImg';
import { BrandHtml5, BrandSass, BrandJavascript, BrandReactNative, BrandFirebase, Api } from 'tabler-icons-react';
import Fade from 'react-reveal/Fade';
import {Helmet} from "react-helmet";
import Footer from '../../Components/Footer';
const MyProjects = () => {
  const{lenguage} =useContext(PortfolioContext)
  const [screenW, setScreenW] = useState(document.documentElement.clientWidth);
  const [proyects, setProyects] = useState([{
    name: 'Crypto-Watcher',
    img: <CustomImg {...IMAGES.crypto}  />,
    stack: [<BrandReactNative  strokeWidth={2} color={'#61DBFB'} />,<BrandSass  strokeWidth={2} color={'#cd6799'} /> ,<Api  strokeWidth={2} color={'white'} />],
    url: "https://crypto-watcher-six.vercel.app/",
    gitHub:"https://github.com/Luagir94/crypto-watcher",
    descEs:"Cotizaciones de cryptomonedas", 
     descEn: "Cryptocurrency quotes"
  },{
    name: 'PokemonJS',
    img: <CustomImg {...IMAGES.poke}  />,
    stack: [<BrandHtml5  strokeWidth={2} color={'#E44D26'} />,<BrandJavascript  strokeWidth={2} color={'#f0db4f'} />,<BrandSass  strokeWidth={2} color={'#cd6799'} />,<Api  strokeWidth={2} color={'white'} />],
    url: "https://luagir94.github.io/pokemonJS/",
    gitHub:"https://github.com/Luagir94/pokemonJS",
    descEs:"Simulacion de batallas Pokemon. No Responsive", 
     descEn: "Pokemon battle simulator. Not Responsive"
  },{
    name: 'SySRetratos',
    img: <CustomImg {...IMAGES.sys}  />,
    stack: [<BrandSass  strokeWidth={2} color={'#cd6799'} />,<BrandHtml5  strokeWidth={2} color={'#E44D26'} />],
    url: "https://luagir94.github.io/SySRetratos/",
    gitHub:"https://github.com/Luagir94/SySRetratos",
    descEs:"Cuadros pintados a manos de mascotas", 
     descEn: "Handmade pet paintings"
  },{
    name: 'Dunder Mifflin',
    img: <CustomImg {...IMAGES.dunder}  />,
    stack: [<BrandReactNative  strokeWidth={2} color={'#61DBFB'} />,<BrandSass  strokeWidth={2} color={'#cd6799'} />,<BrandFirebase  strokeWidth={2} color={'orange'} />],
    url: "https://luagir94.github.io/dunderMifflinGiraudi/",
    gitHub:"https://luagir94.github.io/dunderMifflinGiraudi/",
    descEs:"Fake e-commerce tributo a 'The Office'. No es Responsive", 
     descEn: "Fake e-commerce tribute to 'The Office' Not Responsive"
  },{
    name: 'Yugi-App',
    img: <CustomImg {...IMAGES.yugi}  />,
    stack: [<BrandReactNative  strokeWidth={2} color={'#61DBFB'} />,<BrandSass  strokeWidth={2} color={'#cd6799'} /> ,<Api  strokeWidth={2} color={'white'} />],
    url: "https://luagir94.github.io/getCards",
    gitHub:"https://github.com/Luagir94/yugiapp",
    descEs:"Creador de mazos. No es Responsive", 
    descEn: "Deck builder. Not Responsive"
  },


]);




  return (<>
  <Helmet>
        <title>My Projects | Luciano Giraudi Developer</title>
        <meta property="og:title" content="My Projects | Luciano Giraudi - Developer"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://lucianogiraudi.com/projects"/>
        <meta property="og:image" content="https://pbs.twimg.com/profile_images/1520939333485838337/7ED4V9hF_400x400.png"/>
    </Helmet>
  
    <main className='myProjects'>
    <div class='ripple-background'>
  <div class='circle xxlarge shade1'></div>
  <div class='circle xlarge shade2'></div>
  <div class='circle large shade3'></div>
  <div class='circle mediun shade4'></div>
  <div class='circle small shade5'></div>
</div>
      <Fade right>
      <h1>{lenguage ==='en' ? 'My Projects' : 'Mis Proyectos'}</h1>
      <div className='myProjects__conteiner'>
        {proyects.map(x=> <Cards props={x}/>)}
      </div>
      </Fade>
      


        


     


    </main>
    </>
  )
}

export default MyProjects