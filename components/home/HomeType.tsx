import { Colors } from "@/constants/Colors";
import { DataTypeWorkout } from "@/constants/constant";
import { TTypeWorkout } from "@/constants/type";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  setTypeWorkout: (typeWorkout: TTypeWorkout) => void;
  typeWorkout: TTypeWorkout;
};

export const HomeType = ({ typeWorkout, setTypeWorkout }: Props) => {
  function handleOnPress(type: TTypeWorkout) {
    setTypeWorkout(type);
  }

  return (
    <View style={styles.container}>
      {DataTypeWorkout.map((type, index) => {
        return (
          <Pressable key={index} style={typeWorkout === type ? styles.activeButton : styles.inactiveButton} onPress={() => handleOnPress(type)}>
            <Text style={typeWorkout === type ? styles.activeText : styles.inactiveText}>{type}</Text>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inactiveButton: {
    backgroundColor: Colors.pink.thertiary,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  activeButton: {
    backgroundColor: "white",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  inactiveText: {
    color: "white",
  },
  activeText: {
    color: Colors.pink.thertiary,
  },
});
