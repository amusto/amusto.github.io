import React, { Component } from 'react'
// import './App.css'
import worlddata from './worldData'
import { geoMercator, geoPath } from 'd3'

class WorldMap extends Component {
   render() {
      const projection = geoMercator()
      const pathGenerator = geoPath().projection(projection)
      const countries = worlddata.features
         .map((d,i) => <path
         key={'path' + i}
         d={pathGenerator(d)}
         className='countries'
         />)
   return <svg width="100%" height="100%">
    {countries}
   </svg>
   }
}
export default WorldMap
