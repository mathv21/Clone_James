import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler'
import { DrawerItem } from '@react-navigation/drawer'
import { exp } from 'react-native/Libraries/Animated/src/Easing';


const Color = '#FFF';

export const ItemsMenu = styled.View`
  background-color: #fff2;
  width: 90%;
  height: 11%;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  align-items: center;
  top:9%;
`


export const Item = styled(DrawerItem)`
  margin-top: 20px;
`

export const Menu = styled.View`
  margin:0px 10px;
  top:-60px;
`
export const ItemLogout = styled.View`
  margin:0px 10px;
  bottom:50px;
`

export const CloseView = styled(DrawerItem)`
  margin:10px -82px;
`

export const ItemCLose = styled.View`
  width:30px;
  height:30px;
  margin:10px 85%;
  top:58px;
  align-items:flex-end;
  justify-content:center;
`

