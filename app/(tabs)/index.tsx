import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { Stack } from 'expo-router'
import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image, TextInput } from 'react-native'
import { useHeaderHeight } from '@react-navigation/elements'
import CategoryButtons from '@/components/CategoryButtons'


const Page = () => {

    const headerHeight = useHeaderHeight()

    return (
        <>
            <Stack.Screen
                options={{
                    headerTransparent: true,
                    headerTitle: '',
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => { }}
                            style={{ marginLeft: 20 }}
                        >
                            <Image source={{
                                uri: 'https://xsgames.co/randomusers/avatar.php?g=female',
                            }}
                                style={{ width: 50, height: 50, borderRadius: 10 }}
                            />
                        </TouchableOpacity>

                    ),
                    headerRight: () => (
                        <TouchableOpacity onPress={() => { }}
                            style={{
                                marginRight: 20,
                                backgroundColor: Colors.white,
                                padding: 10,
                                borderRadius: 10,
                                shadowColor: "#171717",
                                shadowOffset: { width: 4, height: 8 },
                                shadowOpacity: 0.2,
                                shadowRadius: 5,
                            }}
                        >
                            <Ionicons name='notifications' size={24} color='black' />

                        </TouchableOpacity>
                    )
                }}
            >

            </Stack.Screen><Stack.Screen
                options={{
                    headerTransparent: true,
                    headerTitle: '',
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => { }}
                            style={{ marginLeft: 20 }}
                        >
                            <Image source={{
                                uri: 'https://xsgames.co/randomusers/avatar.php?g=female',
                            }}
                                style={{ width: 50, height: 50, borderRadius: 10 }}
                            />
                        </TouchableOpacity>

                    ),
                    headerRight: () => (
                        <TouchableOpacity onPress={() => { }}
                            style={{
                                marginRight: 20,
                                backgroundColor: Colors.white,
                                padding: 10,
                                borderRadius: 10,
                                shadowColor: "#171717",
                                shadowOffset: { width: 4, height: 8 },
                                shadowOpacity: 0.2,
                                shadowRadius: 5,
                            }}
                        >
                            <Ionicons name='notifications' size={24} color='black' />

                        </TouchableOpacity>
                    )
                }}
            >

            </Stack.Screen><Stack.Screen
                options={{
                    headerTransparent: true,
                    headerTitle: '',
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => { }}
                            style={{ marginLeft: 20 }}
                        >
                            <Image source={{
                                uri: 'https://images.unsplash.com/photo-1673092147872-5ddb03194341?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8fA%3D%3D',
                            }}
                                style={{ width: 50, height: 50, borderRadius: 10 }}
                            />
                        </TouchableOpacity>

                    ),
                    headerRight: () => (
                        <TouchableOpacity onPress={() => { }}
                            style={{
                                marginRight: 20,
                                backgroundColor: Colors.white,
                                padding: 10,
                                borderRadius: 10,
                                shadowColor: "#171717",
                                shadowOffset: { width: 4, height: 8 },
                                shadowOpacity: 0.2,
                                shadowRadius: 5,
                            }}
                        >
                            <Ionicons name='notifications' size={24} color='black' />

                        </TouchableOpacity>
                    )
                }}
            >

            </Stack.Screen>
            <View style={[styles.container, { marginTop: headerHeight }]}
            >
                <Text style={styles.headingText}> Explore the Beautiful World! </Text>
                <View style={
                    styles.searchSectionWrapper
                }>
                    <View
                        style={
                            styles.searchBar
                        }>
                        <Ionicons name='search' size={20} color='black' style={{ marginRight: 5, color: Colors.black }} />
                        <TextInput placeholder='Search...' />
                    </View>
                    <TouchableOpacity
                        style={styles.filterButton}
                    >
                        <Ionicons name='options' size={28} color={Colors.white} />

                    </TouchableOpacity>
                </View>

                <CategoryButtons />
            </View >
        </>
    )
}

export default Page


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: Colors.bgColor,

    },
    headingText: {
        fontSize: 28,
        fontWeight: '800',
        color: Colors.black,
        marginTop: 10,
    },
    searchSectionWrapper: {
        flexDirection: 'row',
        marginVertical: 20,
        alignItems: 'center',

    },
    searchBar: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: Colors.white,
        padding: 16,
        borderRadius: 10,
        alignItems: 'center',

    },
    filterButton: {
        backgroundColor: Colors.primaryColor,
        padding: 16,
        borderRadius: 10,
        marginLeft: 10,
        shadowColor: "#171717",
        shadowOffset: { width: 4, height: 8 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
})
