import React from "react";
import {SvgXml } from "react-native-svg";

export default function IconLocation(){

    const Icon = `
      <svg xmlns="http://www.w3.org/2000/svg" width="23.172" height="48.188" viewBox="0 0 23.172 48.188">
        <g id="marker" transform="translate(-4.828)">
          <path id="Caminho_19" data-name="Caminho 19" d="M120,159.308v-.774a6.679,6.679,0,0,1,2.934-.56c1.492,0,3,.327,3.033.56s.007,21.121.007,21.121c0,.7-1.338,1.272-2.987,1.272S120,180.358,120,179.656Zm0,0" transform="translate(-106.69 -132.74)" fill="#fff"/>
          <path id="Caminho_20" data-name="Caminho 20" d="M63.172,11.586A11.586,11.586,0,1,1,51.586,0,11.586,11.586,0,0,1,63.172,11.586Zm0,0" transform="translate(-35.172)" fill="#fff"/>
          <path id="Caminho_21" data-name="Caminho 21" d="M74.141,33.071A1.071,1.071,0,1,1,73.071,32,1.071,1.071,0,0,1,74.141,33.071Zm0,0" transform="translate(-50.742 -26.467)" fill="#a500ee"/>
        </g>
      </svg>
    `
    const LocationIcon = () => 
    <SvgXml xml={Icon}  width='32%' height='190%' />

    return <LocationIcon/>
}