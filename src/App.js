import React, {useState} from 'react';
import './App.css';

function App() {
  let days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  let months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  let [toggle, setToggle]=useState('Dark Mode');

  let toogleHandle=(e)=>{
    let html=document.querySelector('html')
    if(html.classList.contains('dark')){
      html.classList.remove('dark');
      setToggle('Dark Mode');
     }else{
       html.classList.add('dark')
       setToggle('Light Mode')
     }
  }

  return (
    <div className='app'>
      <button className='toogle' onClick={toogleHandle}>{toggle}</button>
      <div className='clock-container'>
        <div className='clock'>
          <div className='needle hour'></div>
          <div className='needle minute'></div>
          <div className='needle second'></div>
          <div className='center-point'></div>
        </div>
        <div className='time'>12:00</div>
        <div className='date'>Sunday, March <span className='circle'>27</span></div>
      </div>
    </div>
  );
}

export default App;
