import { Colors } from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function ListExercise() {
  return (
    <ScrollView contentContainerStyle={{ gap: 20, paddingVertical: 16 }}>
      <View style={{ backgroundColor: Colors.pink.primary200, borderRadius: 20, flexDirection: "row", position: "relative", height: 150, padding: 20 }}>
        <Image source={require("@/assets/images/avatar/fullbody.png")} resizeMode="contain" style={{ width: 180, height: 180, position: "absolute", top: -40 }} />

        <View style={{ marginLeft: "auto", justifyContent: "space-between" }}>
          <Text style={{ color: Colors.yellow.primary, fontWeight: 500, fontSize: 20, textAlign: "right" }}>Full Body</Text>
          <Text style={{ color: Colors.yellow.primary, fontWeight: 400, fontSize: 18, textAlign: "right" }}>Beginner - GYM</Text>

          <View style={{ flexDirection: "row", backgroundColor: Colors.pink.dark, justifyContent: "center", alignItems: "center", padding: 5, borderRadius: 30, gap: 5 }}>
            <MaterialCommunityIcons name="dumbbell" size={20} color={Colors.pink.dark} style={{ backgroundColor: Colors.yellow.primary, borderRadius: 50, padding: 3 }} />
            <Text style={{ color: Colors.yellow.primary }}>12 exercise</Text>
          </View>
        </View>
      </View>

      <View style={{ backgroundColor: Colors.pink.primary200, borderRadius: 20, flexDirection: "row", position: "relative", height: 150, padding: 20 }}>
        <Image source={require("@/assets/images/avatar/lowerbody.png")} resizeMode="contain" style={{ width: 180, height: 180, position: "absolute", top: -30 }} />

        <View style={{ marginLeft: "auto", justifyContent: "space-between" }}>
          <Text style={{ color: Colors.yellow.primary, fontWeight: 500, fontSize: 20, textAlign: "right" }}>Lower Body</Text>
          <Text style={{ color: Colors.yellow.primary, fontWeight: 400, fontSize: 18, textAlign: "right" }}>Beginner - GYM</Text>

          <View style={{ flexDirection: "row", backgroundColor: Colors.pink.dark, justifyContent: "center", alignItems: "center", padding: 5, borderRadius: 30, gap: 5 }}>
            <MaterialCommunityIcons name="dumbbell" size={20} color={Colors.pink.dark} style={{ backgroundColor: Colors.yellow.primary, borderRadius: 50, padding: 3 }} />
            <Text style={{ color: Colors.yellow.primary }}>12 exercise</Text>
          </View>
        </View>
      </View>

      <View style={{ backgroundColor: Colors.pink.primary200, borderRadius: 20, flexDirection: "row", position: "relative", height: 150, padding: 20 }}>
        <Image source={require("@/assets/images/avatar/upperbody.png")} resizeMode="contain" style={{ width: 180, height: 180, position: "absolute", top: -20 }} />

        <View style={{ marginLeft: "auto", justifyContent: "space-between" }}>
          <Text style={{ color: Colors.yellow.primary, fontWeight: 500, fontSize: 20, textAlign: "right" }}>Upper Body</Text>
          <Text style={{ color: Colors.yellow.primary, fontWeight: 400, fontSize: 18, textAlign: "right" }}>Beginner - GYM</Text>

          <View style={{ flexDirection: "row", backgroundColor: Colors.pink.dark, justifyContent: "center", alignItems: "center", padding: 5, borderRadius: 30, gap: 5 }}>
            <MaterialCommunityIcons name="dumbbell" size={20} color={Colors.pink.dark} style={{ backgroundColor: Colors.yellow.primary, borderRadius: 50, padding: 3 }} />
            <Text style={{ color: Colors.yellow.primary }}>12 exercise</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
