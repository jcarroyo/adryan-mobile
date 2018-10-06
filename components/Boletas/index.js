import React, {Component} from 'react'
import {View, Text, Image} from 'react-native'

import styles from './style'
import Images from '../../assets/Images'

class Boleta extends Component{

  static navigationOptions = {
    drawerLabel: 'Boleta',
    drawerIcon: ({tintColor}) => (
      <Image
        source={Images.drawer.receipt}
        style={[styles.icon]} />
    )
  }

  render(){
    return(
      <View>
        <Text>Boleta</Text>
      </View>
    )
  }
}

export default Boleta