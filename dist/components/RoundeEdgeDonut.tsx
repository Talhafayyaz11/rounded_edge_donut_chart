import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import merge from 'lodash/merge'
import plugin from './DoughnutPlugins'

ChartJS.register(ArcElement, Tooltip, Legend)
type ChartData = {
  colors: string[]
  labels: string[]
  values: number[]
}

export const defaultChartData = {
      labels: ['data1', 'data2', 'data3'],
      colors: ['#ff253a', '#f4b710', '#2cb61be3'],
      values: [76, 12, 12],
    }

const RoundeEdgeDonut  = ({
  chartData = defaultChartData,
  displayLegend = false,
  icon,
  legendPosition = 'right',
  options = {
    cutout: '80%',
    plugins: {
      tooltip: {
        position: 'average',
        xAlign: 'left',
        yAlign: 'bottom',
      },
      legend: {
        display: false,
      },
    },
    elements: {
      arc: {
        roundedCornersFor: {
          start: 1, //0th position of Label 1
          end: Array(chartData?.values.length) // all arcs rounded Head
            .fill(null)
            .map((_, i) => i),
        },
      },
    },
  },
  width = 260,
  height = 90,
  className = '',
  redraw = false,
}: {
  chartData: ChartData
  displayLegend?: boolean
  icon?: string
  legendPosition?: 'left' | 'right' | 'top' | 'bottom'
  options?: object
  width?: string | number
  height?: string | number,
  className: string,
  redraw: boolean
}) => {
  const emptyData: ChartData = {
    colors: ['#d3d3d3'],
    labels: ['none'],
    values: [1],
  }

  const totalValue: number = chartData.values.reduce((a, b) => a + b, 0)
  const chartDataNormalized: ChartData =
    totalValue === 0 ? emptyData : chartData

  const opts = merge(
    {
      maintainAspectRatio: false,
      responsive: false,
      legend: {
        display: displayLegend,
        position: legendPosition,
      },
      elements: {
        arc: {
          borderWidth: 0,
        },
      },
    },
    options
  )
  const data = {
    labels: chartDataNormalized.labels,
    datasets: [
      {
        data: chartDataNormalized.values,
        backgroundColor: chartDataNormalized.colors,
        hoverBackgroundColor: chartDataNormalized.colors,
      },
    ],
  }

  return (
    <Doughnut
      id="roundedDoughnut"
      data={data}
      options={opts}
      redraw={redraw}
      width={width}
      height={height}
      plugins={plugin}
      style={{
        background: `transparent url('${icon}') no-repeat center 24px / 15%`,
      }}
      className={className}
    />
  )
}

export default RoundeEdgeDonut