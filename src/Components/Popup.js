import React from 'react'
import './Popup.css';


function Popup() {

  return (
    <div>
      <button>Open</button>
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">

      <div class="modal-header">
        <h5><img src="modallogo.png" className="img" ></img> </h5>
             </div>

      <div class="modal-body">
      <h4>Add $10 or more</h4>
<p>
  Before we hook up with an account, you need to add money.You can
  spend or withdraw this money later.
</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="button">Skip</button>
        <button type="button" className="buttons1">Add Money</button>
      </div>
    </div>
  </div>
</div>
  
</div>
  
  )
}

export default Popup
