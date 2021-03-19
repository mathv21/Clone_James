import React from "react";
import {SvgXml } from "react-native-svg";

export default function SearchIcon(){

    const Icon = `
     <svg xmlns="http://www.w3.org/2000/svg" width="35.997" height="36.004" viewBox="0 0 35.997 36.004">
      <path id="Icon_awesome-search" data-name="Icon awesome-search" d="M35.508,31.127l-7.01-7.01c-.316-.316-1.542-1.657-1.992-1.657l-.349,1.164a14.618,14.618,0,1,0-2.531,2.531H22.143c0,.45,1.658,2.025,1.974,2.341l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z" fill="#fff"/>
     </svg>
    `
    const IconSearch= () => 
    <SvgXml xml={Icon}  width='32%' height='100%' />

    return <IconSearch/>
}