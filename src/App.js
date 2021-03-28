import React, {useState,useEffect} from 'react';
import './App.css';

function App() {
  let days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  let months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  let [toggle, setToggle]=useState('Dark Mode');
  let [state, setState]=useState({
    hour:0,
    minute:0,
    second:0
  });

  //let [second, setSecond]=useState(0);
  let time= new Date();
  //console.log(time);

  let scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }

  let toogleHandle=()=>{
    let html=document.querySelector('html')
    if(html.classList.contains('dark')){
      html.classList.remove('dark');
      setToggle('Dark Mode');
     }else{
       html.classList.add('dark')
       setToggle('Light Mode')
     }
  }

  useEffect(()=>{
    let timer=setInterval(()=>{
      setState({
        hour: scale(time.getHours()%12, 0, 11, 0, 360),
        minute: scale(time.getMinutes(), 0, 59, 0, 360),
        second: scale(time.getSeconds(), 0, 59, 0, 360)})
    }, 1000);
    return () => clearInterval(timer);
  },[state]);
  console.log(state)

  let smallHour=()=>{
    if (time.getHours()<10){
      return `0${time.getHours()}`
    } else{
      return time.getHours()
    }
  };

  let smallMinutes=()=>{
    if (time.getMinutes()<10){
      return `0${time.getMinutes()}`
    } else {
      return time.getMinutes()
    }
  }

  return (
    <div className='app'>
      <button className='toogle' onClick={toogleHandle}>{toggle}</button>
      <div className='clock-container'>
        <div className='clock'>
          <div className='needle hour' style={{transform: `translate(-50%, -100%) rotate(${state.hour}deg)`}}></div>
          <div className='needle minute' style={{transform: `translate(-50%, -100%) rotate(${state.minute}deg)`}}></div>
          <div className='needle second' style={{transform: `translate(-50%, -100%) rotate(${state.second}deg)`}}></div>
          <div className='center-point'></div>
        </div>
        <div className='time'>{`${smallHour()}:${smallMinutes()}`}</div>
        <div className='date'>{`${days[time.getDay()]}`}, {`${months[time.getMonth()]}`} <span className='circle'>{`${time.getDate()}`}</span></div>
      </div>
    </div>
  );
}

export default App;
