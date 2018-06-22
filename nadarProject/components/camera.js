import React from 'react';
import { Button, Text, View, TouchableOpacity, TouchableHighlight, Image } from 'react-native';
import { Camera, Permissions } from 'expo';


export default class TakePic extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera  ref={ref => { this.camera = ref }} style={{ flex: 1 }} type={this.state.type}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
            </View>
            <Button 
              color='#CA474D'
              title='DECOUVRIR'
              onPress={() => this.props.navigation.navigate('Slide2')}
              />
          </Camera>
        </View>
      );
    }
  }
}

