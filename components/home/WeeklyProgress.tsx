import { Colors } from "@/constants/Colors";
import { DummyDataWeeklyProgress } from "@/constants/constant";
import { StyleSheet, Text, View } from "react-native";

export const WeeklyProgress = () => {
  return (
    <View style={styles.container}>
      {/* PROGRESS */}
      {DummyDataWeeklyProgress.map((progress, index) => {
        return (
          <View key={index}>
            <Text style={styles.day}>{progress.day.slice(0, 3)}</Text>

            <View
              style={[
                styles.dateContainer,
                { borderTopWidth: progress.progress >= 25 ? 2 : 0, borderRightWidth: progress.progress >= 50 ? 2 : 0, borderBottomWidth: progress.progress >= 75 ? 2 : 0, borderLeftWidth: progress.progress === 100 ? 2 : 0 },
              ]}
            >
              <Text style={styles.date}>{new Date(progress.date).getDate()}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(176, 50, 94, 0.5)",
    padding: 10,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  day: {
    color: Colors.yellow.primary,
    marginBottom: 5,
  },
  dateContainer: {
    width: 30,
    height: 30,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.yellow.primary,
    borderColor: Colors.pink.dark,
  },
  date: {
    color: Colors.pink.dark,
  },
});
