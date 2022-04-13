import React from 'react'
import { AiOutlineHome } from "@react-icons/all-files/ai/AiOutlineHome";

function NavBar () {
  return (
    <>
      <nav className='nav'>
        <div className='nav__menu'>
          <ul className='nav__list'>
            <li>
              <a href='#' className='nav__link'>
                <AiOutlineHome />
              </a>
            </li>

            <li>
              <a href='#' className='nav__link'>
                
              </a>
            </li>

            <li>
              <a href='#' className='nav__link'>
                
              </a>
            </li>

          </ul>
        </div>
      </nav>
    </>
  )
}

export default NavBar