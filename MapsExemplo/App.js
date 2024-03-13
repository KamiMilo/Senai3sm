import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';

//para traçar uma rota entre dois pontos
import MapViewDirections from 'react-native-maps-directions';

//importando dependencia do mapa
import MapView, { Marker,PROVIDER_GOOGLE } from 'react-native-maps';

import {
  requestForegroundPermissionsAsync,//solicita o acesso a localização atual do usuario
  getCurrentPositionAsync //Recebe a localização atual
}
  from 'expo-location'
import { mapskey } from './utils/mapsApiKey';

export default function App() {

  //constante para guardar a posição inicial da localizção do dispositivo
  const [initialPosition, setInitialPosition] = useState(null)


  async function CapturarLocalizacao() {
    const { granted } = await requestForegroundPermissionsAsync()  //espera a permissão do usúario para acessar localização atual

    //Condição para se a permissao for adquirida ele guarda na const com usestate
    if (granted) {
      const captureLocation = await getCurrentPositionAsync()

      setInitialPosition(captureLocation)
    }
  }

  useEffect(() => {
    CapturarLocalizacao()
  }, [1000])

  return (
    <View style={styles.container}>
      {
        initialPosition != null ? (

          <MapView

            initialRegion={{
              latitude: initialPosition.coords.latitude,
              longitude: initialPosition.coords.longitude,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005
            }}
             provider={PROVIDER_GOOGLE}
            customMapStyle={grayMapStyle}
            style={styles.map}
          >

            {/* configuração para aparecer o marcador do ponto */}
            <Marker
              coordinate={{
                latitude: initialPosition.coords.latitude,
                longitude: initialPosition.coords.longitude,
              }}
              title='posição inicial'
              description='estou aqui'
              pinColor={'blue'}

            />
            {/* Linha que traça a rota dos pontos */}
            <MapViewDirections
            origin={ initialPosition.coords}
            destination={{
              latitude: -23.6666,
              longitude: -46.5322,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005

            }}
            strokeWidth={5}
            strokeColor='#496BBA'
            apikey={mapskey}
            />

          {/* configuração para aparecer o marcador do ponto */}
            <Marker
              coordinate={{
                latitude: -23.595354,
                longitude: -46.664280,
              }}
              title='Destino'
              description='preciso ir pra lá'
              pinColor={'red'}

            />


          </MapView>
        ) : (
          <>
            <Text>Localização não encontrada</Text>

            <ActivityIndicator />
          </>
        )

      }
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

  map: {
    flex: 1,
    width: '100%'
  }
});

const grayMapStyle = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#E1E0E7",
      },
    ],
  },
  {
    elementType: "geometry.fill",
    stylers: [
      {
        saturation: -5,
      },
      {
        lightness: -5,
      },
    ],
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#FBFBFB",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#33303E",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "administrative.country",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "poi.business",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#66DA9F",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1B1B1B",
      },
    ],
  },
  {
    featureType: "road",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#C6C5CE",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#FBFBFB",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#ACABB7",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#8C8A97",
      },
    ],
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry",
    stylers: [
      {
        color: "#8C8A97",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#8EA5D9",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
];
