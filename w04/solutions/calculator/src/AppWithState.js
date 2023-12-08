import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Button from './Button';
import { useState } from 'react';

function AppWithEvent() {
  const [result, setResult] = useState(0);

  const calcButtons = [
    [  // first row
      {cols: 1, value: 7, type: 'digit'},
      {cols: 1, value: 8, type: 'digit'},
      {cols: 1, value: 9, type: 'digit'},
      {cols: 1, value: '/', type: 'operator'},
    ],
    [  // second row
      {cols: 1, value: 4, type: 'digit'},
      {cols: 1, value: 5, type: 'digit'},
      {cols: 1, value: 6, type: 'digit'},
      {cols: 1, value: '*', type: 'operator'},
    ],
    [  // third row
      {cols: 1, value: 1, type: 'digit'},
      {cols: 1, value: 2, type: 'digit'},
      {cols: 1, value: 3, type: 'digit'},
      {cols: 1, value: '-', type: 'operator'},
    ],
    [  // last row
      {cols: 1, value: 0, type: 'digit'},
      {cols: 2, value: '=', type: 'result'},
      {cols: 1, value: '+', type: 'operator'},
    ]
  ];

  function handleClick(type, value) {
    if (type === 'digit') {
      setResult(result * 10 + value);
    }
  }
  
  const buttons = calcButtons.map((row, idx) => {
    const rowButtons = row.map((btn) => 
      <Button key={btn.value} cols={btn.cols} type={btn.type} value={btn.value} onClick={handleClick} />
    );
    return (
      <div className="row">
        { rowButtons }
      </div>
    );
  });

  return (
    <div className="App">
      <h1>
        Calculator
      </h1>
      <div className='container'>
        {/* Result row */}
        <div key="result" className='row'>
          <div className='col'>
            <input type='text' readOnly={true} value={result} />
          </div>
        </div>
        { buttons }
      </div>
    </div>
  );
}

export default AppWithEvent;
