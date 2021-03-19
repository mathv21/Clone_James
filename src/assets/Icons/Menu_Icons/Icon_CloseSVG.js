import React from "react";
import {SvgXml } from "react-native-svg";

export default function IconClose(){

    const Icon = `
      <svg xmlns="http://www.w3.org/2000/svg" width="27.953" height="27.953" viewBox="0 0 27.953 27.953">
       <path id="Icon_ionic-md-close" data-name="Icon ionic-md-close" d="M35.477,10.319l-2.8-2.8L21.5,18.7,10.319,7.523l-2.8,2.8L18.7,21.5,7.523,32.681l2.8,2.8L21.5,24.3,32.681,35.477l2.8-2.8L24.3,21.5Z" transform="translate(-7.523 -7.523)" fill="#fff"/>
      </svg>
    `
    const CloseIcon = () => 
    <SvgXml xml={Icon}  width='20%' height='150%' />

    return <CloseIcon/>
}