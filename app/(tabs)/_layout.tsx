import React from "react";
import { Tabs } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { View } from "react-native";

export default function App() {
    return (
        <Tabs
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: Colors.bgColor,
                    borderTopWidth: 0,
                    padding: 0,
                },
                tabBarShowLabel: false,
                tabBarActiveTintColor: Colors.black,
                tabBarInactiveTintColor: "#999",
            }}

        >
            <Tabs.Screen name="index"
                options={{
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" color={color} size={35} />,
                }}
            />
            <Tabs.Screen name="catogery"
                options={{
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons name="approximately-equal" color={color} size={35} />,

                }}
            />

            <Tabs.Screen name="search"
                options={{
                    tabBarIcon: ({ color }) =>
                        <View style={{
                            backgroundColor: Colors.primaryColor,
                            borderRadius: 10,
                            paddingVertical: 12,
                            paddingHorizontal: 16,
                            height: 50,
                            marginBottom: 5,

                        }}>
                            <MaterialCommunityIcons name="magnify" color={Colors.white} size={35} />

                        </View>
                }}
            />

            <Tabs.Screen name="profile"
                options={{
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account" color={color} size={35} />,
                }}
            />
            <Tabs.Screen name="bookmarks"
                options={{
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons name="bookmark" color={color} size={35} />,

                }}
            />

        </Tabs >
    );
}
