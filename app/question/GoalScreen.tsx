import ButtonCustom from "@/components/ButtonCustom";
import RadioGroup from "@/components/RadioGroup";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";

function GoalScreen() {
  const router = useRouter();
  const [selectedGoal, setSelectedGoal] = useState("endurance");

  function handleOnNext() {
    console.log("Selected " + selectedGoal);

    router.push("/question/LevelScreen");
  }

  const genderOptions = [
    { label: "Endurance", value: "endurance" },
    { label: "Strength", value: "strength" },
    { label: "Body Shaping", value: "bodyshaping" },
  ];

  return (
    <LinearGradient colors={[Colors.pink.primary, "#fbb4a5", "#ffe893", "#fcffc1", "#ffe893", "#fbb4a5", "#fb9ec6"]} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }} style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.innerBackground} />

        <ThemedText type="title" style={{ textAlign: "center", lineHeight: 30 }}>
          {`What's your goal ?`}
        </ThemedText>

        <View style={styles.imageContainer}>
          {/* Woman Image */}
          <Image
            source={selectedGoal === "endurance" ? require("@/assets/images/avatar/endurance.png") : selectedGoal === "strength" ? require("@/assets/images/avatar/strength.png") : require("@/assets/images/avatar/definemuscle.png")}
            style={styles.activeImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.containerForm}>
          <ThemedText type="paragraph" style={{ textAlign: "center" }}>
            Your goal is
          </ThemedText>
          <ThemedText type="title" style={{ textAlign: "center" }}>
            {selectedGoal === "endurance" ? "GAIN STAMINA" : selectedGoal === "strength" ? "INCREASE POWER" : "DEFINE MUSCLE"}
          </ThemedText>

          <View style={{ width: "100%", flex: 1 }}>
            <RadioGroup options={genderOptions} selected={selectedGoal} onChange={setSelectedGoal} />

            {/* BUTTON NEXT */}
            <ButtonCustom text="Next" onPress={handleOnNext} style={{ marginTop: 10 }} />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

export default GoalScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    width: "80%",
    height: "90%",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    borderRadius: 20,
    padding: 20,
    overflow: "hidden",
  },
  innerBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    zIndex: -1,
  },
  imageContainer: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  containerForm: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
  },
  activeImage: {
    opacity: 1,
    height: 350,
    zIndex: 2,
  },
  inputContainer: {
    position: "relative",
    width: "100%",
    marginVertical: 8,
  },
  input: {
    borderWidth: 2,
    borderColor: Colors.pink.text,
    borderRadius: 8,
    paddingVertical: 10,
    paddingRight: 40,
    paddingLeft: 12,
    fontSize: 16,
    color: Colors.pink.thertiary,
  },
  unitLabel: {
    position: "absolute",
    right: 12,
    top: "50%",
    transform: [{ translateY: -10 }],
    color: Colors.pink.thertiary,
    fontSize: 16,
  },
});
