import React from "react";
import {SvgXml } from "react-native-svg";

export default function StarIcon(){

    const Icon = `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="41.841" height="41" viewBox="0 0 41.841 41">
        <defs>
          <clipPath id="clip">
            <use xlink:href="#fill"/>
          </clipPath>
        </defs>
        <g id="Logout" transform="translate(-172 -691)">
          <rect id="Retângulo_4" data-name="Retângulo 4" width="32" height="41" rx="5" transform="translate(172 691)" fill="rgba(172,137,224,0.98)"/>
          <g id="Retângulo_5" data-name="Retângulo 5" transform="translate(183 711)" fill="none" stroke="#915fd7" stroke-width="5">
            <rect id="fill" width="19" height="2" rx="1" stroke="none"/>
            <path d="M0,-0.5h19M16.5,0v2M19,2.5h-19M2.5,2v-2" fill="none" clip-path="url(#clip)"/>
          </g>
          <path id="Icon_awesome-arrow-right" data-name="Icon awesome-arrow-right" d="M5.034,3.42l.587-.587a.632.632,0,0,1,.9,0l5.138,5.135a.632.632,0,0,1,0,.9L6.517,14a.632.632,0,0,1-.9,0l-.587-.587a.635.635,0,0,1,.011-.906L8.23,9.475H.634A.633.633,0,0,1,0,8.841V7.995a.633.633,0,0,1,.634-.634h7.6L5.045,4.327A.63.63,0,0,1,5.034,3.42Z" transform="translate(202 703.517)" fill="#bbace8"/>
        </g>
      </svg>
    `
    const IconStar= () => 
    <SvgXml xml={Icon}  width='20%' height='90%' />

    return <IconStar/>
}