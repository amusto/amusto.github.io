import React, { Component } from 'react'
import * as d3 from 'd3'

class BarChartHorizontal extends Component {
    constructor(props){
        super(props)
        this.createBarChart = this.createBarChart.bind(this)
    }

    componentDidMount() {
        this.createBarChart()
    }

    componentDidUpdate() {
        // this.createBarChart()
    }

    createBarChart() {
        const node = this.node
        var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
            11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];

        var w = 600,
            h = 300,
            // padding = 25,
            // barPadding = 1,
            // maxValue = 25,
            sortOrder = false;

        var xScale = d3.scaleBand()
            .domain(d3.range(dataset.length))
            .rangeRound([0, w], 0.05)
            .paddingInner(0.05);

        var yScale = d3.scaleLinear()
            .domain([0, d3.max(dataset)])
            .range([0, h]);

        d3.select(node)
            .selectAll('rect')
            .data(dataset)
            .enter()
            .append('rect')

        d3.select(node)
            .selectAll('rect')
            .data(dataset)
            .exit()
            .remove()

        d3.select(node)
            .selectAll('rect')
            .attr('width', w)
            .attr('height', h)

        // create bars
        d3.select(node)
            .selectAll('rect')
            .data(dataset)
            .enter()
            .append('rect')
            .attr('x', function(d, i) {
                return xScale(i);
            })
            .attr('y', function(d) {
                return h - yScale(d);
            })
            .attr('width', xScale.bandwidth()) // v3 rangeBand() becomes bandwidth in v4
            .attr('height', function(d) {
                return yScale(d);
            })
            .attr('fill', function(d) {
                return "rgb(0, 0, " + (d * 10) + ')';
            })
            .on('click', function() {
                sortBars();
            })
            .on('mouseover', function(d) {
                //get this bar's x/y values, then augment for the tooltip
                var xPosition = parseFloat(d3.select(this).attr('x')) + xScale.bandwidth() / 2;
                var yPosition = parseFloat(d3.select(this).attr('y')) + 14;

                // Create tooltips
                node.append('text')
                    .attr('id', 'tooltip')
                    .attr('x', xPosition)
                    .attr('y', yPosition)
                    .attr('text-anchor', 'middle')
                    .attr('font-family', 'sans-serif')
                    .attr('font-size', '11px')
                    .attr('font-weight', 'bold')
                    .attr('fill', 'black')
                    .text(d);
            })
            .on('mouseout', function() {
                // remove the tooltip
                d3.select('#tooltip').remove();
            })



        var sortBars = function() {
            // Flip value of sortOrder
            sortOrder = !sortOrder;

            node.selectAll('rect')
                .sort(function(a, b) {
                    if(sortOrder) {
                        return d3.ascending(a, b);
                    } else {
                        return d3.descending(a, b);
                    }

                })
                .transition()
                .delay(function(d, i) {
                    return i * 50;
                })
                .duration(1000)
                .attr('x', function(d, i) {
                    return xScale(i);
                });
        }

    }

    render() {
        return <svg ref={node => this.node = node} width="100%" height="100%"></svg>
    }

}
export default BarChartHorizontal
