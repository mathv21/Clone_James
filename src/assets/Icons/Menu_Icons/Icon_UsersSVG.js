import React from "react";
import {SvgXml } from "react-native-svg";

export default function UsersIcon(){

    const Icon = `
    <svg xmlns="http://www.w3.org/2000/svg" width="49" height="54" viewBox="0 0 49 54">
      <g id="Icon_Users" transform="translate(-163 -474)">
        <path id="Retângulo_1" data-name="Retângulo 1" d="M8,0h5a0,0,0,0,1,0,0V32a0,0,0,0,1,0,0H4a4,4,0,0,1-4-4V8A8,8,0,0,1,8,0Z" transform="translate(163 496)" fill="rgba(187,160,230,0.84)"/>
        <path id="Retângulo_3" data-name="Retângulo 3" d="M0,0H5a8,8,0,0,1,8,8V28a4,4,0,0,1-4,4H0a0,0,0,0,1,0,0V0A0,0,0,0,1,0,0Z" transform="translate(199 496)" fill="rgba(187,160,230,0.84)"/>
        <path id="Retângulo_2" data-name="Retângulo 2" d="M8,0h3a8,8,0,0,1,8,8V32a4,4,0,0,1-4,4H4a4,4,0,0,1-4-4V8A8,8,0,0,1,8,0Z" transform="translate(178 492)" fill="rgba(187,160,230,0.84)"/>
        <circle id="Elipse_4" data-name="Elipse 4" cx="7" cy="7" r="7" transform="translate(165 480)" fill="rgba(187,160,230,0.84)"/>
        <circle id="Elipse_6" data-name="Elipse 6" cx="7" cy="7" r="7" transform="translate(196 480)" fill="rgba(187,160,230,0.84)"/>
        <circle id="Elipse_5" data-name="Elipse 5" cx="8.5" cy="8.5" r="8.5" transform="translate(179 474)" fill="rgba(187,160,230,0.84)"/>
      </g>
    </svg>

    `
    const IconUsers= () => 
    <SvgXml xml={Icon}  width='20%' height='90%' />

    return <IconUsers/>
}