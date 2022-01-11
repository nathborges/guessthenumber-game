import React, { useState, useRef } from 'react';
import {View, Text, StyleSheet, Button, Alert } from 'react-native';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max -min)) + min;
    if (rndNum != exclude){
        return rndNum;
    }
    return generateRandomBetween(min, max, exclude);
};

const GameScreen = props => {
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const [currentGuess, setCurrentGuess] = useState(
        generateRandomBetween(1, 100, props.userChoice)
    );

    const nextGuessHandler = direction => {
        console.log('teste');
        if ((direction === 'lower' && props.userChoice > currentGuess) || (direction === 'greater' && props.userChoice < currentGuess)) {
            Alert.alert('Don\'t lie!', 'You know that this wrong...', [ 
                { text: 'Sorry!', style: 'cancel' }
            ]);
            return;
        }

        if (direction === 'lower') {
            currentHigh.current = currentGuess;
        }

        if (direction === 'greater') {
            currentLow.current = currentGuess;
        }

        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
    }

    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" onPress={() => {nextGuessHandler('lower')}} />
                <Button title="GREATER" onPress={() => {nextGuessHandler('greater')}} />
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
});

export default GameScreen;
