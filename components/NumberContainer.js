import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

import Colors from '../constants/Colors';

const NumberContainer = props => {
    return (
        <View style={styles.numberContainer}>
            <Text style={styles.number}>{props.children}</Text>
        </View>

    );
};

const styles = StyleSheet.create({
    numberContainer: {
        borderColor: Colors.accent,
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        margin: 10
    },
    number: {
        fontSize: 27,
        color: Colors.accent
    }
});

export default NumberContainer;