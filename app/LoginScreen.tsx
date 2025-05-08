import ButtonCustom from "@/components/ButtonCustom";
import { ThemedText } from "@/components/ThemedText";
import { Colors, gradientRadial } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function LoginScreen() {
  const router = useRouter();

  function handleOnPress() {
    router.push("/question/GenderScreen");
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
        <ScrollView>
          <ThemedText type="title">Ready to lift your first victory ?</ThemedText>

          <ThemedText type="paragraph">Sign in and start strong with FitStart!</ThemedText>

          {/* FORM */}
          <View style={styles.containerForm}>
            {/* EMAIL */}
            <View>
              <Text style={styles.labelText}>Username</Text>
              <View style={styles.inputContainer}>
                <Image source={require("@/assets/images/icons/message.png")} style={styles.icon} />
                <TextInput placeholder="Input username or email" placeholderTextColor={Colors.pink.primary} style={{ color: Colors.pink.text }} underlineColorAndroid="transparent" />
              </View>
            </View>

            {/* PASSWORD */}
            <View>
              <Text style={styles.labelText}>Password</Text>
              <View style={styles.inputContainer}>
                <Image source={require("@/assets/images/icons/lock.png")} style={styles.icon} />
                <TextInput placeholder="Enter your password" placeholderTextColor={Colors.pink.primary} secureTextEntry style={{ color: Colors.pink.text }} />
              </View>
            </View>
          </View>
        </ScrollView>
        {/* BUTTON LOGIN */}
        <ButtonCustom text="Log in" onPress={handleOnPress} style={{ marginTop: "auto" }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fb9ec6",
  },
  topContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
    flex: 1,
    backgroundColor: "white",
  },
  inputContainer: {
    borderWidth: 2,
    borderColor: Colors.pink.text,
    borderRadius: 15,
    paddingStart: 70,
    position: "relative",
  },
  containerForm: {
    gap: 20,
    justifyContent: "space-between",
    flex: 1,
    marginTop: 20,
  },
  icon: {
    position: "absolute",
    left: 10,
    top: 5,
    width: 50,
    height: 30,
  },
  logo: {
    width: 800,
    height: 800,
    alignSelf: "center",
    marginTop: 50,
  },
  labelText: {
    color: Colors.pink.thertiary,
  },
  btnLogin: {
    backgroundColor: Colors.yellow.primary,
    paddingVertical: 10,
    borderRadius: 10,
  },
  btnText: {
    color: Colors.pink.dark,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
  },
});
