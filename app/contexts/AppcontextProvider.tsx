"use client";
import React, { ReactNode, createContext, useState } from "react";

type Props = {
  children: ReactNode;
};

//Creating Context
export const Appcontext = createContext<appcontext >({
  modalopen: false,
  togglemodal: ()=>{},
  modalcontent : "form",
  togglemodalcontent : ()=>{}
});

  //Context Provider
const AppcontextProvider = ({children}: Props) => {

  //Modal state
  const [modalopen, setmodalopen] = useState(false);

  //Toggling Modal state
  const togglemodal: voidfunction = () => {
    console.log("Toggle modal")
    setmodalopen((prev) => !prev);
  };


  //State for content of modal
  const [modalcontent, setmodalcontent ] = useState<String>("form")

  const togglemodalcontent = (state:string = "form") => {
    setmodalcontent(state)
  }


  return (
    <Appcontext.Provider
      value={{
        modalopen: modalopen,
        togglemodal,
        modalcontent : modalcontent,
        togglemodalcontent
      }}
    >
      {children}
    </Appcontext.Provider>
  );
};



export default AppcontextProvider;
