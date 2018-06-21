import React from 'react'
import { TextInput } from react-native
import styles from '../styles.js'

export const Input = (props) => 
  <TextInput
    editable = {true}
    maxLength = {40}
    style={ [styles.textInput, {marginTop: 50, color: 'white'}] }
  />

