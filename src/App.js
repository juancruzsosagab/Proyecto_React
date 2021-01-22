import React,{ useState} from "react";
import './App.css';

import MenuComponents from './Components/MenuComponents/index'
import {BrowserRouter} from "react-router-dom"
import RoutesAdminComponents from "./Components/RoutesComponents/RoutesAdminComponents";
import RoutesWebComponents from "./Components/RoutesComponents/RoutesWebComponents";

import GlobalState from "./Context/GlobalState";


 function App (props) {
    //Define el state
   const [option,setPages] =  useState({
      option:[
        {
          path:"/",
          label:"Home"
        },
        {
          path:"/login",
          label:"Login"
        },
        {
          path:"/registro",
          label:"Registro"
        }
      ],
    /*
    const [user, setUser] = useState({
      usuario:{
        name:"Nico",
        rol:"web"
      }
    */
      user:{
        name:"Nico",
        rol:"web",
      }
   });
  
  
 const handleClickLogin = (props)=>{
    //Modifica el valor de state
    setPages({
      option:[{
        path:"/",
        label:"Home"
      },
      {
        path:"/login",
        label:"Login"
      }],
       user:{
        name:"Nico",
        rol:"web"
      }
      
    })
  
 }

  

    return (
      <>
      <GlobalState>  
        <BrowserRouter>

          <MenuComponents useState={option} onClick={handleClickLogin} />
          {
            option.user.rol==="admin" && <RoutesAdminComponents />
          }
          {
            option.user.rol==="web" && <RoutesWebComponents />
          }
          
        </BrowserRouter>
      </GlobalState>

      </>

      
    )
  }
  

export default App;
