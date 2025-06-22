import React from 'react';
import { Text, TextProps, StyleSheet, TextStyle } from 'react-native';

type Variant = 'regular' | 'bold' | 'title' | 'subtitle' | 'caption';

interface Props extends TextProps {
    variant?: Variant;
}

const variantStyles: Record<Variant, TextStyle> = {
    regular: {
        fontFamily: 'Nunito-Regular',
        fontSize: 16,
        color: '#333',
    },
    bold: {
        fontFamily: 'Nunito-Bold',
        fontSize: 16,
        color: '#333',
    },
    title: {
        fontFamily: 'Nunito-Bold',
        fontSize: 24,
        color: '#222',
    },
    subtitle: {
        fontFamily: 'Nunito-Regular',
        fontSize: 18,
        color: '#555',
    },
    caption: {
        fontFamily: 'Nunito-Regular',
        fontSize: 12,
        color: '#888',
    },
};

const CustomText = ({ variant = 'regular', style, ...props }: Props) => {
    return <Text {...props} style={[variantStyles[variant], style]} />;
};

export default CustomText;
