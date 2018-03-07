import {Text, AppRegistry, View} from 'react-native';
import React from "react";
import Header from "./src/components/header"
import AlbumList from "./src/components/AlbumList"

const SaySomething = () => {
    return (
        <View>
            <Header headerName ="Albums"/>
            <AlbumList/>
        </View>
    );
};
AppRegistry.registerComponent('studypro', () => SaySomething);
