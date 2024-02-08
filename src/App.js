import './App.css';
import Switch from './Switch';
import Light from './Light';
import {useState} from 'react';

function App() {
  const [status, setStatus] = useState(false);

  return (
    <div className="App">
      <Switch status={status} setStatus={setStatus}/>
      <Light status={status}/>
    </div>
  );
}

export default App;
