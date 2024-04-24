import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoFastFoodOutline } from "react-icons/io5";
const NavBar = () => {
  return (
    <>
        <nav>
            <aside className="logo">
                <span id='l1'>Food</span><span id='l2'>Corner</span>
            </aside>
            <aside className="navilink">
                <ul>
                <NavLink to="/">
                    <li>
                        <span className="iconN">Home</span>
                    </li>
                </NavLink>
                <NavLink to="/menu">
                    <li>
                        <span className="iconN">Menu</span>
                    </li>
                </NavLink>
                <NavLink to="/events">
                    <li>
                        <span className="iconN">Events</span>
                    </li>
                </NavLink>
                <NavLink to="/chefs">
                    <li>
                        <span className="iconN">Chefs</span>
                    </li>
                </NavLink>
                <NavLink to="/contacts">
                    <li>
                        <span className="iconN">Contacts</span>
                    </li>
                </NavLink>
                </ul>
            </aside>
        </nav>
     </>
  )
}
export default NavBar
