import { Colors } from "@/constants/Colors";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ThemedText } from "../ThemedText";

export default function HomeInfo() {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <Image source={require("@/assets/images/avatar/abdominal.png")} style={styles.image} resizeMode="contain" />

        <View style={styles.rightSide}>
          <ThemedText type="title" style={{ color: Colors.yellow.primary, lineHeight: 20 }}>
            Abdominals
          </ThemedText>

          <Text style={styles.textLevel}>11:00 PM - Today</Text>

          <View style={styles.infoContainer}>
            <Image source={require("@/assets/images/avatar/begineer.png")} style={styles.iconSmall} resizeMode="contain" />

            <Text style={styles.textLevel}>Begineer Gym</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: Colors.yellow.primary,
    borderRadius: 15,
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: Colors.pink.forthiary,
    height: 150,
    padding: 15,
  },
  innerContainer: {
    backgroundColor: Colors.pink.thertiary,
    flex: 1,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 30,
    marginRight: 15,
  },
  rightSide: {
    justifyContent: "space-between",
    flex: 1,
    gap: 10,
  },

  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: Colors.pink.dark,
    paddingHorizontal: 5,
    borderRadius: 50,
  },
  iconSmall: {
    width: 30,
    height: 30,
  },
  textLevel: {
    color: Colors.yellow.primary,
  },
});
