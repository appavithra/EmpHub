import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";


const Menu = () => {
    let navigator = useNavigate()
  return (
    <div className='menuContainer'>
        <h1>MENU</h1>
        <div className="innerMenu">
            <div className="menu1">
              <div className="menu" id='one'></div>
              <h2>Briyani</h2>
            </div>
            <div className="menu1">
              <div className="menu" id='two'></div>
              <h2>Poori</h2>
            </div>
            <div className="menu1">
              <div className="menu" id='three'></div>
              <h2>Idly</h2>
            </div>
            <div className="menu1">
              <div className="menu" id='four'></div>
              <h2>Non-Veg Thaali</h2>
            </div>
        </div>
      <div id='buttonCon'>
        <button onClick={()=>{navigator(-1)}}> <span><IoIosArrowBack /></span>BACK</button>
      </div>
    </div>
  )
}

export default Menu
