import * as d3 from 'd3'
import { PieArcDatum } from 'd3-shape'
import { DonutChartData, DonutChartProps } from 'interfaces/Charts'
import { useEffect, useRef } from 'react'

const DonutChart = ({ data }: DonutChartProps) => {
  const ref = useRef<SVGSVGElement>(null)
  const pie = d3.pie<DonutChartData>().value((d) => d.value)
  const arc = d3
    .arc<PieArcDatum<DonutChartData>>()
    .innerRadius(180)
    .outerRadius(250)
  const arcs = pie(data)
  const size = 600

  useEffect(() => {
    const svg = d3.select(ref.current)

    svg
      .attr('preserveAspectRatio', 'xMinYMin meet')
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('viewBox', `0 0 ${size} ${size}`)
      .append('g')
      .selectAll('path')
      .data(arcs)
      .join('path')
      .attr('d', arc)
      .attr('fill', ({ data }) => data.fill)
      .attr('transform', `translate(${size / 2}, ${size / 2})`)
  }, [ref, arc, arcs])

  return (
    <div className="relative">
      <svg ref={ref} className="w-full h-full" />
    </div>
  )
}

export default DonutChart
