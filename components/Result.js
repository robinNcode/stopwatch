import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { displayTime } from './Util';

// Prints the lap time ...

function Result({ results }){
    return (
        <ScrollView >
            <View style={styles.resultItem} />
            {
                results.map((item, index) => {
                    <View key={index} style={styles.resultItem}>
                        <Text style={styles.resultItemText}>
                            Lap { results.length - 1}
                        </Text>

                        <Text style={styles.resultItemText}>
                            { displayTime(item)}
                        </Text>
                    </View>
                })
            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    resultItem : {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        borderBottomWidth : 1,
        borderColor: '#313131',
        height: 50,
        paddingHorizontal: 15
    },
    resultItemText: {
        color: '#fff'
    }
});

export default React.memo(Result);
