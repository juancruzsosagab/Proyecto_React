import React from "react"
import {Route} from "react-router-dom"
import HomePages from '../../Pages/HomePages'
import LoginPages from '../../Pages/LoginPages'
import RegistroPages from '../../Pages/RegisterPages'
import ProductsDetailsPages from '../../Pages/ProductsDetailsPages'
import Successful from '../../Pages/SuccessfulSale'

function RoutesWebComponents(){
    return(
        <>
        <Route path="/" exact component={HomePages}/>
        <Route path="/login" exact component={LoginPages}/>
        <Route path="/registro" exact component={RegistroPages}/>
        <Route path="/productos/:id" exact component={ProductsDetailsPages}/>
        <Route path="/successful" exact component={Successful}/>
        </>
    )
}
export default RoutesWebComponents;
