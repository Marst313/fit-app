import ButtonCustom from "@/components/ButtonCustom";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";

function BmiScreen() {
  const router = useRouter();

  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  function handleChangeText(field: "weight" | "height", data: string) {
    const numericValue = data.replace(/[^0-9]/g, "");
    if (field === "weight") {
      setWeight(numericValue);
    } else {
      setHeight(numericValue);
    }
  }

  function handleOnNext() {
    // if (!weight || !height) return;

    console.log("Weight " + weight);
    console.log("Height " + height);

    router.push("/question/GoalScreen");
  }

  return (
    <LinearGradient colors={[Colors.pink.primary, "#fbb4a5", "#ffe893", "#fcffc1", "#ffe893", "#fbb4a5", "#fb9ec6"]} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }} style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.innerBackground} />

        <ThemedText type="title" style={{ textAlign: "center", lineHeight: 30 }}>
          Current weight and height ?
        </ThemedText>

        <View style={styles.imageContainer}>
          {/* Woman Image */}
          <Image source={require("@/assets/images/avatar/underweightFemale.png")} style={styles.activeImage} resizeMode="contain" />
        </View>

        <View style={styles.containerForm}>
          <ThemedText type="paragraph" style={{ textAlign: "center" }}>
            Your Body Mass Index is
          </ThemedText>
          <ThemedText type="title" style={{ textAlign: "center" }}>
            UNDERWEIGHT
          </ThemedText>

          {/* Weight */}
          <View style={styles.inputContainer}>
            <TextInput placeholder="Weight" placeholderTextColor="rgba(255, 105, 180, 0.5)" style={styles.input} keyboardType="numeric" onChangeText={(text) => handleChangeText("weight", text)} value={weight} maxLength={4} />

            <Text style={styles.unitLabel}>kg</Text>
          </View>

          {/* Height */}
          <View style={styles.inputContainer}>
            <TextInput placeholder="Height" placeholderTextColor="rgba(255, 105, 180, 0.5)" style={styles.input} keyboardType="numeric" onChangeText={(text) => handleChangeText("height", text)} value={height} maxLength={6} />
            <Text style={styles.unitLabel}>cm</Text>
          </View>

          {/* BUTTON NEXT */}
          <ButtonCustom text="Next" onPress={handleOnNext} style={{ marginTop: 10 }} />
        </View>
      </View>
    </LinearGradient>
  );
}

export default BmiScreen;

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
    height: 400,
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
