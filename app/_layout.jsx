import { Slot } from "expo-router";
import { SafeAreaView } from "react-native";
import BottomIconBar from "../components/BottomIconBar";

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Slot />
      <BottomIconBar />
    </SafeAreaView>
  );
}
