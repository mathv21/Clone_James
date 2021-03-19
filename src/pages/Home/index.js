import React, {useEffect, useState} from 'react';
import { useFormik } from 'formik';
import { CommonActions } from '@react-navigation/native';
import {
  BackgroundImage,
  KeyboardContainer,
  BoxLogo,
  Logo,
  Container,
  BoxSocial,
  ButtonApple,
  LogoApple,
  TextApple,
  ButtonFacebook,
  LogoFacebook,
  TextFacebook,
  BoxLogin,
  ItemForm,
  Label,
  Input,
  ItemFormSubmit,
  ButtomSubmit,
  TextButtomSubmit,
  TextInline,
  BoxLinks,
  ItemLinks,
  ButtomNewPass,
  ButtomNewPassText,
  ButtomNewCount,
  ButtomNewCountText,
  BoxExplore,
  ButtomExplore,
  ButtomExploreText
} from './styles';

import JankisLogo from '../../assets/images/logo_Jankis.png';
import background from '../../assets/images/background.jpg'
import Applelogo from '../../assets/images/logo_apple.png';
import Facelogo from '../../assets/images/logo_facebook.png';


export default function Home({ navigation }){

  const [fieldActive, activeField] = useState({});

  const formik = useFormik({
    initialValues: {
      email: '',
      senha: ''
    },
  })


  function handleScrrenFeed(){
   navigation.navigate('Feed')
  }



  return(
  <BackgroundImage source={background}>
      <Container>
          <BoxLogo>
            <Logo source={JankisLogo} />
          </BoxLogo>
          <BoxSocial>
            {
              Platform.OS == 'ios' && (
              <ButtonApple>
                  <LogoApple source={Applelogo} />
                  <TextApple>Iniciar sessão com a Apple</TextApple>
               </ButtonApple>
              )
            }
            <ButtonFacebook >
              <LogoFacebook source={Facelogo}/>
              <TextFacebook>Entrar com Facebook</TextFacebook>
            </ButtonFacebook>
            
          </BoxSocial>
          <KeyboardContainer 
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            focusable={true}  
          >
            <BoxLogin>
                <TextInline>ou</TextInline>
                <ItemForm>
                  <Label labelActive={fieldActive.email}>e-mail</Label>
                  <Input
                    value={formik.values.email}
                    onChangeText={text => formik.setFieldValue('email', text)}
                    onBlur={(e) => activeField({ ...fieldActive, email: formik.values.email != '' })}
                    onFocus={(e) => activeField({ ...fieldActive, email: true })}
                  />
                </ItemForm>
                <ItemForm>
                  <Label labelActive={fieldActive.senha}>senha</Label>
                  <Input
                    secureTextEntry
                    value={formik.values.senha}
                    onChangeText={text => formik.setFieldValue('senha', text)}
                    onBlur={(e) => activeField({ ...fieldActive, senha: formik.values.senha != '' })}
                    onFocus={(e) => activeField({ ...fieldActive, senha: true })}
                  />
                </ItemForm>
                <ItemFormSubmit>
                  <ButtomSubmit>
                      <TextButtomSubmit>Login</TextButtomSubmit>
                  </ButtomSubmit>
                </ItemFormSubmit>
            </BoxLogin>
          </KeyboardContainer>
          <BoxLinks>
            <ItemLinks>
              <ButtomNewPass>
                <ButtomNewPassText>Esqueceu sua senha?</ButtomNewPassText>   
              </ButtomNewPass>

              <ButtomNewCount>
                <ButtomNewCountText>Criar conta.</ButtomNewCountText>
              </ButtomNewCount>
            </ItemLinks>
          </BoxLinks>
          <BoxExplore intensity={60}>
            <ButtomExplore onPress={handleScrrenFeed}>
              <ButtomExploreText>Explorar o app</ButtomExploreText>
            </ButtomExplore>
          </BoxExplore>
      </Container>
    </BackgroundImage>
  )
};