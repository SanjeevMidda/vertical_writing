import './index.css';
import houses from "./imgs/houses.jpg"
import rocks from "./imgs/rocks.jpg"
import edges from "./imgs/edges.jpg"
import umbrella from "./imgs/umbrella.jpg"
import { useState } from 'react';
function App() {

  const [state, setState] = useState(30);

  return (
    <div className="App">
     <div className="left">

      <h3 onClick={() => {setState(30)}} className='adjust'>WORK</h3>
      <h3 onClick={() => {setState(60)}}>CONTACT</h3>
      <h3 onClick={() => {setState(90)}}>ABOUT</h3>
     </div>
      
     <div className="right">
      {
        state === 30?
        <div className="backgroundOne">
          <img src={edges} alt="" className='new'/>
        </div> : null
      }

      {
        state === 60?
        <div className="backgroundTwo">
          
          <form action="">
            <label htmlFor="">NAME</label>
            <input type="text" />
            <label htmlFor="">EMAIL</label>
            <input type="text" />
            <label htmlFor="">NUMBER</label>
            <input type="text" />

            <button>🍦</button>
          </form>        
        </div> : null
      }

      {
        state === 90?
        <div className="backgroundThree">
        <h4>SANJEEV</h4>
        <h4>MIDDA</h4>
          <div className="circle"></div>
        </div> : null
      }
     </div>
    </div>
  );
}

export default App;
