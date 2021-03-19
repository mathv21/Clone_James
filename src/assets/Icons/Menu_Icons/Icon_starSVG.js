import React from "react";
import {SvgXml } from "react-native-svg";

export default function StarIcon(){

    const Icon = `
      <svg xmlns="http://www.w3.org/2000/svg" width="46.155" height="48.036" viewBox="0 0 46.155 48.036">
       <path id="iconmonstr-star-5" d="M22.969,10.238l4.914,10.138,11.165,1.541-8.126,7.808L32.9,40.815,22.969,35.5,9.033,45.493,6.89,21.919l11.165-1.543,4.914-10.138Zm0-9.651L16.107,18.324,2.069,20.376,6.89,21.919,9.033,45.493l13.936-5.217,15.607,8.347L35.462,31.2,48.224,18.936l-17.535-2.42L22.969.587Z" transform="translate(-2.069 -0.587)" fill="#bba0e6"/>
      </svg>

    `
    const IconStar= () => 
    <SvgXml xml={Icon}  width='20%' height='90%' />

    return <IconStar/>
}