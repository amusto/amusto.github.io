import React, { Component } from 'react'
import { max, scaleLinear, select } from 'd3'

class ExampleCharts extends Component {
   constructor(props){
      super(props)
      this.state = {
        reportId: 1
      }
      this.createBarChart = this.createBarChart.bind(this)
   }

   componentDidMount() {
      console.log(this.props)
      this.createBarChart()
   }

   componentDidUpdate() {
      this.createBarChart()
   }

   createBarChart() {
       const node = this.node
       const dataMax = max(this.props.data)
       const yScale = scaleLinear()
           .domain([0, dataMax])
           .range([0, this.props.size[1]])
       select(node)
           .selectAll('rect')
           .data(this.props.data)
           .enter()
           .append('rect')

       select(node)
           .selectAll('rect')
           .data(this.props.data)
           .exit()
           .remove()
       select(node)
           .selectAll('rect')
           .data(this.props.data)
           .style('fill', '#fe9922')
           .attr('x', (d,i) => i * 25)
           .attr('y', d => this.props.size[1] - yScale(d))
           .attr('height', d => yScale(d))
           .attr('width', 25)

   }

   render() {
      return <svg ref={node => this.node = node} width="100%" height="100%"></svg>
   }
}
export default ExampleCharts
