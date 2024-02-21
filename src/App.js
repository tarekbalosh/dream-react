
//import './App.css';


import React, { createContext , useState } from "react";
import Navbar from "./components/Navbar";
import $ from 'jquery'

 export const cnt = React.createContext();
const App = ()=>{
  
   
   const[drop2, setDrop] = useState(false);
   const show2 = (t)=> {

      $(t).toggle(300)
  }
    
  
  let obj = {
    drop : drop2 ,
    
    show : show2,
  }
    
   

    
   return(
    
     <cnt.Provider className="" value={obj}>
       
       <Navbar /> 
        
      
       </cnt.Provider>
   
     
   )
}

export default App;
