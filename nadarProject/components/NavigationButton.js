import React from 'react' 
import { StyleSheet, Button } from 'react-native'

const styles = StyleSheet.create({
    btn: {
        flex: 1,
        color: 'red',
    },
  })

const NavigationButton = (props) => <Button 
    style={styles.btn} 
    title={props.title} 

export default NavigationButton