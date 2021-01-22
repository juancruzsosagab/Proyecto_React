import instance from "../Config/axios"
export const getProductos = (buscar="")=>{
    return instance.get("/productos?buscar="+buscar)
}
export const getProducto = (id)=>{
    console.log(id);
    return instance.get("/productos/"+id)
}