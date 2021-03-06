import React from "react";
import {SvgXml } from "react-native-svg";

export default function MinutesIcon(){

    const Icon = `
      <svg xmlns="http://www.w3.org/2000/svg" width="22.07" height="22.07" viewBox="0 0 22.07 22.07">
        <g id="iconfinder_Clock_381590" transform="translate(0.9 0.9)">
          <g id="Clock_2_">
            <g id="Clock_1_">
              <path id="Clock_Border" d="M10.135,0A10.135,10.135,0,1,1,0,10.135,10.135,10.135,0,0,1,10.135,0Z" fill="none" stroke="#fff" stroke-width="1.8"/>
              <g id="Clock_Hand" transform="translate(8.16 4.703)">
                <rect id="Horizental_hand" width="8.241" height="1.831" rx="0.916" transform="matrix(0.951, 0.309, -0.309, 0.951, 0.566, 7.013)" fill="#fff"/>
                <rect id="Vertical_hand" width="2" height="9" rx="1" transform="translate(-0.16 -0.433)" fill="#fff"/>
              </g>
            </g>
          </g>
        </g>
      </svg>
    `
    const IconMinutes= () => 
    <SvgXml xml={Icon}  width='40%' height='100%' />

    return <IconMinutes/>
}