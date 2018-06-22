import React from 'react'
import { StyleSheet, Modal, Text, View, Button, ImageBackground, Image, TextInput, TouchableHighlight } from 'react-native'
import { P, H } from './Basics'
import styles from '../styles.js'

class Slide5 extends React.Component {

  constructor() {
    super()
      this.state = { 
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        modalVisible: false,
      }
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible})
  }

  render() {
    return (
      <ImageBackground source= {require('../pictures/filtre_bg.png')} style={styles.backgroundImage}>
        <View style={{marginTop: 100, flex: 1, flexDirection: 'column', alignItems:'center' }}>
          <H> CREATION DE COMPTE </H>
          <TextInput
            editable = {true}
            maxLength = {40}
            style={ [styles.textInput, {marginTop: 50, color: 'white'}] }
            placeholder= 'Alexandre'
            placeholderTextColor = 'white'
            onChangeText={(firstName) => this.setState({firstName})}
            value={this.state.firstName} 
          />
          <TextInput
            editable = {true}
            maxLength = {40}
            style={ [styles.textInput, {color: 'white'}] }
            placeholder= 'Dumas'
            placeholderTextColor = 'white'
            onChangeText={(lastName) => this.setState({lastName})}
            value={this.state.lastName} 
          />
         <TextInput
            editable = {true}
            maxLength = {40}
            style={ [styles.textInput, {color: 'white'}] }
            placeholder="montecristo@gotmail.fr"
            placeholderTextColor = "white"
            onChangeText={(email) => this.setState({email})}
            value={this.state.email} 
          />
        <TextInput
            editable = {true}
            maxLength = {40}
            style={ [styles.textInput, {color: 'white'}] }
            placeholderTextColor = "white"
            placeholder="*******"
            onChangeText={(password) => this.setState({password})}
            value={this.state.password} 
            secureTextEntry = {true}
          />
        </View>
        <View style={styles.btn}>
          <Button 
            color='#000000'
            title='CREER SON COMPTE'
            onPress={() => {
              this.setModalVisible(true);
            }}
          />
        </View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('le sol est argileux')
          }}>
          <ImageBackground source= {require('../pictures/felicitation.png')} style={styles.backgroundImage}>
            <View style={{ marginTop: 50, flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableHighlight 
                  onPress={() => { this.setModalVisible(!this.state.modalVisible) }}>
                  <Text style={{ height: 80, width: 80, marginBottom: 50 }}></Text>
                </TouchableHighlight>
            </View>
          </ImageBackground>
          </Modal>
      </ImageBackground>
    )
  }
}

export default Slide5