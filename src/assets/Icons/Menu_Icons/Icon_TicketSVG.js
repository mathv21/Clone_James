import React from "react";
import {SvgXml } from "react-native-svg";

export default function TicketIcon(){

    const Icon = `
      <svg xmlns="http://www.w3.org/2000/svg" width="53.586" height="32.575" viewBox="0 0 53.586 32.575">
        <g id="iconfinder_support-ticket_4263527" transform="translate(58.793 -12.39) rotate(90)">
          <g id="Grupo_3" data-name="Grupo 3" transform="translate(12.39 5.207)">
            <path id="Caminho_9" data-name="Caminho 9" d="M23.6,1H16.648A4,4,0,0,0,12.39,4.68v6.4h1.464v1.64H12.39V50.906a4,4,0,0,0,4.258,3.68H23.6a5.661,5.661,0,0,1,5.08-2.833,5.686,5.686,0,0,1,5.08,2.833h6.956a3.992,3.992,0,0,0,4.247-3.68V12.719H43.754v-1.64h1.212V4.68A3.992,3.992,0,0,0,40.718,1H33.763a5.68,5.68,0,0,1-5.08,2.833A5.655,5.655,0,0,1,23.6,1ZM41.56,11.079v1.64H39.136v-1.64Zm-4.618,0v1.64H34.518v-1.64Zm-4.618,0v1.64H29.9v-1.64h2.424Zm-4.618,0v1.64H25.283v-1.64Zm-4.618,0v1.64H20.666v-1.64H23.09Zm-4.618,0v1.64H16.048v-1.64Z" transform="translate(-12.39 -1)" fill="rgba(197,175,234,0.82)"/>
          </g>
        </g>
      </svg>
    `
    const IconTicket = () => 
    <SvgXml xml={Icon}  width='20%' height='55%' />

    return <IconTicket/>
}