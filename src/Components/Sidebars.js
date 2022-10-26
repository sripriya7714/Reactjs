import React from 'react'
import Accounts from './Images/accounts.png'
import Analytics from './Images/analytics.png'
import Payments from './Images/payments.png'
import Cards from './Images/cards.png'
import Settings from './Images/settings.png'

function Sidebars() {
  return (
    <div>
      <div class="container-fluid">
        <div class='row'>
          <div class="col-md-2 col-lg-2 col-2" >
            <div id="mySidenav" class="sidenav">
              <ul >
                <li claasName="acoounts">
                  <button > <span ><img src={Accounts} /></span>  Accounts</button>
                </li>
                <li><a href="#"><span><img src={Analytics}/></span>  Analytics</a></li>
                <li><a href="#"><span><img src={Payments}/></span>  Payments</a></li>
                <li>  <a href="#"><span><img src={Cards}/></span>  Cards</a></li>

                <li><a href="#"><span><img src={Settings}/></span>  Settings</a></li>
              </ul>
            </div>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Sidebars
