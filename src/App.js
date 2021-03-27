import './App.css';

function App() {
  return (
    <div className='app'>
      <button className='toogle'>Dark Mode</button>
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
