import { useState, useEffect } from "react";


const Form = ()=>{

    const [form, setForm] = useState({
        email:'',
        password: ''
    });
    
    const [errors, setErrors] = useState({

        email: '',
        password: ''
    });

    const validate = ()=> {
        if(!/\S+@\S+\.\S+/.test(form.email)){
            setErrors({
                ...errors,
                email:'hay un error'
            })
        }else{
            setErrors('')
        }

        if(form.password.includes(1)){
            setErrors({
                ...errors,
                password:'no puede tener el 1'
            })
        }
    }

     useEffect(() => {
       validate()
    },[form])


    const handleFormChange = (event)=>{
        // const name = event.target.name;
        // const value = event.target.value;

        // setForm({
        //     ...form,
        //     [name]: value

        setForm({
            ...form,
            [event.target.name]: event.target.value

        });
       
    
    }

    const handleSubmit =(event)=>{
        event.preventDefault();
        alert('Info enviada correctamente')
        setForm({
            email:'',
            password:''
        })

    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <h1>Holis, soy el form</h1>
                <hr/>
                <label htmlFor="email">Email:</label>
                <input type="text" name="email" value={form.email} autoComplete="none" onChange={handleFormChange}/>
                { errors.email !== '' ? <p>{errors.email}</p> : '' } 
                <hr/>
                <label htmlFor="password">Password:</label>
                <input type="text" name="password" value={form.password} onChange={handleFormChange}/>
                { errors.password !== '' ? <p>{errors.password}</p> : '' }
                <hr/>
                <button type="submit">ENVIAR</button>
            </form>
        </>
    )
}
export default Form;