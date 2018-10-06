import * as React from 'react';
import { Font, AppLoading, Constants } from 'expo';

import LoginForm from './components/Login'

import Home from './components/Home'
import Vacaciones from './components/Vacaciones'
import Boletas from './components/Boletas'

import Images from './assets/Images'

import {createStackNavigator, createSwitchNavigator, createDrawerNavigator} from 'react-navigation'

import {Root} from 'native-base'

const Drawer = createDrawerNavigator(
  {
    Home: {screen: Home},
    Boletas: {screen: Boletas},
    Vacaciones: {screen: Vacaciones}
  },
  {
    contentOptions: {
      activeTintColor: "#e91e63"
    }
  }
)

const AppStack = createStackNavigator(
  {
    Drawer: {screen: Drawer},
    HomeScreen: {screen: Home},
    BoletasScreen: {screen: Boletas},
    VacacionesScreen: {screen: Vacaciones}
  },
  {
    initialRouteName: 'Drawer',
    headerMode: 'none'
  }
)

const AuthStack = createStackNavigator(
  {
    LoginScreen: {screen: LoginForm}
  },
  {
    headerMode: 'none'
  }
)

const MyApp = createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: 'Auth'
  }
)

//https://github.com/GeekyAnts/NativeBase/issues/1466
class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Entypo: require("native-base/Fonts/Entypo.ttf"),
      MaterialCommunityIcons: require("native-base/Fonts/MaterialCommunityIcons.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf")
    });
    this.setState({ loading: false });
  }

  render(){
    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    }
    return(
      <Root>
        <MyApp />
      </Root>
    )
  }
}

export default App