import { HomeHeader } from "@/components/home/HomeHeader";
import HomeInfo from "@/components/home/HomeInfo";
import { WeeklyProgress } from "@/components/home/WeeklyProgress";
import { Colors } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

function HomeScreen() {
  return (
    <LinearGradient colors={[Colors.pink.primary, "#fbb4a5", "#ffe893", "#fcffc1", "#ffe893", "#fbb4a5", "#fb9ec6"]} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }} style={styles.container}>
      {/* Header Home */}
      <HomeHeader />

      {/* Weekly Progress */}
      <WeeklyProgress />

      {/* Home Info */}
      <HomeInfo />

      {/* Type */}
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Pressable style={{ backgroundColor: Colors.pink.thertiary, paddingVertical: 5, paddingHorizontal: 10, borderRadius: 20 }}>
          <Text style={{ color: "white" }}>All Types</Text>
        </Pressable>

        <Pressable style={{ backgroundColor: "white", paddingVertical: 5, paddingHorizontal: 10, borderRadius: 20 }}>
          <Text style={{ color: Colors.pink.thertiary }}>Gym</Text>
        </Pressable>

        <Pressable style={{ backgroundColor: Colors.pink.thertiary, paddingVertical: 5, paddingHorizontal: 10, borderRadius: 20 }}>
          <Text style={{ color: "white" }}>Dumbbell</Text>
        </Pressable>

        <Pressable style={{ backgroundColor: Colors.pink.thertiary, paddingVertical: 5, paddingHorizontal: 10, borderRadius: 20 }}>
          <Text style={{ color: "white" }}>Yoga</Text>
        </Pressable>
      </View>

      <View style={{ backgroundColor: Colors.pink.thertiary, borderRadius: 20 }}>
        <Text>Full Body</Text>
        <Text>Full Body</Text>
        <Text>Full Body</Text>
        <Text>Full Body</Text>
        <Text>Full Body</Text>
        <Text>Full Body</Text>
      </View>
    </LinearGradient>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 50,
    gap: 20,
  },
});
