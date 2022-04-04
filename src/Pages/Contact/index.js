import React,{useState, useEffect} from 'react'
import './index.scss'
import Fade from 'react-reveal/Fade';
import { Loader } from '@mantine/core';

import { useNotifications } from '@mantine/notifications';
const Contact = () => {
  const [form, setForm] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const notifications = useNotifications();
  const handleInputChange = (event) => {
    setForm({
        ...form,
        [event.target.name]: event.target.value
    })
  
}
const validateMail =/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
  const cargarform = () => {
    const target_1 = `https://mi-portfolio-luciano-giraudi.herokuapp.com/api/mailing`;
    notifications.showNotification({
      title: 'Procesando Formulario',
      message: `El Formulario está siendo procesado.`,
      color: 'black',
      autoClose: 3000,
  })
    const filled = []
        for(const [key, value] of Object.entries(form)){
          if (key !== 'phone') {
            filled.push(value.length)
          }
                    
          }
          

          function testNumber(element) { 
            return element > 1; 
        } 
               const emailOk = validateMail.test(form.email)
                const puedoSubir = filled.every(testNumber)
                if (puedoSubir & filled.length >= 3) {
if (emailOk) {
  setIsUploading(true)
  fetch(target_1,  {
      method: "POST",
      headers: new Headers({'content-type': 'application/json'}),
      body: JSON.stringify(form),
      mode: 'no-cors'
  })
  .then((data) => {
    notifications.showNotification({
      title: 'Formulario enviado!!',
      message: `El formulario fue enviado exitosamente!`,
      color: 'black',
      autoClose: 3000,
  })
     
})

setIsUploading(false)
} else {
  notifications.showNotification({
    title: 'Email Invalido',
    message: `Pusiste un formato invalido de Email.`,
    color: 'black',
    autoClose: 3000,
})
}


                  
                } else {
                  notifications.showNotification({
                    title: 'Faltan  datos!!',
                    message: `Faltan rellenar datos!`,
                    color: 'black',
                    autoClose: 3000,
                })
                }
   
}
  return (
    <main className='contact'>
      <Fade bottom>
        <div>
      <div className='contact__div'>
      <h1>Contacto</h1>
      <h2>Si deseas contactarte conmigo envia el siguiente formulario</h2>
      <form className="contact__form" >
                    <div className="contact__form-div">
                        <label for="nombreApellido" className="text-start" >* Nombre:</label>
                        <input   className="contact__form-div-input" type="text" name ='name' required id="nombreApellido" onChange={handleInputChange}  />
                    </div>
                    <div className="contact__form-div">
                        <label for="email ">* Email:</label>
                        <input   className="contact__form-div-input" type="email"  name ='email'   required id="email"  onChange={handleInputChange} />
                    </div>
                    <div className="contact__form-div">
                        <label for="num ">Telefono:</label>
                        <input   className="contact__form-div-input" type="text"  id="num"  name ='phone' onChange={handleInputChange}/>
                    </div>
                    <div className="contact__form-msg">
                    <label for="msj " id='msjLabel'>* Mensaje:   </label>
                        <textarea className="form-control inputtext inputmensaje" id="msj" name ='msg' onChange={handleInputChange}></textarea>
                    </div>
                   
                </form>
                {!isUploading ? <button  className="btn btn-primary btn-lg btn-block" id="buttoncontact" onClick={() => cargarform()}>Enviar</button>
                : <Loader color="#F05454" size="sm" />
              }
                
      </div>
      </div>
      </Fade>


    </main>
  )
}

export default Contact