import { Slot } from "expo-router";
import { StatusBar } from "react-native";

export default function Layout() {
  return (
    <>
      <StatusBar barStyle={"dark-content"} />
      <Slot screenOptions={{ headerShown: false }} />;
    </>
  );
}
