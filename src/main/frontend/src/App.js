import axios from 'axios';

import './App.css';
import {useEffect, useState} from "react";

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    axios.get('/api/data')
        .then(res => setData(res.data) ).catch(err => console.log(err));
  }, []);
  return (
    <div className="App">
      <header className="App-header">

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          data: {data}
        </div>


      </header>
    </div>
  );
}

export default App;
