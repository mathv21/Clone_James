import React from "react";
import {SvgXml } from "react-native-svg";

export default function IconClock(){

    const Icon = `
      <svg id="iconfinder_Clock_381590" xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46">
        <g id="Clock_2_">
          <g id="Clock_1_">
            <path id="Clock_Border" d="M23,0A23,23,0,1,1,0,23,23,23,0,0,1,23,0Z" fill="#bba0e6"/>
            <g id="Clock_Hand" transform="translate(20.125 10.063)">
              <rect id="Horizental_hand" width="17" height="3" rx="1" transform="translate(-0.125 14.937)" fill="#915fd7"/>
              <rect id="Vertical_hand" width="3" height="18" rx="1" transform="translate(-0.125 -0.063)" fill="#915fd7"/>
            </g>
          </g>
        </g>
     </svg>

    `
    const ClockIcon = () => 
    <SvgXml xml={Icon}  width='20%' height='75%' />

    return <ClockIcon/>
}