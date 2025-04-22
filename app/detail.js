import { useLocalSearchParams } from 'expo-router';
import { View, Text, Image } from 'react-native';

import styles from './styleDetail'

export default function Detail() {
  const { title, artist_title, image_url, description } = useLocalSearchParams();

  console.log(description)

  return (
    <View style={styles.container}>

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.artist}>{artist_title}</Text>
      {image_url ? (
      <Image source={{ uri: image_url }} style={styles.image} />
         ) : (
      <Text>Imagem não disponível</Text>
      )}


    </View>
  );
}

