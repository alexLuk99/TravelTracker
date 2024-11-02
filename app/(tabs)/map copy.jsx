import { View, Text } from 'react-native'
import React from 'react'
import WoldMap from '../../maps/world.jsx';
import World from "@svg-maps/world";

import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";



const App = () => {
  return (
    <View>
      <WoldMap/>
    </View>
  )
}

   
  

  export default App