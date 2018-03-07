import { Text, AppRegistry } from 'react-native';
import React from "react";
import Header from "./src/components/header"

const SaySomething = () => (
    <Header/>
);
AppRegistry.registerComponent('studypro', () => SaySomething);
