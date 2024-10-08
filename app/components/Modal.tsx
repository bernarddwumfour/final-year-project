'use client'
import React, { ReactNode, useContext } from 'react'
import { Appcontext } from '../contexts/AppcontextProvider';
import Formmodal from './modals/Formmodal';
import Loadingmodal from './modals/Loadingmodal';
import Policymodal from './modals/Policymodal';
import Template1 from './modals/policytemplates/Template1';



const Modal = () => {


  const {togglemodal,modalopen ,modalcontent} = useContext<appcontext>(Appcontext);


  return (
    <div id='modal' className={`${modalopen? 'open': 'close'}`}>
        <div className="backdrop" onClick={togglemodal}>
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