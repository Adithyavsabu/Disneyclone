import React, { useContext } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { View, Text } from "react-native";
//import { Tabs } from "expo-router";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./index";
import Search from "./search";
import Download from "./downloads";
import Myspace from "./myspace";
import Hot from "./new&hot";
import MovieDetail from "../movieDetail";
import { FavouriteContext } from "../../Context/FavouriteContext";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Homestack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="index"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MovieDetail"
        component={MovieDetail}
        options={{
          headerShown: false,
          presentation: "modal",
          animationTypeForReplace: "push",
          animation: "slide_from_bottom",
        }}
      />
    </Stack.Navigator>
  );
};

export default function TabLayout() {
  const { selectedMovies } = useContext(FavouriteContext);
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
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
        <Tab.Screen
          name="Home"
          component={Homestack}
          options={{
            title: "Home",
            headerShown: false,

            tabBarIcon: ({ color }) => (
              <FontAwesome size={26} name="home" color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="search"
          component={Search}
          options={{
            title: "Search",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <FontAwesome size={26} name="search" color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="new&hot"
          component={Hot}
          options={{
            title: "NewandHot",
            tabBarIcon: ({ color }) => (
              <FontAwesome size={26} name="bolt" color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="downloads"
          component={Download}
          options={{
            title: "Downloads",
            tabBarIcon: ({ color }) => (
              <FontAwesome size={26} name="download" color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="myspace"
          component={Myspace}
          options={{
            title: "MySpace",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <View>
                <FontAwesome size={26} name="user-circle-o" color={color} />
                {selectedMovies.length > 0 && (
                  <View>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 14,
                        backgroundColor: "red",
                        position: "absolute",

                        padding: 3,
                        bottom: 15,
                        left: 20,
                      }}
                    >
                      {selectedMovies.length}
                    </Text>
                  </View>
                )}
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
