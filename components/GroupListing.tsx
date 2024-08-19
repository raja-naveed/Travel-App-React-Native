import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GroupListingType } from '@/types/groupType'
import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'


const GroupListing = ({ listings }: { listings: GroupListingType[] }) => {
    const renderItems = ({ item }: { item: GroupListingType }) => {
        return (
            <View style={styles.container}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <View>
                    <Text style={styles.itemTxt}>{item.name}</Text>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Ionicons name="star" size={15} color={Colors.primaryColor} />
                        <Text style={styles.itemRatingTxt}>{item.rating}</Text>
                        <Text style={styles.itemReviewsTxt}>(1203)</Text>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View style={{ marginVertical: 20 }} >
            <Text style={styles.title}>Travel Groups</Text>
            <FlatList
                data={listings}
                renderItem={renderItems}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default GroupListing

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },

    container: {
        backgroundColor: Colors.white,
        padding: 10,
        borderRadius: 10,
        marginRight: 20,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'

    },

    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 10
    },
    itemTxt: {
        fontSize: 16,
        fontWeight: '700',
        color: Colors.black,
        marginBottom: 10
    },
    itemRatingTxt: {
        fontSize: 16,
        fontWeight: '700',
        color: Colors.primaryColor,
        marginHorizontal: 5
    },
    itemReviewsTxt: {
        fontSize: 12,
        fontWeight: '600',
        color: "#999"
    }
})

