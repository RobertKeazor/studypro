import React, {Component} from "react";
import {Text, View} from "react-native";
import axios from  "axios";

class  AlbumList extends Component {
    //Lifecycle Method of Component
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => console.log(response))

    }

    render() {
        return (
            <View>
                <Text>Lisst</Text>
            </View>
        );
    }
}

export default AlbumList