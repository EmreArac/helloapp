import React, {useState} from 'react';
import './App.css';
import Message from './Message';
import Power from './Power';
import Complex from './Complex';

function App() {
    const [x, setX] = useState('');
    const [y, setY] = useState('');

    return (
      <div>
        <Message message="Message received via props" />
        <Message />


        <h3>Power</h3>
        <input
        type="number"
        placeholder="x"
        value={x}
        onChange={(e) => setX(e.target.value)}
        />
        <input
        type="number"
        placeholder="y"
        value={y}
        onChange={(e) => setY(e.target.value)}
        />
        <Power x={parseFloat(x)} y={parseFloat(y)} />   
        <h3>Complex</h3>
<Complex />
      </div>
    );
}

export default App;