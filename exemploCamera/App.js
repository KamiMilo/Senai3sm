import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Modal, Image } from 'react-native';

import { Camera, CameraType, FlashMode } from 'expo-camera';
import { useEffect, useState, useRef } from 'react';

import { FontAwesome } from '@expo/vector-icons'

import * as MediaLibrary from 'expo-media-library'

export default function App() {

    //Botão para ativar o flash
    //forma de carregar o autofocus 
    //aplicando video no projeto


  //constante para guardar a foto no console
  const [photo, setphoto] = useState(null)
  const [openModal, setOpenModal] = useState(false)
  const cameraRef = useRef(null)
  const [flash,setflash]= useState(Camera.Constants.FlashMode.off)
  
  //constante que guarda se vai abrir a camera traseira ou frontal
  const [tipoCamera, setTipoCamera] = useState(Camera.Constants.Type.front)

  //função para captura de foto
  async function capturePhoto() {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      setphoto(photo.uri)

      setOpenModal(true)

      console.log(photo);
    }

  }

  //função para apagar foto
  function clearPhoto(){
    setphoto(null)

    setOpenModal(false)

  }

  async function savePhoto() {
    if ( photo ) {
      await MediaLibrary.createAssetAsync( photo)
      .then(() => {alert('Sucesso','Foto Salva na Galeria')
    }).catch(error => {alert("Erro ao processar foto")})
    }
    
  }

   function flashOn() {
    setflash(
      flash === Camera.Constants.FlashMode.off 
      ? Camera.Constants.FlashMode.on  :
      Camera.Constants.FlashMode.off 
    );
    
  };
  //permissão para camera
  useEffect(() => {
    (async () => {
      //parametros para a solicitação da permissão
      const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync();
      
      //permissão para acessar a galeria
      const {status : mediaStatus} = await MediaLibrary.requestPermissionsAsync();
    })();

  }, [])


  return (
    
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        ratio={'16:9'}
        type={tipoCamera}
        style={styles.Camera}

      >

        <View style={styles.ViewFlip}>
          <TouchableOpacity style={styles.btnFlip} onPress={() =>
            setTipoCamera(tipoCamera == CameraType.front ? CameraType.back : CameraType.front)} >
            <Text style={styles.txtFlip}>Trocar</Text>
          </TouchableOpacity>
        </View>

      </Camera>

      <TouchableOpacity style={styles.btnCapture} onPress={() => {
        capturePhoto()
      }}>
        <FontAwesome name='camera' size={23} color={'#fff'} />

      </TouchableOpacity>

      <Modal animationType='slide' transparent={false} visible={openModal}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30 }}>
          <Image style={{ width: '100%', height: 500, borderRadius: 10 }}
            source={{ uri: photo }}
          />
          <View style={{ margin: 15, flexDirection: 'row' }}>
            <TouchableOpacity style={styles.cancel} onPress={() => {clearPhoto()}}>
              <FontAwesome name='trash' size={40} color={'#ff0000'} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnUpload} onPress={() => {savePhoto()}}>
              <FontAwesome name='save' size={40} color={'#121212'} />
            </TouchableOpacity>


          </View>

        </View>
      </Modal>
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
    height: '80%'
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
  },
  btnCapture: {
    margin: 20,
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#121212',

    alignItems: 'center',
    justifyContent: 'center'
  },
  cancel: {
    padding: 20,
    borderRadius: 20,
    backgroundColor: 'transparent',

    alignItems: 'center',
    justifyContent: 'center'
  },
  btnUpload: {
    padding: 20,
    borderRadius: 20,
    backgroundColor: 'transparent',

    alignItems: 'center',
    justifyContent: 'center'
  }
});
