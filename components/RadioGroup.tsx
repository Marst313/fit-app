import { Colors } from "@/constants/Colors";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Option = {
  label: string;
  value: string;
};

type RadioGroupProps = {
  options: Option[];
  selected: string;
  onChange: (value: string) => void;
};

function RadioGroup({ options, selected, onChange }: RadioGroupProps) {
  return (
    <View style={styles.container}>
      {options.map((option) => {
        const isSelected = selected === option.value;

        return (
          <Pressable key={option.value} onPress={() => onChange(option.value)} style={styles.item}>
            <View style={[styles.radioOuter, isSelected && styles.radioOuterSelected]}>{isSelected && <View style={styles.radioInner} />}</View>
            <Text style={styles.label}>{option.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

export default RadioGroup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignContent: "center",
    justifyContent: "flex-end",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    borderRadius: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: Colors.pink.text,
  },
  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.pink.dark,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  radioOuterSelected: {
    borderColor: Colors.pink.thertiary,
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.pink.thertiary,
  },
  label: {
    fontSize: 16,
    color: Colors.pink.thertiary,
  },
});
