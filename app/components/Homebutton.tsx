'use client'
import React, { useContext } from "react";
import { Appcontext } from "../contexts/AppcontextProvider";

const Homebutton = () => {
  
  const {togglemodal} = useContext<appcontext>(Appcontext);

  return (
    <>
    <button  className="click" style={{padding : "1rem 1.7rem",fontSize : "1rem"}} onClick={togglemodal}>
      Upload Policy    
    </button>
    </>
  );
};

export default Homebutton;
