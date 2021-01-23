import React from "react"
import {Container} from 'react-bootstrap'
import ProgressBar from 'react-bootstrap/ProgressBar'


function Successful(){
    
    
    const now = 100;

    

    
     
    return(
        
       
        
        <Container>
        <div>

        <ProgressBar variant="success" now={now} label={`${now}%`} />
        <br/>
        Tu compra ha sido exitosa!
        </div>
        </Container>
        
        
        
       
    )    
}
export default Successful