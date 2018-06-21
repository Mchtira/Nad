import React from 'react';
import { Text, View, TouchableOpacity, TouchableHighlight, Image } from 'react-native';
import { Camera, Permissions } from 'expo';


export default class TakePic extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    url: ''
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
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type: this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                  });
                }}>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  Flip
                </Text>
              </TouchableOpacity>
              <TouchableHighlight style={{paddingTop: 50}} 
                onPress={async () => {
                  if (this.camera) {
                    const photo = await this.camera.takePictureAsync()
                    this.setState({url : photo})
                    console.log(photo)
                  }
                }
              }>lol = 
                <Image source={require('../pictures/pics.png')}/>
              </TouchableHighlight>
            </View>
          </Camera>
        </View>
      );
    }
  }
}

