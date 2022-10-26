import React from 'react';
import './Modal.css';
import cards from './Images/popuplogo.png'
import Epsilon from './Images/Eimage.png'
  
function Modal(){
  return(
  <div>
   <dialog open className='modalcheck' >
   <div className="user-icon">

 <a href="#"><img src={cards} width="31px"></img></a>

</div>

<h5 style={{ marginLeft: "100px" }}>Add <img src={Epsilon}/>10 or more</h5>
  <p style={{textAlign:"center"}}>Before we hook up with an account, you need to add money. You can spend or withdraw this money later.</p>
 <div class='row'>
  <div className='col-2'>
<ul>
 <li><a href="#"><button type="button" class="btn btn-outline-warning" className="skipbutton">Skip</button></a></li></ul>
  </div>
  <div className='col-2'>
    <ul>
  <li><a href="#"><button type="button" class="btn btn-warning" style={{ marginLeft: "100px" }} className="Addmoneybutton">Add Money </button></a></li>
  </ul>
  </div>
  </div>
</dialog>
  </div>
  )
};
export default Modal;