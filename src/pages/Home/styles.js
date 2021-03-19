import styled from 'styled-components/native';
import { ImageBackground, KeyboardAvoidingView} from 'react-native'
import { BlurView } from 'expo-blur';

// 1º box de redes sociais + background de fundo.

export const BackgroundImage = styled(ImageBackground)`

`;

export const KeyboardContainer = styled(KeyboardAvoidingView)` 
  

`

export const BoxLogo = styled.View`
    width: 50%;
    height:10px;
    align-items: center;
`;

export const Logo = styled.Image`
    width: 245px;
    height:85px;
`

export const Container = styled.SafeAreaView`
    background-color:rgba(131,111,255,0.1);
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const BoxSocial = styled.View`
    width: 90%;
    margin-top: 40%;
    padding: 0px 25px 20px;
    align-items: center;
`;

export const ButtonApple = styled.TouchableOpacity`
    width: 116%;
    height: 55px;
    background: #fff;
    border-radius:10px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const LogoApple = styled.Image`
    right: 60%;
`; 

// #FFF6 -> transparent;

export const TextApple = styled.Text`
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    color: #333;
`;

export const ButtonFacebook = styled.TouchableOpacity`
    width: 116%;
    height: 55px;
    background: #5768b0;
    border-radius:10px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top:12px;
`;

export const LogoFacebook = styled.Image`
    right: 100%;
`; 


export const TextFacebook = styled.Text`
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    color: #fff;
`;

// 2º  box login + submit;

export const BoxLogin = styled.View`
    width: 90%;
    padding: 20px 22px;
    border-radius: 6px;
    align-items: center;
`;

export const ItemForm = styled.View`
    flex-direction: row;
    border-bottom-width: 1.2px;
    border-bottom-color: ${props => props.error ? 'red' : '#FFF8'} ;
    margin: 20px 0;
    ${props => !props.multiline && 'flex-direction: row; align-items: center;'}
`;

export const Label = styled.Text`
    color: #FFF8;
    font-size: 20px;
    font-weight:bold;
    margin-bottom: 8px;
    ${props => props.labelActive && `
        top: -32px;
        font-size: 15px;
        font-weight:800;
        color: #FFF8;
  `}
    ${props => !props.picker && `
        position: absolute;
        bottom:0;
        left: 0;
  `}
`;

export const ItemFormSubmit = styled.View`
    flex-direction: row;
    border-bottom-color: ${props => props.error ? 'red' : '#FFF8'} ;
    margin: 20px 0;
    ${props => !props.multiline && 'flex-direction: row; align-items: center;'}
`;

export const Input = styled.TextInput`
    width: 108%;
    font-size: 20px;
    color: #fff;
    font-weight: bold;
    padding-left:2px;
    margin-top: -15px;
`;

export const ButtomSubmit = styled.TouchableOpacity`
    margin-bottom: 20px;
    width: 112%;
    height: 48px;
    background: #7f4fdf;
    border-radius:24px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align:center;
`;

export const TextButtomSubmit = styled.Text`
    font-size: 15px;
    color: #fff;
    text-align:center;
    text-transform: uppercase;
    font-weight:${Platform.OS == 'ios' ? 900 : '700' };
`;

export const TextInline = styled.Text`
    font-size: 13px;
    color: #fff;
    bottom:20px;
    font-weight: 800;
    text-transform: uppercase;
`

//3º links

export const BoxLinks = styled.View`
    width: 90%;
    padding: 0px 10px;
    border-radius: 6px;
    justify-content: space-between;
`;

export const ItemLinks = styled.View`
    flex-direction: row;
    justify-content: space-between;
    border-bottom-color: ${props => props.error ? 'red' : '#FFF8'} ;
    margin: 20px 0;
    ${props => !props.multiline && 'flex-direction: row; align-items: center;'}
`;

export const ButtomNewPass = styled.TouchableNativeFeedback`

`;
export const ButtomNewPassText = styled.Text`
    color: #fff;
    font-weight:500;
    font-size: 17px;
`;

export const ButtomNewCount = styled.TouchableNativeFeedback`

`;

export const ButtomNewCountText = styled.Text`
    color: #fff;
    font-weight: ${Platform.OS == 'ios' ? 600 : 'bold'};
    font-size: 16px;
`;

// 4º Extras Botão explorar

export const BoxExplore = styled(BlurView)`
    height: 52px;
    border-radius:8px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const ButtomExplore = styled.TouchableOpacity`
    width: 85%;
    height: 50px;
    background: #FFF7;
    border-radius:10px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const ButtomExploreText = styled.Text`
    color: #fff;
    font-weight:700;
    font-size: 17px;
`


