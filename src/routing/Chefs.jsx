import React from 'react'
import { useNavigate } from 'react-router-dom'

const Chefs = () => {
  let navigator = useNavigate()
  return (
    <div className='chefContainer'>
       <span>Chef 's Page</span>
        <button onClick={()=>navigator("/contacts")}>CONTACTS</button>
      
    </div>
  )
}

export default Chefs
