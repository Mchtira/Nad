import React from 'react'
import { TextInput } from react-native
import styles from '../styles.js'

export const Input = ({placeholderText, placeholderType, newValue }) => 
  <TextInput
    editable = {true}
    maxLength = {40}
    style={ [styles.textInput, {marginTop: 50, color: 'white'}] }
    placeholder={placeholderText}
    placeholderTextColor = 'white'
    onChangeText={(text) => this.setState({text[placeholderText]})}
    value={newValue} 
  />

