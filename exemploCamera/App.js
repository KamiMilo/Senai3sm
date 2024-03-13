import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

import { Camera, CameraType } from 'expo-camera';
import { useEffect, useState } from 'react';

export default function App() {

  //constante que guarda se vai abrir a camera traseira ou frontal
  const[tipoCamera,setTipoCamera] =useState(Camera.Constants.Type.front)

  //permissão para camera
  useEffect(() => {
    (async() => {
      //parametros para a solicitação da permissão
      const {status: cameraStatus} =await Camera.requestCameraPermissionsAsync()
    })();

  },[])


  return (
    <View style={styles.container}>
      <Camera
      ratio={'16:9'}
      type={tipoCamera}
      style={styles.Camera}
      
      >

        <View style={styles.ViewFlip}>
          <TouchableOpacity style={styles.btnFlip} onPress={() => setTipoCamera(tipoCamera == CameraType.front ? CameraType.back : CameraType.front )} >
            <Text style={styles.txtFlip}>Trocar</Text>
          </TouchableOpacity>
        </View>

      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Camera: {
    flex: 1,
    width: '100%',
    height:'80%'
  },
  ViewFlip: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center'

  },
  btnFlip: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    padding: 15
  },
  txtFlip: {
    fontSize: 20,
    color: '#fff'
  }
});
