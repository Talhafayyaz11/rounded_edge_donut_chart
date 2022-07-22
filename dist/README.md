
# Donut chart with Rounded Edges

This project is extension of  [react-chart-j2](https://www.npmjs.com/package/react-chartjs-2) donut chart. This package provides nice little overlapping edges for donut chart with minimal third part dependecies.



## Usage/Examples

```javascript
import { RoundeEdgeDonut } from "rounded-edge-donut";
const iconBase64 =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJhY3RpdmVzdmciIGNsYXNzbmFtZT0iTXVpU3ZnSWNvbi1yb290IGpzczgxIiBmb2N1c2FibGU9ImZhbHNlIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGFyaWEtaGlkZGVuPSJ0cnVlIj4KICAgICAgPHBhdGggZD0iTTE4LjkyIDYuMDFDMTguNzIgNS40MiAxOC4xNiA1IDE3LjUgNWgtMTFjLS42NiAwLTEuMjEuNDItMS40MiAxLjAxTDMgMTJ2OGMwIC41NS40NSAxIDEgMWgxYy41NSAwIDEtLjQ1IDEtMXYtMWgxMnYxYzAgLjU1LjQ1IDEgMSAxaDFjLjU1IDAgMS0uNDUgMS0xdi04bC0yLjA4LTUuOTl6TTYuNSAxNmMtLjgzIDAtMS41LS42Ny0xLjUtMS41UzUuNjcgMTMgNi41IDEzczEuNS42NyAxLjUgMS41UzcuMzMgMTYgNi41IDE2em0xMSAwYy0uODMgMC0xLjUtLjY3LTEuNS0xLjVzLjY3LTEuNSAxLjUtMS41IDEuNS42NyAxLjUgMS41LS42NyAxLjUtMS41IDEuNXpNNSAxMWwxLjUtNC41aDExTDE5IDExSDV6Ii8+CiAgICA8L3N2Zz4='


function App() {
  return <RoundeEdgeDonut width={500} height={500} chartData={{
      labels: ['data1', 'data2', 'data3'],
      colors: ['#ff253a', '#f4b710', '#2cb61be3'],
      values: [76, 12, 12],
    }} 
    icon={iconBase64}
    displayLegend={true}
    legendPosition={"left"}
    />
}
```

## Props Documentation


| Prop Name | Type     | Default                | Description                |
| :-------- | :------- | :------------------------- | :-------------------------
| `chartData` | `object` | `{labels: ['data1','data2',data3],colors: ['#ff253a', '#f4b710', '#2cb61be3'],values: [76, 12, 12]}`|`Datasource for donut chart`| 
|`displayLegend`|`boolean`| `false`| `flag to show/hide legends`
|`icon`|`string`|''|`Url of icon to show inside donut`
|`legendPosition`|`string`|`right`|`Position of legends`
|`options`|`object`|`object`|`extra options that can be passed to donut chart`
|`width`|`string or number` | `269`| `width of donut chart`
|`height`|`string or number`|`90`|`height of donut chart`
|`className`|`string`|`empty`|`className for donut`
|`redraw`|`boolean`|`false`|`should chart redraw on prop change`



## Demo

https://codesandbox.io/s/uetg19?file=/src/App.js
