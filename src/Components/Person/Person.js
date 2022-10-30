import React from 'react'
import { BrowserRouter as Router, useParams } from "react-router-dom";
export const   Person  =()=> {
   let {name} = useParams();
  return (

    <div class ='Form_area'>
        
        {name}</div>
  )
}

