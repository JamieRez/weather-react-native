import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export class DayTemp extends React.Component {


    constructor(props){
      super(props);
    }


    render() {
      return(

        <View style = {styles.container}>
          <Text style={styles.days}>{this.props.day}</Text>
          <Text style={styles.temps}>{this.props.temp}</Text>
        </View>

      );
    }
}

const styles = StyleSheet.create({
  container : {
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'center',
    justifyContent : 'center',
    //borderWidth : 2,
  },
  days : {
    fontSize : 15
  },
  temps : {
    fontSize : 15
  }
});
