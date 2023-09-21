import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const SubjectCardDifficulty = ({diff}) => {

    const diffArray = []

    for (let i = 0; i < 5; i++) {
        if (i >= Math.floor(diff / 2)) {
            diffArray.push(1);
        } else {
            diffArray.push(0)
        }
    }

    if (diff % 2 != 0) {
        diffArray[Math.round(diff / 2) -1] = 2;
    }


    return (
        <View className="flex flex-row gap-x-1">
            {diffArray.map((diff, idx) => {
                if (diff == 1) {
                    return <Icon key={idx} name='circle-outline' size={16} color={"#4f4e4e"}/>
                } else if (diff == 2) {
                    return <Icon key={idx} name='circle-half-full' size={16} color={"#4f4e4e"}/>
                } else if (diff == 0) {
                    return <Icon key={idx} name='circle' size={16} color={"#4f4e4e"}/>
                }
            })}
        </View>
    )
}

export default SubjectCardDifficulty