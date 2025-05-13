import { HomeHeader } from "@/components/home/HomeHeader";
import HomeInfo from "@/components/home/HomeInfo";
import { HomeType } from "@/components/home/HomeType";
import ListExercise from "@/components/home/ListExercise";
import { WeeklyProgress } from "@/components/home/WeeklyProgress";
import { Colors } from "@/constants/Colors";
import { TTypeWorkout } from "@/constants/type";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { StyleSheet } from "react-native";

function HomeScreen() {
  const [typeWorkout, setTypeWorkout] = useState<TTypeWorkout>("All Types");

  return (
    <LinearGradient colors={[Colors.pink.primary, "#fbb4a5", "#ffe893", "#fcffc1", "#ffe893", "#fbb4a5", "#fb9ec6"]} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }} style={styles.container}>
      {/* Header Home */}
      <HomeHeader />

      {/* Weekly Progress */}
      <WeeklyProgress />

      {/* Home Info */}
      <HomeInfo />

      {/* Home Type */}
      <HomeType typeWorkout={typeWorkout} setTypeWorkout={setTypeWorkout} />

      {/* Home List Exercise */}
      <ListExercise />
    </LinearGradient>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 40,
    gap: 20,
  },
});
