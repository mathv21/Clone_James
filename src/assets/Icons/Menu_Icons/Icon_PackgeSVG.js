import React from "react";
import {SvgXml } from "react-native-svg";

export default function IconPackge(){

    const Icon = `
      <svg xmlns="http://www.w3.org/2000/svg" width="40.735" height="31.48" viewBox="0 0 40.735 31.48">
        <g id="Icon_feather-package" data-name="Icon feather-package" transform="translate(4.955 -2.063)">
          <path id="Caminho_10" data-name="Caminho 10" d="M24.536,13.977,11.25,6.315" transform="translate(3.701 -0.053)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"/>
          <path id="Caminho_14" data-name="Caminho 14" d="M11.683,6.737,0,0" transform="matrix(0.961, 0.017, -0.157, 0.855, 20.844, 9.691)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"/>
          <path id="Caminho_15" data-name="Caminho 15" d="M4.09,2.359,0,0" transform="matrix(0.961, 0.017, -0.157, 0.855, 1.226, 11.192)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"/>
          <path id="Caminho_16" data-name="Caminho 16" d="M5.588,3.222,0,0" transform="matrix(0.961, 0.017, -0.157, 0.855, -1.587, 14.134)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"/>
          <path id="Caminho_17" data-name="Caminho 17" d="M5.588,3.222,0,0" transform="matrix(0.961, 0.017, -0.157, 0.855, -3.056, 18.543)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"/>
          <path id="Caminho_11" data-name="Caminho 11" d="M31.072,23.667V11.857A2.952,2.952,0,0,0,29.6,9.3L19.262,3.4a2.952,2.952,0,0,0-2.952,0L5.976,9.3A2.952,2.952,0,0,0,4.5,11.857v11.81a2.952,2.952,0,0,0,1.476,2.554l10.333,5.9a2.952,2.952,0,0,0,2.952,0l10.333-5.9a2.952,2.952,0,0,0,1.476-2.554Z" transform="translate(3.808 0)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"/>
          <path id="Caminho_12" data-name="Caminho 12" d="M4.905,10.44l12.887,7.455L30.68,10.44" transform="translate(3.801 -0.118)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"/>
          <path id="Caminho_13" data-name="Caminho 13" d="M18,32.88V18" transform="translate(3.594 -0.238)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"/>
        </g>
      </svg>
    `
    const PackgeIcon = () => 
    <SvgXml xml={Icon}  width='100%' height='65%' />

    return <PackgeIcon/>
}