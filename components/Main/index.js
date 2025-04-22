import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { useEffect, useState } from 'react';
import styles from '../Main/style';

import { useRouter } from 'expo-router';

export default function Main(props) {
    const router = useRouter();

    const [artImg, setArtImg] = useState('')
    console.log('inicio')

    return(
    <View style={styles.container}> 
        <FlatList

        data={props.artList}
        renderItem={({item}) => {
            console.log(item.artist_title)

            return(

                <TouchableOpacity 

                style={styles.viewArt}
                onPress={() => router.push({
                    pathname: '/detail',
                    params: {
                      title: item.title,
                      artist_title: item.artist_title,
                      image_url: `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`,
                    }
                  })}
                
                >

                    <Image
                        style={styles.image}
                        source={{ uri: `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`}}
                        // style={{ width: 100, height: 100 }}
                    />

                    <View style={styles.textContainer}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.artist}>{item.artist_title}</Text>
                        <Text>{artImg}</Text>
                    </View>

                </TouchableOpacity> 
            )
        }}
        />
    </View>
    )
}
