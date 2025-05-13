import { Colors } from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { ThemedText } from "../ThemedText";

export const HomeHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Image source={require("@/assets/images/delsoon/profile.png")} style={styles.profileImage} />

      <View>
        <ThemedText type="paragraph" style={{ color: Colors.pink.dark, lineHeight: 16 }}>
          Welcome
        </ThemedText>

        <ThemedText type="defaultSemiBold" style={{ color: Colors.pink.dark }}>
          Tiara.ward
        </ThemedText>
      </View>

      <View style={styles.headerRightSide}>
        <View style={styles.containerIcon}>
          <FontAwesome name="calendar" size={24} color={Colors.pink.secondary} />
        </View>

        <View style={styles.containerIcon}>
          <FontAwesome name="bell" size={24} color={Colors.pink.secondary} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    gap: 10,
  },
  headerRightSide: {
    marginLeft: "auto",
    flexDirection: "row",
    gap: 10,
  },
  containerImage: {
    width: 40,
    height: 40,
    borderRadius: 200,
    justifyContent: "center",
    alignContent: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 200,
  },
  containerIcon: {
    backgroundColor: Colors.pink.dark,
    width: 40,
    height: 40,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
