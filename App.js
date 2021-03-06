import React, { Component } from 'react';
import { View, Text, Pressable, Dimensions } from "react-native";
import Geolocation from 'react-native-geolocation-service';
import { RectButton } from 'react-native-gesture-handler';
import NaverMapView, {Circle, Marker, Path, Polyline, Polygon} from "react-native-nmap";

import Fontisto from 'react-native-vector-icons/Fontisto';

const SearchResultMaps = (props) => {

    const P0 = {latitude: 37.384661, longitude: 127.107576};

    return (
        <View style={{width: '100%', height: '100%',}}>
            <Pressable style={{
                width: Dimensions.get('screen').width - 40, 
                height: 50, 
                backgroundColor: 'white',
                borderRadius: 25, 
                position: 'absolute', 
                top: 30, 
                elevation: 100,
                marginHorizontal: 20,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
            }} onPress={() => console.warn('searchBtn clicked')}>
                
                <Fontisto name="search" size={25} color={'#f15454'} style={{textAlign: 'left'}}/>
                <Text>Where are you going?</Text>
            </Pressable>                       
            <NaverMapView style={{width: '100%', height: '100%', resizeMode: 'cover'}}
                            center={{...P0}}
                            showsMyLocationButton={true}                            
                            onTouch={e => console.warn('onTouch', JSON.stringify(e.nativeEvent))}
                            onCameraChange={e => console.warn('onCameraChange', JSON.stringify(e))}
                            onMapClick={e => console.warn('onMapClick', JSON.stringify(e))}
                            useTextureView={true}
          
            >

            <Marker coordinate={{latitude: 37.384661, longitude: 127.107576}} caption={{text: 'home', color: 'black', textSize: 10,}}>    
            </Marker>                                       
            </NaverMapView>
        </View>
    );
}

export default SearchResultMaps;