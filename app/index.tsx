import { Colors } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";

export default function Index() {
  const router = useRouter();

  React.useLayoutEffect(() => {
    const timeout = setTimeout(() => {
      router.replace("/startscreen");
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <LinearGradient colors={[Colors.pink.primary, "#fbb4a5", "#ffe893", "#fcffc1", "#ffe893", "#fbb4a5", "#fb9ec6"]} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }} style={styles.container}>
      {/* Top Decoration */}
      <View style={styles.topDecor}>
        <Image source={require("@/assets/images/decoration/top-decor.png")} resizeMode="contain" />
      </View>

      {/* Logo */}
      <Image source={require("@/assets/images/fitapp-logo.png")} style={styles.logo} resizeMode="contain" />

      {/* Bottom Decoration */}
      <View style={styles.botDecor}>
        <Image source={require("@/assets/images/decoration/bottom-decor.png")} resizeMode="contain" />
      </View>
    </LinearGradient>
  );
}

const widthScreen = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  logo: {
    marginVertical: 20,
  },
  topDecor: {
    position: "absolute",
    bottom: widthScreen > 380 ? 150 : 100,
    alignItems: "center",
  },
  botDecor: {
    position: "absolute",
    top: widthScreen > 380 ? 150 : 100,
    alignItems: "center",
  },
});
