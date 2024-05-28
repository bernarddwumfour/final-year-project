'use client'
import React, { useState } from 'react'

const Breadcrums = () => {
    const [open,setopen] = useState(false)

  return (
    <div className={`breadcrums ${open ? " active" :" "}`}>
    <div className="title" onClick={()=>setopen(prev=>!prev)}>
      Lorem ipsum dolor sit amet consectetur adipisicing.
    </div>
    <div className="body">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
      quidem deleniti omnis voluptatibus doloremque, reprehenderit iusto
      quo. Accusantium dicta quasi deserunt repudiandae facilis ullam,
      culpa aperiam, fuga debitis cum nesciunt explicabo soluta rerum
      cupiditate. Id esse quibusdam dolorem eligendi est fugiat
      necessitatibus vel. Aliquam, enim!
    </div>
  </div>
  )
}

export default Breadcrums