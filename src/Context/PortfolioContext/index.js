import { createContext, useState, useEffect } from "react";
import { Notification } from '@mantine/core';
import { useNotifications } from '@mantine/notifications';
import IMAGES from '../../Assets';
import CustomImg from '../../Components/Imgs/customImg';

const PortfolioContext = createContext()
const PortfolioProvider = ({ children }) => {
  

   
    // const [myRepos, setMyRepos] = useState([]);
    
    
    // const getRepos = async ()=>{
    //  const resp = await fetch(`https://api.github.com/users/Luagir94/repos`)
    //  const data = await resp.json()
    //  const repoPoke = data.find(e => e.name === 'pokemonJS')
    //  const repoSys = data.find(e => e.name === 'SySRetratos')
    //  const repoyugi = data.find(e => e.name === 'yugiapp')
    //  const RepoDunder = data.find(e => e.name === 'dunderMifflinGiraudi')
    //  repoPoke.img = <CustomImg {...IMAGES.poke} clase="home__imgDiv-img" />
    //  repoSys.img =  <CustomImg {...IMAGES.sys} clase="home__imgDiv-img" />
    //  repoyugi.img =  <CustomImg {...IMAGES.yugi} clase="home__imgDiv-img" />
    //  RepoDunder.img =  <CustomImg {...IMAGES.sys} clase="home__imgDiv-img" />
    // setMyRepos([repoPoke,repoSys,repoyugi,RepoDunder])
    // }
    
    // useEffect(() => {
    // getRepos()
    // }, []);
    
    
    // useEffect(() => {
    // console.log(myRepos)
    // }, [myRepos]);
    
    return (<PortfolioContext.Provider value={{}}>{children}</PortfolioContext.Provider>)
}

export { PortfolioProvider }
export default PortfolioContext