'use client'
import React, { ReactNode, useState } from 'react'

type Props = {
  item:{
    heading : string,
    content: string
  }
}

const Breadcrums = ({item}:Props) => {
    const [open,setopen] = useState(false)

  return (
    <div className={`breadcrums ${open ? " active" :" "}`}>
    <div className="title" onClick={()=>setopen(prev=>!prev)}>
      {item.heading}
    </div>
    <div className="body">
     {item.content}
    </div>
  </div>
  )
}

export default Breadcrums