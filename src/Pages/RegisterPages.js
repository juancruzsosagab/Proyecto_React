import React,{useState} from "react"
import {Form,Container} from 'react-bootstrap'
import FormGroup from "../Components/Forms/FormGroup"
import ButtonWithLoading from "../Components/Forms/ButtonWithLoading"
import {create} from "../Services/UsersServices"
import AlertCustom from "../Components/AlertCustom"


function RegisterPages(){
    const [form,setForm] = useState({name:'',email:'',password:''});
    const [loading,setLoading] = useState(false);
    const [alert,setAlert] = useState({variant:"",text:""});
    
    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = (e)=>{
        setLoading(true)
        /* Chequear password
        if(form.password!==form.password2){
         setAlert({variant:"danger",text:"Ups, parece que las contraseñas no coindicen"})
        }*/
        console.log(form)
        create(form)
        .then(data=>{
            console.log("Data",data)
            setLoading(false)
            if(data.data.email){
                setAlert({variant:"success",text:"Registro Exitoso"})
                
            }else{
                setAlert({variant:"danger",text:"Ha ocurrido un error"})
            }
          //Acá tira un 500 y no devuelve la respuesta de express, en clase no pudimos ver como tratarlo
        
        },
        error=>{
            console.log("error",error)
            console.log("asodasd")
            setLoading(false)
            setAlert({variant:"danger",text:"Ha ocurrido un error, inténtelo nuevamente"})
        })
        e.preventDefault()
    }
    return(
        <Container>
            <Form onSubmit={handleSubmit}>
                
                <FormGroup label="Nombre" type="text" placeholder="Ingresá tu nombre" name="name" value={form.name} change={handleChange}/>
                <FormGroup label="Email" type="email" placeholder="Ingresá tu email" name="email" value={form.email} change={handleChange}/>
                <div className="col-6 col-m-3 col-lg-4">

                <FormGroup label="Contraseña" type="password" placeholder="Contraseña" name="password" value={form.password} change={handleChange}/>
                
                </div>
                
                <ButtonWithLoading text="Registrarse" loading={loading}/>
            </Form>
            <AlertCustom variant={alert.variant} text={alert.text} />
        </Container>
    )
    //Botón para verificar password<FormGroup label="Confirmar Contraseña" type="password" placeholder="Contraseña" name="password2" value={form.password2} change={handleChange}/>
                
}
export default RegisterPages