'use client'
import React, { useContext } from 'react'
import { Appcontext } from '../contexts/AppcontextProvider';


const Modal = () => {

  const {togglemodal,modalopen} = useContext<appcontext>(Appcontext);


  return (
    <div id='modal' className={`${modalopen? 'open': 'close'}`}>
        <div className="backdrop" onClick={togglemodal}>
        </div>
        <div className="modal">
            <div className="form">
              <form action="">
                <p className="label">Upload Privacy Policy To Summarize</p>
              <div className="control">
                    <input type="text" name="email" />
                    <label htmlFor="mail">URL</label>
                  </div>

                  <p className="redirect" style={{textAlign:"center"}}>OR</p>

                  <div className="control">
                    <textarea name="message" id="message"></textarea>
                    <label htmlFor="message">  Plain Text</label>
                  </div>

                  <button className="click">Upload Policy</button>
              </form>
            </div>
        </div>
    </div>
  )
}

export default Modal