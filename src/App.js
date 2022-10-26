import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Sidebars from './Components/Sidebars';
import Slide12 from './Components/Slide12';
import Slide14 from './Components/Slide14';
import Popup from './Components/Popup';
import Modal from './Components/Modal';


function App() {
  return (
    <div className="App">
     
      <layout>
        <layout><Navbar/></layout>
        <div className='row'>
          <div className='col-md-2'><Sidebars/></div>
           <div className='col-md-10'>
          <Slide12/>
          <Modal />
          </div> 
          {/* <div className='col-md-8'>
          <Slide14/>
          </div> */}
           
        </div>
      </layout>


    </div>
  );
}

export default App;