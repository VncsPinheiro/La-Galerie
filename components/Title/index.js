import { Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import styles from './style';

export default function Title() {
   return(
    <View style={styles.titleView}> 
        <Text style={styles.title}>
        La Galerie
        </Text>
    </View>
   )
}