'use client'
import React, { ReactNode, useContext } from 'react'
import { Appcontext } from '../contexts/AppcontextProvider';
import Formmodal from './modals/Formmodal';
import Loadingmodal from './modals/Loadingmodal';
import Policymodal from './modals/Policymodal';



const Modal = () => {


  const {togglemodal,modalopen ,modalcontent} = useContext<appcontext>(Appcontext);


  return (
    <div id='modal' className={`${modalopen? 'open': 'close'}`}>
        <div className="backdrop">
        </div>
        <div className="modal">
          {modalcontent == "form" && <Formmodal/>}
          {modalcontent == "loading" && <Loadingmodal/>}
          {modalcontent == "policy" && <Policymodal/>}
        </div>
    </div>
  )
}

export default Modal