import { useState, useRef } from 'react'
import {  View, StyleSheet, Text, TouchableOpacity, StatusBar, Platform, FlatList, Dimensions } from 'react-native';
import { FeedItem } from '../../components/feedItem'

export default function Home() {

    let feedItems = [ 
        {
          id: '1', 
          video: 'https://i.imgur.com/Cnz1CPK.mp4',
          name: '@teste',
          description: 'Teste',
         },
        {
          id: '2', 
          video: 'https://i.imgur.com/E0tK2bY.mp4',
          name: '@teste1',
          description: 'Teste1',
         },
        {
          id: '3', 
          video: 'https://i.imgur.com/mPFvFyX.mp4',
          name: '@teste2',
          description: 'Teste2',
         }
      ]

    const [showItem, setShowItem] = useState(feedItems[0])
    const {height: heightScreen} = Dimensions.get("screen")
    const onViewRef = useRef((viweableItems) => {
        console.log(viweableItems)
        if(viweableItems && viweableItems.length > 0) {
            setShowItem(feedItems[viweableItems[0].index])
        }
    })  

 return (
   <View style={styles.container}>
    <View style={styles.labels}>
        <TouchableOpacity>
            <Text style={[styles.labelText, {color: "#DDD"}]}>Seguindo</Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text style={[styles.labelText, {color:'#FFF'}]}>Pra você</Text>
            <View style={styles.indicator}></View>
        </TouchableOpacity>
    </View>

    <FlatList
    data={feedItems}
    onViewableItemsChanged={onViewRef.current}
    renderItem={ ({ item }) => <FeedItem data={item} currentVisibleItem={showItem}/>}
    snapToAlignment='center'
    snapToInterval={heightScreen}
    scrollEventThrottle={200}
    decelerationRate={"fast"}
    viewabilityConfig={{
        waitForInteraction: false,
        viewAreaCoveragePercentThreshold: 100,
    }}
    />
   </View>
  );
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#000',
    },
    labels: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        position: 'absolute',
        top: 6,
        left: 0,
        right: 0,
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight+5 : 55,
        zIndex: 99,
    },
    labelText: {
       fontSize: 16,
       fontWeight: '500',
       marginBottom: 4,
    },
    indicator: {
        backgroundColor: '#FFF',
        width: 32,
        height: 2,
        alignSelf: 'center',
    }
})