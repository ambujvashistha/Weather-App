import {  Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './BadgeStyle'

const Badge = ({title,id,onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.5} style={[styles.container,{
        backgroundColor:id === 0 ? "#235789" : "#C1292E"
    }]} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Badge