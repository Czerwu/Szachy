import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { BookOpen, Gamepad2 } from "lucide-react-native";
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Game",
          tabBarIcon: ({ color }) => <Gamepad2 size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Learn",
          tabBarIcon: ({ color }) => <BookOpen size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}
