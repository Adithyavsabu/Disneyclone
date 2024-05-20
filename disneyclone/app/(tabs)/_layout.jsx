import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarStyle: {
          borderColor: "white",
          borderTopColor: "white",
          backgroundColor: "black",
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,

          tabBarIcon: ({ color }) => (
            <FontAwesome size={26} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={26} name="search" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="new&hot"
        options={{
          title: "NewandHot",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={26} name="bolt" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="downloads"
        options={{
          title: "Downloads",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={26} name="download" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="myspace"
        options={{
          title: "MySpace",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={26} name="user-circle-o" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
