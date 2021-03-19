import React from "react";
import {SvgXml } from "react-native-svg";

export default function UserIcon(){

    const Icon = `
      <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58">
        <g id="Icon_user" transform="translate(-138 -184.793)">
          <circle id="Elipse_3" data-name="Elipse 3" cx="29" cy="29" r="29" transform="translate(138 184.793)" fill="#fefffe"/>
          <g id="male-user" transform="translate(151.182 196.665)">
            <g id="Grupo_1" data-name="Grupo 1" transform="translate(0 0)">
              <path id="Caminho_5" data-name="Caminho 5" d="M74.5,244.466c-4.508-1.473-6.382-3.3-6.382-3.3l-.151.144a6.419,6.419,0,0,1-4.169,2h-.127a6.419,6.419,0,0,1-4.168-2l-.151-.144s-1.874,1.831-6.382,3.3c-6.655,2.486-4.657,12.6-4.659,12.682.21,1.127.332,1.514.438,1.558,6.683,2.975,23.289,2.975,29.972,0,.106-.044.229-.431.438-1.558C79.153,257.07,81.178,246.992,74.5,244.466Z" transform="translate(-48.026 -224.43)" fill="#9d6fdb"/>
              <path id="Caminho_6" data-name="Caminho 6" d="M167.623,8.414l-.056-.052a4.4,4.4,0,0,1-.345-.279s.653-2.849.129-4.2A6.521,6.521,0,0,0,164.243.464a5.56,5.56,0,0,0-2.59-.591,8.016,8.016,0,0,1-.97,0s-.453,0-.491,0h-2.044A6.655,6.655,0,0,0,155.8.806a6.736,6.736,0,0,0-1.991,3.08c-.524,1.347.129,4.2.129,4.2a4.423,4.423,0,0,1-.345.279l-.056.052c-.253.249-.191,1.027.086,1.836a4,4,0,0,0,.656,1.219c.794,3.225,3.557,5.978,6.372,5.978s5.431-2.753,6.226-5.978a3.994,3.994,0,0,0,.656-1.219C167.814,9.441,167.884,8.609,167.623,8.414Z" transform="translate(-144.929 0.129)" fill="#9d6fdb"/>
            </g>
          </g>
        </g>
      </svg>
    `
    const IconUser = () => 
    <SvgXml xml={Icon} style={{right:10}}  width='26%' height='140%' />

    return <IconUser/>
}