import { Appcontext } from '@/app/contexts/AppcontextProvider'
import Image from 'next/image'
import React, { useContext } from 'react'

const Policymodal = () => {

    const {togglemodalcontent,togglemodal}= useContext(Appcontext)

    const cancel:()=>void = () =>{
        togglemodalcontent("form")
        togglemodal()
    }

  return (
        <div className="policy">
            <p className="heading">
                Here is your summarized privacy policy.
            </p>
         <div className="category">
                <p className="categoryname">
                    Category
                </p>
                <p className="summary">
                    Summary
                </p>
                <p className="image">
                    Infographics
                </p>
            </div>

            
         <div className="category">
                <p className="categoryname">
                    Data Collection
                </p>
                <p className="summary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, accusamus labore nisi nam aut porro aperiam dolores veritatis.
                </p>
                <div className="image">
                <Image src={"/collecting.jpg"} alt="homeimage" fill />
                </div>
            </div>

            
            <div className="category">
                <p className="categoryname">
                    User Rights
                </p>
                <p className="summary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, accusamus labore nisi nam aut porro aperiam dolores veritatis.
                </p>
                <div className="image">
                <Image src={"/right.png"} alt="homeimage" fill />
                </div>
            </div>

           
            <div className="actions">
            <button className="click">Save</button>
            <button className="click secondary" onClick={cancel}>Cancel</button>
            </div>

         </div>

  )
}

export default Policymodal