import { ThemedText } from "@/components/ThemedText";
import { Colors, gradientRadial } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function StartScreen() {
  const router = useRouter();

  function handleOnPress() {
    router.push("/login");
  }

  return (
    <View style={styles.container}>
      <LinearGradient style={styles.topContainer} colors={gradientRadial} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }}>
        {/* Logo */}
        <View style={styles.logo}>
          <Image source={require("@/assets/images/fitapp-logo.png")} resizeMode="contain" style={{ width: "100%", height: "100%" }} />
        </View>
      </LinearGradient>

      <View style={styles.bottomContainer}>
        <ThemedText type="title" style={{ width: 300 }}>
          Earn rewards for every weight you lift
        </ThemedText>

        <ThemedText type="paragraph" style={{ width: 270 }}>
          Start lifting, start winning — only with FitStart
        </ThemedText>

        <View style={styles.containerForm}>
          {/* BUTTON LOGIN */}
          <Pressable onPress={handleOnPress} style={({ pressed }) => [styles.btnLogin, { opacity: pressed ? 0.7 : 1 }]} android_ripple={{ color: Colors.yellow.secondary }}>
            <Text style={styles.btnText}>Log in</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  topContainer: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,

    // iOS shadow
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 4 },

    // Android shadow
    elevation: 1,
  },

  bottomContainer: {
    padding: 30,
    flex: 1,
    backgroundColor: "white",
  },
  containerForm: {
    marginTop: 10,
    display: "flex",
    gap: 10,
    flexDirection: "column",
    flex: 1,
  },
  logo: {
    width: 800,
    height: 800,
    alignSelf: "center",
    marginTop: 50,
  },
  btnLogin: {
    backgroundColor: Colors.yellow.primary,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: "auto",
    overflow: "hidden",
  },
  btnText: {
    color: Colors.pink.dark,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
  },
});
