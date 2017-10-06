import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Weather} from './components/weather';
import {DayTemp} from './components/dayTemp';


export default class App extends React.Component {

  getDays(){
    const days = ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
    const temps = ['65°', '68°', '72°', '74°', '71°', '69°', '67°'];
    return days.map(function(day,index){
      return <DayTemp key={index} day={days[index]} temp={temps[index]} />
    })
  }
ß
  render() {
    return (
      <View style={styles.container}>
        <Weather />
        <View style={styles.daysContainer}>
          {this.getDays()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  daysContainer:{
    flex : 3,
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'space-around',
    width : '95%'
  }
});
