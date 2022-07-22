import React from 'react';
import logo from './logo.svg';
import './App.css';
import RoundeEdgeDonut from './lib/components/RoundeEdgeDonut'


function App() {
  return (
    <div className="App">
    
      <RoundeEdgeDonut redraw width={200} height={200} chartData={{
      labels: ['data1', 'data2', 'data3'],
      colors: ['#ff253a', '#f4b710', '#2cb61be3'],
      values: [76, 12, 12],
    }}/>
    </div>
  );
}

export default App;
