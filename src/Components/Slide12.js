import React from 'react'
import Search from './Images/search.png'
import CardCircle from './Images/cardimage.png'
import Menu from './Images/menuicon.png'
import LineMenu from './Images/linemenu.png'
import Refresh from './Images/refresh.png'
import Flag from './Images/flag.png'

function Slide12() {
  return (
    <div>

      <div class="col-md-10 col-lg-10 col-10">
        <div className='row button'>
          <div className='col-md-6 col-lg-6 col-6'>
            <p >Accounts</p>
            <sup><p >Accounts</p></sup>
          </div>
          <div className='col-md-2 col-lg-2 col-2'>
            <button type="button" className="bat">  + Addmoney</button>
          </div>
          <div className='col-md-2 col-lg-2 col-2'>
            <button type="button" className="bat"> <img src={Refresh}></img>  Exchange</button>
          </div>
          <div className='col-md-2 col-lg-2 col-2'>
            <button type="button" className="bat"><i class="bi bi-2-circle"></i> send</button>
          </div>
        </div>
        <div class="row">
          <div>
            <ul className="fax">
              <li>
                <a href='#' style={{ marginBottom: "50px" }}>Accounts </a>
              </li>
              <li>
                <a href='#' style={{ marginLeft: "50px" }} >Transactions </a>
              </li>
            </ul>
            <hr />
          </div>
          <div>
            <p style={{ textDecoration: "none" }}>All Accounts</p>
            <ul className='d-flex'>
              <li>
                <a href="#" style={{ marginLeft: "600px" }}>Add New Account</a>
              </li>
              <li>
                <a href="#" style={{ marginLeft: "30px" }}> <img src={Menu} width="30px;" ></img></a>
              </li>

              <li>
                <a href="#" style={{ marginLeft: "30px" }}> <img src={LineMenu} width="30px;" ></img></a>
              </li>
              <li>
                <a href="#" style={{ marginLeft: "20px" }}> <img src={Search} width="30px;" ></img></a>
              </li>
            </ul>
          </div>
          <div>
          <div class="row">
            <div className='col-md-4 col-lg-4 col-4'>

              <div class="card" >
                <div>
                  <h className="Euro">Euro</h>
                  <span style={{ marginLeft: "290px" }}><img src={CardCircle} width="50px;" ></img></span>
                </div>
                <div>
                  <p className="dollar"> EUR €0.00</p>
                </div>
                <div>
                  <button className="dollarbtn">Active</button>
                </div>

              </div>
             


              </div>
             
            </div>
          </div>

          
        
        </div>
      </div>

    </div>
    

  )
}

export default Slide12
