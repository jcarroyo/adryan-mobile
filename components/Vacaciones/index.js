import React, {Component} from 'react'
import {View, Text, Image} from 'react-native'

import styles from './style'
import Images from '../../assets/Images'

class Vacaciones extends Component{

  static navigationOptions = {
    drawerLabel: 'Vacaciones',
    drawerIcon: ({tintColor}) => (
      <Image
        source={Images.drawer.calendar}
        style={[styles.icon]} />
    )
  }
  
  render(){
    return(
      <View>
        <Text>Vacaciones</Text>
      </View>
    )
  }
}

export default Vacaciones