import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import DefaultStyles from '../constants/default-styles';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.title}>Game Over</Text>
      <View style={styles.imageContainer}>
        <Image 
        source={require('../assets/skull.png')}
        resizeMode="cover"
        style={styles.image} />
      </View>  
      <Text style={DefaultStyles.bodyText}>Number of rounds: {props.roundsNumber}</Text>
      <Text style={DefaultStyles.bodyText}>Number was: {props.userNumber}</Text>
      <Button title="NEW GAME" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    width: 100,
    height: 100,
    marginVertical: 20
  },
  image: {
    width: '100%',
    height: '100%'
  }
});

export default GameOverScreen;