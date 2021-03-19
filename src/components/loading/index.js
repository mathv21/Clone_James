import React from 'react';
import bikeAnimated from './loading_animated.json';
import {
  Container,
  Animation
} from './styles';

/**
 * App de inspiração: James.
 * Desenvolvido por: Matheus Veríssimo;
 * Email Profissional: mateusverissimo21@hotmail.com
 */


function Loading(){

  return(
    <Container style={{justifyContent: 'center', alignItems: 'center'}}>
      <Animation source={bikeAnimated} resizeMode="contain" autoSize autoPlay loop />
    </Container>
  )
}

export default Loading;