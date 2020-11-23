import React from 'react'
import PropTypes from 'prop-types'
import {TouchableOpacity,TouchableHighlight, View, SafeAreaView, Text } from 'react-native'
import { DrawerActions } from 'react-navigation-drawer'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors } from 'theme'

const styles = {
  root: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
container: {
      padding: 10,
      marginTop: 3,
      backgroundColor: '#d9f9b1',
      alignItems: 'center',
   },
   text: {
      color: '#4f603c'
   }
}


const DrawerMenu = ({ navigation }) => (
  <SafeAreaView style={styles.root}>
    <View style={styles.head}>
      <FontIcon.Button
        name="times"
        size={20}
        color={colors.gray}
        backgroundColor="white"
        onPress={() => {
          navigation.dispatch(DrawerActions.closeDrawer())
        }}
      />
    </View>
 <TouchableOpacity
                     key = {'home'}
                     style = {styles.container}
                     onPress = {() => navigation.navigate('Home')}>
                     <Text style = {styles.text}>
                        <Text>Home</Text>
                     </Text>
                  </TouchableOpacity>
<TouchableOpacity
                     key = {'profile'}
                     style = {styles.container}
                     onPress = {() => navigation.navigate('Profile')}>
                     <Text style = {styles.text}>
                        <Text>Profile</Text>
                     </Text>
                  </TouchableOpacity>
  
  </SafeAreaView>
)

DrawerMenu.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
  }),
}

DrawerMenu.defaultProps = {
  navigation: {
    dispatch: () => null,
  },
}

export default DrawerMenu
