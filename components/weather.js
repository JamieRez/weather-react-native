import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class Weather extends React.Component {
  render() {
    return(

      <View style={styles.container}>
        <Text style={styles.city}>San Francisco</Text>
        <Text style={styles.currentDay}>Friday October 6</Text>
        <Text style={styles.currentWeather}>70°</Text>
      </View>

    )
  }
}

const styles = StyleSheet.create({

  container : {
    marginTop : 100,
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'center',
    //borderWidth : 2,
    flex : 3,
    justifyContent : 'center'
  },

  city : {
    fontSize : 35,
    flex : 1,
  },

  currentDay : {
    flex : 1,
    fontSize : 20,
  },

  currentWeather : {
    flex : 4,
    fontWeight : 'bold',
    fontSize : 60,
  }

});
