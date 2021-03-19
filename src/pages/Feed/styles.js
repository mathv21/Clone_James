import styled from 'styled-components/native';
import {SafeAreaView, KeyboardAvoidingView} from 'react-native'

//header

export const Container = styled.SafeAreaView`
    display: flex;
    height: 100%;
`;

export const ItemHeader = styled.View`
    width:100%;
    flex-direction:row;
    justify-content:space-between;
`;

export const Menu = styled.TouchableOpacity`
    justify-content:center;
    align-items:center;
    width:40px;
    height:40px;
    border-radius:10px;
    left:8px;
`;

export const Location = styled.TouchableOpacity`
    justify-content:center;
    align-items:center;
    width:40px;
    height:40px;
    border-radius:10px;
`;
export const ListItemsHeader = styled.View`
    width:100%;
    height:65px;
    flex-direction:row;
    align-items:center;
`;

export const ListItemsHeaderHorizontal = styled.ScrollView`
    width:100%;
    padding-left:10px;
`;

export const ItemList = styled.TouchableOpacity`
    width:130px;
    border-radius:20px;
    height:32px;
    background-color:#fff4;
    margin:0px 8px;
    justify-content:center;
    align-items:center;
`;

export const ItemListTitle = styled.Text`
    font-size:15px;
    font-weight:600;
    color: #EAEAEA;
    opacity:0.7;
`

export const WelcomeBox = styled.View`
    background-color: #F3F9FA !important;
    justify-content: center;
    width: 100%;
    height: 90%;
    margin-top:2%;
    border-radius: 15px;
`;

//Listagem de produto Vertical

export const ListProduct = styled.View`
    position:absolute;
    top:0;
    width:100%;
    height: 250px;
    /* background-color:#333; */
    align-items:center;
`;


export const ListProductHorizontal = styled.ScrollView`
    width:100%;
    height:60px;
    /* background-color:#c3c3c3; */
`;

export const ListProductSugest = styled.View`
    width:155px;
    height: 84%;
    /* background-color:#333; */
    margin-top:30px;
    border-radius: 10px;
    align-items:center;
    padding-left:20px;
`;


export const ProductSugest = styled.TouchableOpacity`
    width:100%;
    height:100%;
    border-radius: 10px;
    background-color:#FFF;
    align-items:center;
    justify-content:center;
    shadowColor: black;
    shadowOffset: {
        width: 0,
        height: 2
    };
    shadowOpacity: 0.15;
    shadowRadius: 4.84;
    elevation: 5;
`;

export const ProductSugestImage = styled.Image`
    width:80%;
    height:80%;
    border-radius:10px;
`;

export const ProductSugestTitle = styled.Text`
    margin-top:8px;
    font-size:16px;
    font-weight:bold;
`;

// Compenetes titulo Explorar

export const ItemTitleHeader = styled.View`
    height:60px;
    margin-top:72%;
    justify-content:center; 
    /* background-color: #c3c3c3c0; */
`;

export const TitleHeaderOpacity = styled.Text`
    padding-left:16px;
    font-size:45px;
    opacity:0.2;
    font-weight:bold;
    color:#c9c9c9f5;
`;

export const TitleHeader = styled.Text`
    padding-left:25px;
    font-size:24px;
    font-weight:bold;
    color:#000;
    z-index:1px;
    bottom:42px;
`;

// Items do Explorar Box

export const ListExplore = styled.View`
    width:100%;
    height: 120%;

    /* background-color:#333; */
`;


export const ListVertical = styled.ScrollView`
    width:100%;
    height:100%;
    /* background-color:#c3c3c3; */
`;

export const ListProductExplore = styled.View`
    justify-content:center;
    width:88%;
    height: 280px;
    background-color:#ccc;
    border-radius: 10px;
    align-items:center;
    margin: 0px auto 20px;
`;


export const ProductSugestExplore = styled.TouchableOpacity`
    width:100%;
    height:100%;
    border-radius: 10px;
    background-color:#FFF;
    align-items:flex-start;
    justify-content:center;
    shadowColor: black;
    shadowOffset: {
        width: 0,
        height: -2
    };
    shadowOpacity: 0.1;
    shadowRadius: 4;
    elevation: 5;
`;

export const ProductSugestImageExplore = styled.Image`
    width:92%;
    height:60%;
    border-radius:10px;
    bottom:10px;
    margin:0 auto;
`;

export const ProductSugestTitleExplore = styled.Text`
    left:14px;
    font-size:18px;
    bottom:4px;
    font-weight:bold;
`;

export const ProductSugestSubInfoExplore = styled.Text`
    left:14px;
    font-size:15px;
    bottom:0px;
    font-weight:600;
    color:#C5C7D0;
`;

//Statusbar Card Items

export const ItemsCard = styled.View`
    width:100%;
    flex-direction:row;
    justify-content:space-around;
    top:10px;
`;

export const StatusbarProduct = styled.View`
    width:168px;
    height:24px;
    background-color:#0EE4E4;
    border-radius:10px;

`;

export const StatusBarIcon = styled.View`
    width:42px;
    height:24px;
    background-color:#4BC0D9;
    border-top-left-radius:10px;
    border-bottom-left-radius:10px;
    align-items:center;
    justify-content:center;
`;

export const StatusTypeTitle = styled.Text`
    font-size:12px;
    font-weight:bold;
    color:#fff;
    margin:-20px auto 0px 48px;
`;


export const StatusBarMinutes = styled.View`
    width:84px;
    height:26px;
    background-color:#E7E9F0;
    border-radius:10px;
`;


export const StatusBarIconMinute = styled.View`
    width:42px;
    height:26px;
    background-color:#D4D6DF;
    border-top-left-radius:10px;
    border-bottom-left-radius:10px;
    align-items:center;
    justify-content:center;
`;

export const StatusMinuteTitle = styled.Text`
    font-size:13px;
    font-weight:bold;
    color:#AEB1BD;
    margin:-20px auto 0px 48px;
`;



export const BoxSearch = styled.View`
  width: 100%;
  height:17%;
  background-color: #fff;
  align-items: center;
  border-radius:14px;
  shadowOffset: {  width: 5, height: 5};
  shadowColor: black;
  shadowOpacity: 0.1;
  align-items:center;
`;

export const ItemBox = styled.View`
  flex-direction:row;
  width:100%;
  /* background-color:#f00; */
  justify-content:space-around;
  align-items:center;
  margin-top:15px;
`

export const IconSearch = styled.TouchableOpacity`
    width:70px;
    height: 50px;
    background-color:#CED4D9;
    border-radius:15px;
    justify-content:center;
    align-items:center;
`;

export const TextInput = styled.TextInput`
  width:60f%;
  height:34px;
  /* background-color:#fff; */
  font-size:14px;
`