import { Colors } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

function SettingScreen() {
  return (
    <LinearGradient colors={[Colors.pink.primary, "#fbb4a5", "#ffe893", "#fcffc1", "#ffe893", "#fbb4a5", "#fb9ec6"]} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }} style={styles.container}>
      <View>
        <Text>test progress</Text>
      </View>
    </LinearGradient>
  );
}

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
