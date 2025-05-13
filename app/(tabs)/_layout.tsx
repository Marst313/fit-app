import { Colors } from "@/constants/Colors";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { GestureResponderEvent, Pressable, StyleProp, ViewStyle } from "react-native";

type TabBarButtonProps = {
  children: React.ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
  accessibilityState?: { selected?: boolean };
  style?: StyleProp<ViewStyle>;
};

function CustomTabBarButton({ children, onPress, accessibilityState }: TabBarButtonProps) {
  const focused = accessibilityState?.selected;

  return (
    <Pressable
      onPress={onPress}
      style={{
        flex: 1,
        marginHorizontal: 5,
        marginVertical: 5,
        borderRadius: 10,
        backgroundColor: focused ? Colors.pink.dark : Colors.pink.light,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </Pressable>
  );
}

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.pink.light,
          height: 90,
          paddingHorizontal: 10,
          paddingVertical: 10,
        },
        tabBarActiveTintColor: Colors.pink.light,
        tabBarInactiveTintColor: Colors.pink.dark,
      }}
    >
      <Tabs.Screen
        name="Settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => <FontAwesome name="cog" size={24} color={color} />,
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tabs.Screen
        name="Workout"
        options={{
          title: "Workout",
          tabBarIcon: ({ color }) => <FontAwesome5 name="dumbbell" size={24} color={color} />,
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tabs.Screen
        name="Home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={color} />,
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tabs.Screen
        name="Progress"
        options={{
          title: "Progress",
          tabBarIcon: ({ color }) => <FontAwesome name="line-chart" size={24} color={color} />,
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tabs.Screen
        name="Foods"
        options={{
          title: "Foods",
          tabBarIcon: ({ color }) => <FontAwesome name="cutlery" size={24} color={color} />,
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
    </Tabs>
  );
}
