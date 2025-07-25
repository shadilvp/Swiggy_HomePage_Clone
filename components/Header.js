import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.header}>
      <View>
        <View style={styles.locationRow}>
          <MaterialIcons name="home" size={30} color="#ff5900ff" />
          <Text style={styles.locationText}>Home</Text>
        </View>
        <Text style={styles.subText}>
          A-01, Bank street , new delhi-110096 A-01
        </Text>
      </View>
      <Image source={require("../assets/avatar.png")} style={styles.avatar} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    paddingTop: 48,
    paddingBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    fontSize: 28,
    fontWeight: "bold",
    marginLeft: 6,
  },
  subText: {
    fontSize: 12,
    color: "gray",
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
});

export default Header;
