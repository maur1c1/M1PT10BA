import React from "react";
import { useDispatch } from "react-redux";
import { enviarForm } from "../../redux/actions/actions";

const ContactUs = () => {

  const dispatch = useDispatch()

  const [form, setForm] = React.useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

  const handleInput = (event)=>{
      setForm({
        ...form,
        [event.target.name]: event.target.value
      })
  }

  const handleSubmit = ()=>{
    dispatch(enviarForm(form))
    setForm({
      nombre: '',
      email: '',
      asunto: '',
      mensaje: ''
    })
  }

  return (
    <div className="contactBg">
      <input onChange={handleInput} name="nombre" value={form.nombre}></input>
      <input onChange={handleInput} name="email" value={form.email}></input>
      <input onChange={handleInput} name="asunto" value={form.asunto}></input>
      <input onChange={handleInput} name="mensaje" value={form.mensaje}></input>
      <button onClick={handleSubmit}>ENVIAR</button>
    </div>
  );
};

export default ContactUs;
