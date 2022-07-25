import './App.css';
import RoundeEdgeDonut from './lib/components/RoundeEdgeDonut'


function App() {
    const iconBase64 =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJhY3RpdmVzdmciIGNsYXNzbmFtZT0iTXVpU3ZnSWNvbi1yb290IGpzczgxIiBmb2N1c2FibGU9ImZhbHNlIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGFyaWEtaGlkZGVuPSJ0cnVlIj4KICAgICAgPHBhdGggZD0iTTE4LjkyIDYuMDFDMTguNzIgNS40MiAxOC4xNiA1IDE3LjUgNWgtMTFjLS42NiAwLTEuMjEuNDItMS40MiAxLjAxTDMgMTJ2OGMwIC41NS40NSAxIDEgMWgxYy41NSAwIDEtLjQ1IDEtMXYtMWgxMnYxYzAgLjU1LjQ1IDEgMSAxaDFjLjU1IDAgMS0uNDUgMS0xdi04bC0yLjA4LTUuOTl6TTYuNSAxNmMtLjgzIDAtMS41LS42Ny0xLjUtMS41UzUuNjcgMTMgNi41IDEzczEuNS42NyAxLjUgMS41UzcuMzMgMTYgNi41IDE2em0xMSAwYy0uODMgMC0xLjUtLjY3LTEuNS0xLjVzLjY3LTEuNSAxLjUtMS41IDEuNS42NyAxLjUgMS41LS42NyAxLjUtMS41IDEuNXpNNSAxMWwxLjUtNC41aDExTDE5IDExSDV6Ii8+CiAgICA8L3N2Zz4=";
  return (
    <div className="App">
    
      <RoundeEdgeDonut redraw width={200} height={200} chartData={{
      labels: ['data1', 'data2', 'data3'],
      colors: ['#ff253a', '#f4b710', '#2cb61be3'],
      values: [76, 12, 12],
    }} 
    icon={iconBase64}
    backgroundStyles={{backgroundSize: '50px'}}
    />
    </div>
  );
}

export default App;
