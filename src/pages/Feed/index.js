//|> Depedencias
import React from 'react';
import Loading from '../../components/loading'
import { LinearGradient } from 'expo-linear-gradient';
import { DrawerActions } from '@react-navigation/native';
import KeyboardSpacer from 'react-native-keyboard-view-space'
//Componentes Estilizados
import {
  Container,
  WelcomeBox,
  ItemHeader,
  Menu,
  Location,
  ListItemsHeader,
  ListItemsHeaderHorizontal,
  ItemList,
  ItemListTitle,
  ListProduct,
  ListProductHorizontal,
  ListProductSugest,
  ProductSugest,
  ProductSugestImage,
  ProductSugestTitle,
  ItemTitleHeader,
  TitleHeaderOpacity,
  TitleHeader,
  ListExplore,
  ListVertical,
  ListProductExplore,
  ProductSugestExplore,
  ProductSugestImageExplore,
  ProductSugestTitleExplore,
  ProductSugestSubInfoExplore,
  ItemsCard,
  StatusbarProduct,
  StatusBarIcon,
  StatusTypeTitle,
  StatusBarMinutes,
  StatusBarIconMinute,
  StatusMinuteTitle,
  BoxSearch,
  ItemBox,
  IconSearch,
  Placeholder,
  TextInput,
  SafeArea
} from './styles';

// |> Images
import ImgBox from '../../assets/images/Imagem1.jpg';
import Imgpizza from '../../assets/images/pizza.jpeg';
import ImgDuck from '../../assets/images/duckBill.jpg';
import ImgExtra from '../../assets/images/card_james.png';
//Components Icons
import IconMenu from '../../assets/Icons/Menu_Icons/Icon_MenuSVG';
import IconLocation from '../../assets/Icons/Menu_Icons/Icon_LocationSVG';
import IconPackge from '../../assets/Icons/Menu_Icons/Icon_PackgeSVG';
import IconMinutes from '../../assets/Icons/Menu_Icons/Icon_MinutesSVG';
import SearchIcon from '../../assets/Icons/Menu_Icons/Icon_SearchSVG';

/**
 * App de inspiração: James.
 * Desenvolvido por: Matheus Veríssimo;
 * Email Profissional: mateusverissimo21@hotmail.com
 */


export default function Feed({navigation}){

  return(
    <LinearGradient  
      colors={['#ba8dfb', '#A500EE']}start={{x: 1, y: 0}} 
      end={{x: -2, y: 1.0}} locations={[0.4,0.4,0.6]}
      >
      <Container> 
        <ItemHeader>
          <Menu onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <IconMenu />
          </Menu>
          <Location>
            <IconLocation />
          </Location>
        </ItemHeader>
        <ListItemsHeader>
          <ListItemsHeaderHorizontal showsHorizontalScrollIndicator={false} horizontal={true} >
            <ItemList>
              <ItemListTitle>restaurantes</ItemListTitle>
            </ItemList>
            <ItemList >
              <ItemListTitle>mercados</ItemListTitle>
            </ItemList>
            <ItemList >
              <ItemListTitle>farmácias</ItemListTitle>
            </ItemList>
            <ItemList >
              <ItemListTitle>pets</ItemListTitle>
            </ItemList>
            <ItemList >
              <ItemListTitle>ver mais</ItemListTitle>
            </ItemList>
          </ListItemsHeaderHorizontal>
        </ListItemsHeader>
        <WelcomeBox>
        <ListVertical showsVerticalScrollIndicator={false}>
          <ListProduct>
            <ListProductHorizontal showsHorizontalScrollIndicator={false}  horizontal={true}>
              <ListProductSugest>
                <ProductSugest >
                  <ProductSugestImage source={ImgBox} />
                  <ProductSugestTitle>Test1</ProductSugestTitle>
                </ProductSugest>
              </ListProductSugest>

              <ListProductSugest>
                <ProductSugest >
                  <ProductSugestImage source={ImgDuck} />
                  <ProductSugestTitle>Test2</ProductSugestTitle>
                </ProductSugest>
              </ListProductSugest>

              <ListProductSugest>
                <ProductSugest >
                  <ProductSugestImage source={ImgBox} />
                  <ProductSugestTitle>Test3</ProductSugestTitle>
                </ProductSugest>
              </ListProductSugest>

              <ListProductSugest>
                <ProductSugest >
                  <ProductSugestImage source={ImgDuck} />
                  <ProductSugestTitle>Test4</ProductSugestTitle>
                </ProductSugest>
              </ListProductSugest>
            </ListProductHorizontal>
          </ListProduct>

          <ItemTitleHeader>
            <TitleHeaderOpacity>Explorar</TitleHeaderOpacity>
            <TitleHeader>Explorar</TitleHeader>
          </ItemTitleHeader>

          <ListExplore>
            <ListProductExplore>
              <ProductSugestExplore>
                <ProductSugestImageExplore source={ImgExtra} />
                <ProductSugestTitleExplore>Extra</ProductSugestTitleExplore>
                <ProductSugestSubInfoExplore>Av.Dr.Ricardo Jafet, 1501 - vil...</ProductSugestSubInfoExplore>
                <ItemsCard>
                  <StatusbarProduct>
                    <StatusBarIcon>
                      <IconPackge />
                    </StatusBarIcon>
                    <StatusTypeTitle>entrega à calcular</StatusTypeTitle>
                  </StatusbarProduct>

                  <StatusBarMinutes>
                    <StatusBarIconMinute>
                      <IconMinutes />
                    </StatusBarIconMinute>
                    <StatusMinuteTitle>22m</StatusMinuteTitle>
                  </StatusBarMinutes>
                </ItemsCard>
              </ProductSugestExplore>
            </ListProductExplore>

            <ListProductExplore>
              <ProductSugestExplore>
                <ProductSugestImageExplore source={ImgExtra} />
                <ProductSugestTitleExplore>Extra</ProductSugestTitleExplore>
                <ProductSugestSubInfoExplore>Av.Dr.Ricardo Jafet, 1501 - vil...</ProductSugestSubInfoExplore>
                <ItemsCard>
                  <StatusbarProduct>
                    <StatusBarIcon>
                      <IconPackge />
                    </StatusBarIcon>
                    <StatusTypeTitle>entrega à calcular</StatusTypeTitle>
                  </StatusbarProduct>

                  <StatusBarMinutes>
                    <StatusBarIconMinute>
                      <IconMinutes />
                    </StatusBarIconMinute>
                    <StatusMinuteTitle>22m</StatusMinuteTitle>
                  </StatusBarMinutes>
                </ItemsCard>
              </ProductSugestExplore>
            </ListProductExplore>
          </ListExplore>
        </ListVertical>
          <BoxSearch>
            <ItemBox>
              <TextInput placeholder={'Buscar Estabelecimento...'} />
              <IconSearch>
                <SearchIcon />
              </IconSearch>
            </ItemBox>
          </BoxSearch>
          <KeyboardSpacer />
          {/* <Loading /> */}
        </WelcomeBox>
      </Container>
    </LinearGradient>
  )
}