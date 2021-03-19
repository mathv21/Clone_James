//Dependencias
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import 
{ createDrawerNavigator, 
  DrawerContentScrollView, 
  DrawerItem,
  useIsDrawerOpen
} from '@react-navigation/drawer'
import { NavigationContainer, DrawerActions} from '@react-navigation/native';

// |> Pages
import Home from '../pages/Home';
import Feed from '../pages/Feed';

//|> Estilos do Menu_Drawer 
import {
  Menu,
  ItemsMenu,
  Item,
  ItemLogout,
  ItemCLose,
  CloseView
} from './styles'


//Varivael global para chamar a rota;
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

//Componentes de Icones para o menu 
import UserIcon from '../assets/Icons/Menu_Icons/Icon_UserSVG'
import ClockIcon from '../assets/Icons/Menu_Icons/Icon_ClockSVG'
import SuportIcon from '../assets/Icons/Menu_Icons/Icon_HeadsetSVG'
import TicketIcon from '../assets/Icons/Menu_Icons/Icon_TicketSVG'
import UsersIcon from '../assets/Icons/Menu_Icons/Icon_UsersSVG'
import StarIcon from '../assets/Icons/Menu_Icons/Icon_starSVG'
import LogoutIcon from '../assets/Icons/Menu_Icons/Icon_LogoutSVG'
import CloseIcon from '../assets/Icons/Menu_Icons/Icon_CloseSVG'



function DrawerContent({props, navigation}){

  return (

    <> 
    <ItemCLose>
      <CloseView
        label="" 
        icon={() => <CloseIcon />}
        onPress={() => {navigation.dispatch(DrawerActions.closeDrawer())}} 
      />
    </ItemCLose>
      

      <ItemsMenu>
        <Item
        label="Usuario" 
        labelStyle={{color: '#FFF', fontSize: 22, fontWeight: '900'}}
        icon={() => <UserIcon />}
        onPress={() => {}  } 
        />
      </ItemsMenu>
  
    <DrawerContentScrollView  style={{ height: 100 ,top:90}} {...props}>
      <Menu>
         <DrawerItem 
          label="Jankis Prime"
          labelStyle={{color: '#fff', fontSize: 18}}
          onPress={() => {}}
          icon={() => <StarIcon />}
        />

        <DrawerItem 
          label="Pedidos"
          labelStyle={{color: '#fff', fontSize: 18}}
          onPress={() => {}}
          icon={() => <ClockIcon/>}
        />

        <DrawerItem 
          label="Indique e ganhe"
          labelStyle={{color: '#fff', fontSize: 18}}
          onPress={() => {}}
          icon={() => <UsersIcon />}
        />  

        <DrawerItem 
          label="Cupons de desconto"
          labelStyle={{color: '#fff', fontSize: 18}}
          onPress={() => {}}
          icon={() => <TicketIcon />}
        />    

        <DrawerItem 
          label="Suporte"
          labelStyle={{color: '#fff', fontSize: 18}}
          onPress={() => {}}
          icon={() => <SuportIcon />}
        />    
      </Menu>
    </DrawerContentScrollView>
    <ItemLogout>
      <DrawerItem 
        label="Logout"
        labelStyle={{color: '#fff', fontSize: 17}}
        onPress={() => {}}
        icon={() => <LogoutIcon />}
      /> 
    </ItemLogout>
        
    </>
  )

}


function RouteDrawer({navigation}){
  
  return(  
      <NavigationContainer independent={true} >
        <Drawer.Navigator 
          //Menu Drawer Estilizado 
          drawerContent={props => <DrawerContent {...props}/> }
          drawerContentOptions={{
            itemStyle: {backgroundColor: 'trensparent', justifyContent: 'center'},
            labelStyle: {color: '#fff', fontSize: 28, fontWeight: "800" },
          }}
          overlayColor={0}
          drawerPosition="left" 
          drawerStyle={{
            width: 346, backgroundColor: '#8f64d2',
            borderTopEndRadius:25, borderBottomEndRadius: 25,
            shadowColor: "#000",shadowOffset: {width: 0,height: 0,},
            shadowOpacity: 0.50, shadowRadius: 20.00, elevation: 28
          }}
          drawerType="front" 
          screenOptions={{ gestureEnabled: false }}>
          <Drawer.Screen  
            name="User"
            component={Feed} 
          />   
        </Drawer.Navigator>
      </NavigationContainer>
  )

}


export default function Routes({navigation}){

  return (
    <>
      <NavigationContainer independent={true}>
        <Stack.Navigator 
          initialRouteName="Home"
          screenOptions={{
            headerBackTitleVisible: false, headerTransparent: true,
            headerTintColor: '#333',}}
          >
          <Stack.Screen name="Home" 
            options={{
              headerTransparent: true, headerTitle: null,
              headerShown: false
            }} 
            component={Home} />

          <Stack.Screen name="Feed" component={RouteDrawer} 
          options={{gestureEnabled:false, headerShown: false, headerTitle: false}} />

        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};



