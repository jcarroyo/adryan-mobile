import React, {Component} from 'react'
import {Image, Alert} from 'react-native'
import {
  Icon, 
  Container, 
  Header, 
  Content, 
  Left, 
  Right, 
  Button, 
  Body, 
  Title,
  Text
} from 'native-base'

import styles from './style'
import Images from '../../assets/Images'

class HomeScreen extends Component {

  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({tintColor}) => (
      <Image
        source={Images.drawer.home}
        style={[styles.icon]} />
    )
  }

  render(){
    return(
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='ios-menu' />              
            </Button>
          </Left>
          <Body>
            <Title>Principal</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Text>Estas en home</Text>
          <Button
          full
          onPress={() => Alert.alert('mensaje', 'saludoooo')}
          >
            <Text>Presioname</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

export default HomeScreen

