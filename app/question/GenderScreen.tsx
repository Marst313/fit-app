import ButtonCustom from "@/components/ButtonCustom";
import RadioGroup from "@/components/RadioGroup";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";

function GenderScreen() {
  const router = useRouter();
  const [selectedGender, setSelectedGender] = useState("male");

  function handleOnNext() {
    console.log("Selected " + selectedGender);

    router.push("/question/BmiScreen");
  }

  const genderOptions = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ];

  return (
    <LinearGradient colors={[Colors.pink.primary, "#fbb4a5", "#ffe893", "#fcffc1", "#ffe893", "#fbb4a5", "#fb9ec6"]} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }} style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.innerBackground} />

        <ThemedText type="title">Curent your gender</ThemedText>

        <View style={styles.imageContainer}>
          {/* Blurred Background Man */}
          <BlurView intensity={50} tint="light" style={styles.blur}>
            <Image source={selectedGender === "male" ? require("@/assets/images/avatar/female.png") : require("@/assets/images/avatar/male.png")} style={styles.blurredImage} resizeMode="contain" />
          </BlurView>

          {/* Woman Image */}
          <Image source={selectedGender === "male" ? require("@/assets/images/avatar/male.png") : require("@/assets/images/avatar/female.png")} style={styles.activeImage} resizeMode="contain" />
        </View>

        <View style={{ width: "100%", flex: 1 }}>
          <RadioGroup options={genderOptions} selected={selectedGender} onChange={setSelectedGender} />

          {/* BUTTON NEXT */}
          <ButtonCustom text="Next" onPress={handleOnNext} style={{ marginTop: 10 }} />
        </View>
      </View>
    </LinearGradient>
  );
}

export default GenderScreen;

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
    padding: 20,
    overflow: "hidden",
  },
  innerBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    zIndex: -1,
    borderRadius: 20,
  },
  imageContainer: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  blur: {
    position: "absolute",
    top: 100,
    zIndex: 0,
    right: -120,
  },
  blurredImage: {
    width: 200,
    height: 200,
    opacity: 0.4,
  },
  activeImage: {
    opacity: 1,
    height: 450,
    marginTop: 20,
    zIndex: 2,
  },
  footImage: {
    position: "absolute",
    bottom: -150,
    left: -100,
  },
});
