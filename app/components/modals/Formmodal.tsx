"use client"
import { Appcontext } from '@/app/contexts/AppcontextProvider'
import React, { useContext } from 'react'


const Formmodal = () => {

  const {togglemodalcontent , togglemodal} = useContext(Appcontext)
  const handlesubmit = () =>{
    togglemodalcontent("loading")

    setTimeout(()=>{
      togglemodalcontent("policy")
    },3000)
  }

  const cancelsubmit= (e : React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault()
    togglemodal()
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

            <div style={{display : "flex" , justifyContent: "center" , gap : "1rem" ,paddingTop : "1rem"}}>
            <button className="click" onClick={handlesubmit}style={{left : "auto" , transform : "translateX(0)"}}>Summarize Policy</button>
            <button className="click secondary" onClick={cancelsubmit} style={{left : "auto" , transform : "translateX(0)"}}>Cancel</button>
            </div>
          </form>
        </div>
  )
}

export default Formmodal