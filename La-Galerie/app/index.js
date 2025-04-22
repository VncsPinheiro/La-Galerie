import { ScrollView, Text, View } from "react-native";
import { useEffect, useState } from 'react';
import RequestApi from '../components/api'

import Title from '../components/Title/'
import Main from '../components/Main/'
import styles from './style'



export default function Index() {
  const [artList, setArtList] = useState('')

  useEffect(() => {
    console.clear()
    console.log('useEffect iniciou');
    RequestApi('https://api.artic.edu/api/v1/artworks?page=67&limit=20&fields=id,title,image_id,artist_title', setArtList)
    console.log(artList)
   

  }, []);
  return (
    <View
    style={styles.container}>
      {/* <ScrollView> */}
        <Title/>
        <Main artList={artList}/>
      {/* </ScrollView> */}
      
    </View>
  );
}


// artist_title
// date_display
