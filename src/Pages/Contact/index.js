import React,{useState, useEffect} from 'react'
import './index.scss'
import Fade from 'react-reveal/Fade';
const Contact = () => {
  const [form, setForm] = useState([]);
  const handleInputChange = (event) => {
    setForm({
        ...form,
        [event.target.name]: event.target.value
    })
  
}
useEffect(() => {
console.log(form)
}, [form]);
  const cargarform = () => {
    const target_1 = `https://mi-portfolio-luciano-giraudi.herokuapp.com/api/mailing`;
      console.log(JSON.stringify(form));
        fetch(target_1,  {
            method: "POST",
            headers: new Headers({'content-type': 'application/json'}),
            body: JSON.stringify(form),
            mode: 'no-cors'
        })
  }
  return (
    <div className='contact'>
      <Fade bottom>
        <div>
      <div className='contact__div'>
      <h1>Contacto</h1>
      <h2>Si deseas contactarte conmigo envia el siguiente formulario</h2>
      <form className="contact__form" >
                    <div className="contact__form-div">
                        <label for="nombreApellido" className="text-start" >Nombre:</label>
                        <input   className="contact__form-div-input" type="text" name ='name' required id="nombreApellido" onChange={handleInputChange}  />
                    </div>
                    <div className="contact__form-div">
                        <label for="email ">Email:</label>
                        <input   className="contact__form-div-input" type="email"  name ='email'   required id="email"  onChange={handleInputChange} />
                    </div>
                    <div className="contact__form-div">
                        <label for="num ">Telefono:</label>
                        <input   className="contact__form-div-input" type="text"  id="num"  name ='phone' onChange={handleInputChange}/>
                    </div>
                    <div className="contact__form-msg">
                    <label for="msj " id='msjLabel'>Mensaje:   </label>
                        <textarea className="form-control inputtext inputmensaje" id="msj" name ='msg' onChange={handleInputChange}></textarea>
                    </div>
                   
                </form>
                <button  className="btn btn-primary btn-lg btn-block" id="buttoncontact" onClick={() => cargarform()}>Enviar</button>
                
      </div>
      </div>
      </Fade>


    </div>
  )
}

export default Contact