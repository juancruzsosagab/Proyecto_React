import React,{useState,useEffect} from "react"
import ProductsComponents from "../Components/ProductsComponents"
import {getProducto} from "../Services/ProductsServices";
function ProductsDetailsPages(props){
    const [producto,setProducto] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(
        () => {
            async function fetchData() {
                const response = await getProducto(props.match.params.id);
                console.log(response);
                setProducto(response.data);
                setLoading(false);
                return;
            }
            fetchData();
        },[]);  
    return(
        <>
        {
            loading && <div>Loading ...</div>
        }
        {
            !loading && 
            <div>
                <ProductsComponents key={producto.id} producto={producto} verDetalle={false} />
            </div>
        }
        
        </>
    )
    
}
export default ProductsDetailsPages