import React,{useState} from "react";
import {Link} from 'react-router-dom'
import { Card,Button } from 'react-bootstrap';
import {Venta} from '../Services/SalesServices'
import NetContext from "../Context/NetContext";


function ProductsComponents({producto,verDetalle}) {
    const [loading,setLoading] = useState(false);
    

    const handleClickDetalle = async (e)=>{
        setLoading(true);
        console.log("hola"+loading)
    }
    const handleClick = async (e)=>{
        const userId = localStorage.getItem("userWeb");
        console.log("userWeb",userId);
        let result = await Venta({
            "product_id": producto._id,
            "usuario_id":userId,
            "payment": { 
            "method": "contado",                 
            "status": "pagado",                  
            }

        })
        
        if(!result){
            e.preventDefault();
            alert("Tu compra no ha podido ser efectuada")
        }
    }
   

      
    return(
        <NetContext.Consumer>
            {context=>(
                <Card style={{ width: '18rem',marginTop:"10px" }}>
                    <Card.Img variant="top" src={producto.image_path} />
                    <Card.Body>
                        <Card.Title>{producto.name}</Card.Title>
                        <Card.Text>
                        {producto.price_currency}
                        
                        </Card.Text>
                        {
                            verDetalle &&
                            <Link to={"/productos/"+producto.id}><Button onClick={handleClickDetalle} variant="primary">Ver Detalle</Button></Link>
                            
                        }
                        {context.login && 
                           
                           <Link to={"/successful/"}><Button variant="primary" onClick={handleClick}>Comprar</Button></Link>
                           
                           
                        }
                        
                    </Card.Body>
                </Card>
            )}
        
        </NetContext.Consumer>
    )
    
}
export default ProductsComponents