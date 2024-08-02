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
  togglemodalcontent : ()=>{},
  pagemessage : "",
  pagemessagetype : "",
  pagemessagestate : false,
  showpagemessage : ()=>{}
  
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


  //States for pagemessage
  const [pagemessage,setpagemessage] = useState("")
  const [pagemessagestate, setpagemessagestate] = useState(false)
  const [pagemessagetype, setpagemessagetype] = useState("info")



  const showpagemessage = (message:string,type:string) =>{
    setpagemessage(message)
    setpagemessagestate(true)
    setpagemessagetype(type)
    setTimeout(()=>{
      setpagemessagestate(false)
      setpagemessage("")
    },4000)
    alert(`${pagemessage} displaying`)
  }

  return (
    <Appcontext.Provider
      value={{
        modalopen: modalopen,
        togglemodal,
        modalcontent : modalcontent,
        togglemodalcontent,
        pagemessage : pagemessage,
        pagemessagestate  : pagemessagestate,
        pagemessagetype : pagemessagetype,
        showpagemessage
      }}
    >
      {children}
    </Appcontext.Provider>
  );
};



export default AppcontextProvider;
