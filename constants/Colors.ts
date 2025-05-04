export const Colors = {
  pink: {
    text: "#f45b9b",
    primary: "#fb9ec6",
    secondary: "#fbb4a5",
    thertiary: "#b0325e",
    dark: "#7a2537",
    light: "#efe3e8",
  },
  yellow: {
    primary: "#ffe893",
    secondary: "#fcffc1",
  },
};

export const gradientRadial = [Colors.pink.primary, Colors.pink.secondary, Colors.yellow.primary, Colors.yellow.secondary, Colors.yellow.primary, Colors.pink.secondary, Colors.pink.primary] as const;
