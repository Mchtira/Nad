import React from 'react'
import { Text } from 'react-native'
import styles from '../styles.js'

export const P = ({ children, style }) => 
    <Text style={[styles.p, style]}>
        {children}
    </Text>

export const H = ({ n = 3, children }) => 
    <Text style={[styles.h, { fontSize: 60 - n * 10 }]}>
        {children}
    </Text>
