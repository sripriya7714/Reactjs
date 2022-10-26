import React from 'react'
import Search from './Images/search.png'
import CardCircle from './Images/cardimage.png'
import Menu from './Images/menuicon.png'
import LineMenu from './Images/linemenu.png'
import Refresh from './Images/refresh.png'
import Flag from './Images/flag.png'
import './Popup.css'
function SLide18() {
  return (
    <div>
<div class="container-fluid">
        <div class="row">
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
             <div className="col-md-6 col-md-6 col-6">
             <div class="card" >
                <div>
                  <h className="Euro">Euro</h>
                  <span  className="circle"><img src={CardCircle} width="40px;" ></img></span>
                </div>
                <div>
                  <p className="dollar"> EUR €0.00</p>
                </div>
                <div>
                  <button className="dollarbtn">Active</button>
                </div>

              </div>
                
                </div> 
            <div className='col-md-6 col-md-6 col-6'> 
            <div class="card" >
                <div>
              &nbsp;
                  <h className="Euro1">Pound Sterling</h>
                  <span className="plus"><img src={Flag} width="40px;"></img></span>
                </div>
                <div>
                  <p className="dollar"> GBP 0.00</p>
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
    <div>
      <div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

    {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" width="80%">
    
    hgvsdhvhbkjfhnvkjfvgjhfbvhbvhjdcghdsfvfffdjkhugyfkjkl;;lkljk
    mdjkfghdfghdvc
    <button type="button" class="button">Skip</button>
        <button type="button" className="buttons1">Add Money</button>

</button>


<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div> */}
</div>
    </div>
  )
}

export default Slide14
