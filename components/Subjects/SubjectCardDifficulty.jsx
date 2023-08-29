import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const SubjectCardDifficulty = ({diff}) => {

    const diffArray = []

    for (let i = 0; i < 5; i++) {
        if (i >= diff) {
            diffArray.push(1);
        } else {
            diffArray.push(0);
        }
    }

    return (
        <View className="flex flex-row gap-x-1">
            {diffArray.map((diff, idx) => {
                if (diff == 1) {
                    return <Icon key={idx} name='circle-outline' size={12} color={"#4f4e4e"}/>
                } else {
                    return <Icon key={idx} name='circle' size={12} color={"#4f4e4e"}/>
                }
            })}
        </View>
    )
}

export default SubjectCardDifficulty