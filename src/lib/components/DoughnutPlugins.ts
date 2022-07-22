/* eslint-disable */
const plugin = [
  {
    id: 'roundedDoughnut',
    afterUpdate: function (chart: any) {
      if (chart.options.elements.arc.roundedCornersFor !== undefined) {
        var arcValues = Object.values(
          chart.options.elements.arc.roundedCornersFor
        )

        arcValues.forEach(function (arcs: any) {
          arcs = Array.isArray(arcs) ? arcs : [arcs]

          arcs.forEach(function (i: number) {
            var arc = chart.getDatasetMeta(0).data[i]

            if (arc) {
              arc.round = {
                x: (chart.chartArea.left + chart.chartArea.right) / 2,
                y: (chart.chartArea.top + chart.chartArea.bottom) / 2,
                radius: (arc.outerRadius + arc.innerRadius) / 2,
                thickness: (arc.outerRadius - arc.innerRadius) / 2,
                backgroundColor:
                  arc.circumference !== 0
                    ? arc.options.backgroundColor
                    : 'transparent',
              }
            }
          })
        })
      }
    },
    afterDraw: (chart: any) => {
      if (chart.options.elements.arc.roundedCornersFor !== undefined) {
        var { ctx } = chart

        var doughnutArc,
          roundedCornersFor = chart.options.elements.arc.roundedCornersFor
        for (var position in roundedCornersFor) {
          var values = Array.isArray(roundedCornersFor[position])
            ? roundedCornersFor[position]
            : [roundedCornersFor[position]]

          values.forEach((p: number) => {
            doughnutArc = chart.getDatasetMeta(0).data[p]

            if (doughnutArc) {
              var startAngle = Math.PI / 2 - doughnutArc.startAngle
              var endAngle = Math.PI / 2 - doughnutArc.endAngle
              ctx.save()
              ctx.translate(doughnutArc.round.x, doughnutArc.round.y)
              ctx.fillStyle =
                doughnutArc.circumference !== 0
                  ? doughnutArc.options.backgroundColor
                  : 'transparent'
              ctx.beginPath()
              if (position === 'start') {
                ctx.arc(
                  doughnutArc.round.radius * Math.sin(startAngle),
                  doughnutArc.round.radius * Math.cos(startAngle),
                  doughnutArc.round.thickness,
                  0,
                  2 * Math.PI
                )
              } else {
                ctx.arc(
                  doughnutArc.round.radius * Math.sin(endAngle),
                  doughnutArc.round.radius * Math.cos(endAngle),
                  doughnutArc.round.thickness,
                  0,
                  2 * Math.PI
                )
              }
              ctx.closePath()
              ctx.fill()
              ctx.restore()
            }
          })
        }
      }
    },
  },
]

export default plugin
