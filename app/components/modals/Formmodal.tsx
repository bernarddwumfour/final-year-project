"use client"
import { Appcontext } from '@/app/contexts/AppcontextProvider'
import React, { useContext } from 'react'


const Formmodal = () => {

  const {togglemodalcontent} = useContext(Appcontext)
  const handlesubmit = () =>{
    togglemodalcontent("loading")

    setTimeout(()=>{
      togglemodalcontent("policy")
    },3000)
  }

  return (
        <div className="form">
          <form action="">
            <p className="label">Upload Privacy Policy To Summarize</p>
            {/* <div className="control">
              <input type="text" name="email" />
              <label htmlFor="mail">URL</label>
            </div>

            <p className="redirect" style={{ textAlign: "center" }}>
              OR
            </p> */}

            <div className="control">
              <textarea name="message" id="message"></textarea>
              <label htmlFor="message"> Plain Text</label>
            </div>

            <p className="redirect" style={{ textAlign: "center" }}>
              OR
            </p>

            <div className="control">
              <input type="file" name="policy" id="policy" />
              <label htmlFor="policy"> Upload File </label>
            </div>

            <button className="click" onClick={handlesubmit}>Summarize Policy</button>
          </form>
        </div>
  )
}

export default Formmodal