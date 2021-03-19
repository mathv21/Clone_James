import React from "react";
import {SvgXml } from "react-native-svg";

export default function IconMenu(){

    const Icon = `
    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="32" viewBox="0 0 46 32">
      <g id="Menu" transform="translate(-171 -883)">
        <rect id="Retângulo_9" data-name="Retângulo 9" width="26" height="6" rx="3" transform="translate(191 883)" fill="#fff"/>
        <rect id="Retângulo_12" data-name="Retângulo 12" width="26" height="6" rx="3" transform="translate(171 909)" fill="#fff"/>
        <rect id="Retângulo_10" data-name="Retângulo 10" width="46" height="6" rx="3" transform="translate(171 896)" fill="#fff"/>
      </g>
    </svg>
    `
    const MenuIcon = () => 
    <SvgXml xml={Icon}  width='60%' height='180%' />

    return <MenuIcon/>
}