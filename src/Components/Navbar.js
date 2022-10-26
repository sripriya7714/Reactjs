import React from 'react'
import IMg from './Images/payvoo_logo.png'
import mag from './Images/bell.png'
import Girl from './Images/girll.png'

import Refresh from './Images/refresh.png'
import Plus from './Images/plussss.png'
import Arrow from './Images/leftarrow.png'
import Menu from './Images/menuicon.png'
import LineMenu from './Images/linemenu.png'
import Search from './Images/search.png'
import CardCircle from './Images/cardimage.png'

function Navbar() {
  return (
    <div class="overflow-hidden">
      <nav class="navbar navbar-expand-sm navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="javascript:void(0)"><img src={IMg} className='image' alt="Nolog"></img></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="mynavbar">
            <ul class="navbar-nav me-auto">

            </ul>
            <ul class="navbar-nav ">
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)"><img src={mag} alt="Nolog"></img></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)"><img src={Girl} alt="Nolog"></img></a>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Laura johnson</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </div>

  )
}

export default Navbar
