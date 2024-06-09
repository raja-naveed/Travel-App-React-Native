import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const Page = () => {
    return (
        <View style={styles.container}
        >
            <Text> BookMarks </Text>
        </View>
    )
}

export default Page


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
