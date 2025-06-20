import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

interface Props {
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
}

const SearchInput = ({ value, onChangeText, placeholder = "Search breed..." }: Props) => {
    return (
        <View style={styles.container}>
            <Ionicons name="search" size={18} color="#888" style={styles.icon} />
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor="#aaa"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
        borderRadius: 10,
        paddingHorizontal: 10,
        margin: 10,
    },
    icon: {
        marginRight: 6,
    },
    input: {
        flex: 1,
        height: 40,
        fontSize: 14,
    },
});

export default SearchInput;
