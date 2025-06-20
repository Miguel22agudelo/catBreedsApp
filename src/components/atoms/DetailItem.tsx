import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
    label: string;
    value: string | number;
}

const DetailItem = ({ label, value }: Props) => {
    return (
        <View style={styles.item}>
            <Text style={styles.label}>{label}:</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f7f7f7',
        paddingVertical: 10,
        paddingHorizontal: 16,
        marginBottom: 8,
        borderRadius: 8,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#555',
    },
    value: {
        fontSize: 14,
        color: '#222',
    }

});

export default DetailItem;
