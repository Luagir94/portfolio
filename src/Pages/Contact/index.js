import React, { useState, useEffect, useContext } from 'react'
import PortfolioContext from '../../Context/PortfolioContext';
import './index.scss'
import Fade from 'react-reveal/Fade';
import { Loader } from '@mantine/core';
import { useNotifications } from '@mantine/notifications';
import { showNotification, updateNotification } from '@mantine/notifications';
import { Helmet } from 'react-helmet';
const Contact = () => {
  const [form, setForm] = useState({});
  const [isUploading, setIsUploading] = useState(false);
  const notifications = useNotifications();
  const { userId, lenguage } = useContext(PortfolioContext);
  const handleInputChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })

  }
  
  const cargarform = (event) => {
    event.preventDefault()
 const target_1 = `https://portfoliolg-back.herokuapp.com/api/mailing`;
    if (lenguage === 'en') {
      showNotification({
        id: 'load-data-en',
        title: 'Processing Form',
        message: `The Form is being processed.`,
        color: 'blue',
        loading: true,
        autoClose: false,
            disallowClose: true,
    
      })
    } else {
      showNotification({
        id: 'load-data-es',
        title: 'Procesando Formulario',
        message: `El Formulario está siendo procesado.`,
        color: 'blue',
        loading: true,
        autoClose: false,
            disallowClose: true,
    
      })
    }

  
   
        setIsUploading(true)
        fetch(target_1, {
          method: "POST",
          headers: new Headers({ 'content-type': 'application/json' }),
          body: JSON.stringify(form),
        })
        if (lenguage === 'en') {
          updateNotification({
            id: 'load-data-en',
            title: 'Successful Form',
            message: `The form has been loaded!`,
            color: 'green',
            autoClose: 3000,
          })
        } else {
          updateNotification({
            id: 'load-data-es',
            title: 'Formulario exitoso',
            message: `El Formulario ha sido enviado!`,
            color: 'green',
            autoClose: 3000,
          })
        }
        window.dataLayer.push({
          'event': 'sendedForm',
          'userId': userId

        })

        setIsUploading(false)
        setForm({name: '',
      email: '',
    phone: '',
  msg: ''})
        
      


  

  }
  return (
    <>
    <Helmet>
        <title>Contact | Luciano Giraudi Developer</title>
        <meta property="og:title" content="Contact | Luciano Giraudi - Developer"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://lucianogiraudi.com/contact"/>
        <meta property="og:image" content="https://pbs.twimg.com/profile_images/1520939333485838337/7ED4V9hF_400x400.png"/>
  
    </Helmet>
    
    <main className='contact'>
    <div class="bg"></div>
<div class="bg bg2"></div>
<div class="bg bg3"></div>
      <Fade bottom>
        <div>
          <div className='contact__div'>
            <h1>{lenguage === 'en' ? `Contact` :`Contacto`}</h1>
            <h2>{lenguage === 'en' ? `If you want to contact me, fill the next form` :`Si deseas contactarte conmigo, completa el siguiente formulario`}</h2>
            <form className="contact__form" onSubmit={cargarform}>
              <div className="contact__form-div">
                <label for="nombreApellido" className="text-start" >{lenguage === 'en' ? `*Name:` :`* Nombre:`}</label>
                <input className="contact__form-div-input" type="text" name='name' required id="nombreApellido" value={form.name} onChange={handleInputChange} />
              </div>
              <div className="contact__form-div">
                <label for="email ">* Email:</label>
                <input className="contact__form-div-input" type="email" name='email' required id="email"  value={form.email} onChange={handleInputChange} />
              </div>
              <div className="contact__form-div">
                <label for="num ">{lenguage === 'en' ? `Phone:` :`Telefono:`}</label>
                <input className="contact__form-div-input" type="text" id="num" name='phone' value={form.phone}  onChange={handleInputChange} />
              </div>
              <div className="contact__form-msg">
                <label for="msj " id='msjLabel'>{lenguage === 'en' ? `* Message:` :`* Mensaje:`}</label>
                <textarea className="form-control inputtext inputmensaje" id="msj" required name='msg' value={form.msg} onChange={handleInputChange}></textarea>
              </div>
              {!isUploading ? <button className="btn btn-primary btn-lg btn-block" id="buttoncontact">{lenguage === 'en' ? `Send` :`Enviar`}</button>
              : <Loader color="#F05454" size="sm" />
            }
            </form>
 

          </div>
        </div>
      </Fade>


    </main>
    </>
  )
}

export default Contact