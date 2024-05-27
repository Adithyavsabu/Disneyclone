import React from "react";
import { Stack } from "expo-router/stack";
import { FavouriteProvider } from "../Context/FavouriteContext";

export default function AppLayout() {
  return (
    <FavouriteProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </FavouriteProvider>
  );
}
