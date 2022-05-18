import React,{useContext} from 'react'
import PortfolioContext from '../../Context/PortfolioContext'

const Cards = ({props}) => {
    const{lenguage} =useContext(PortfolioContext)
  return (
    <div className='myProjects__conteiner-cards'>
        <div className='myProjects__conteiner-cards-img'>
        {props.img}
        </div>
        <div className='myProjects__conteiner-cards-data'>
            <p>Name: {props.name}</p>
            <p>Stack:{props.stack}</p>
            <p>Repo: <a href={props.gitHub} target='_blank'>Link</a></p>
            <p>Deploy: <a href={props.url} target='_blank'>Link</a></p>
            <p>Desc: { lenguage ==='en' ? props.descEn : props.descEs}</p>
            
        
        </div>
        
    </div>
  )
}

export default Cards