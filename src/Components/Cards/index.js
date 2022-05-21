import React,{useContext} from 'react'
import PortfolioContext from '../../Context/PortfolioContext'

const Cards = ({props}) => {
    const{lenguage} =useContext(PortfolioContext)
  return (<>
  <figure class="image-block">
	<h2>{props.name}</h2>
	{props.img}
	<figcaption>
		<h3>
    {props.name}
		</h3>
		<p>Desc: { lenguage ==='en' ? props.descEn : props.descEs}</p>
    <p>Stack: {props.stack}</p>
    <p>Repo: <a href={props.gitHub}  title={props.name}  target='_blank'>Link</a></p>
    <p>Deploy: <a href={props.url} title={props.name} target='_blank'>Link</a></p>
	</figcaption>
</figure>
    </>
  )
}

export default Cards