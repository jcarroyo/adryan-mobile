import React, {Component} from 'react'
import {
  Container,
  Header,
  Content,
  Body,
  Button,
  Form,
  Item,
  Icon,
  Input,
  Text
} 
from 'native-base'

import {StyleSheet, Image} from 'react-native'

import Images from '../../assets/Images'

class LoginForm extends Component {

  state = {
    email: '',
    password: ''
  }

  handleEmail = (text) => {
    this.setState({
      email: text
    })
  }

  handlePassword = (text) => {
    this.setState({
      password: text
    })
  }

  login(){
    //let {email, password} = this.state
    //let message = `Eres ${email} y tu contraseña es ${password}`
    //Alert.alert("Wewe", message)
    this.props.navigation.navigate('App')
  }

  render(){
    return (
      <Container>
        <Header />
        <Content contentContainerStyle={styles.content}>
          <Form>
            <Image source={Images.login.lock} style={styles.logoImage} />
            <Item>
              <Icon type='Entypo' name='email' />
              <Input placeholder='Correo' />
            </Item>
            <Item>
              <Icon type='MaterialCommunityIcons' name='textbox-password' />
              <Input placeholder='Password' secureTextEntry={true}/>
          </Item>
          <Button 
            iconRight 
            primary
            onPress={() => this.props.navigation.navigate('App')}          
          >            
            <Text>Login</Text>
            <Icon type='Entypo' name='arrow-right' />
          </Button>
          </Form>
        </Content>
      </Container>      
    )
  }
}

const styles = StyleSheet.create({
  //https://moduscreate.com/blog/aligning-children-using-flexbox-in-react-native/
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#dae0ea'
  },
  logoImage: {
    width: 128,
    height: 128
  }
})

export default LoginForm