import React, { useState, useRef, useCallback } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Constants } from 'expo-constants';
import Result from './Result';
import Control from './Control';
import { displayTime } from './Util';
import MyHeader from './Header';

export default function StopWatch(){
    const [time, setTime] = useState(0);
    const [isRunning, setRunning] = useState(false);
    const [results, setResults] = useState([]);
    const timer = useRef(null);
}

const handleLeftButtonPress = useCallback(() => {
    if(isRunning){
        setResults((previousResults) => [time, ...previousResults]); 
    }
    else{
        setResults([]);
        setTime(0);
    }
}, [isRunning, time]);

const handleRightButtonPress = useCallback(() => {
    if(!isRunning){
        const interval = setInterval(() => {
            // on process ...
        }, 10);
    }
});