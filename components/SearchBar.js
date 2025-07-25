import React, { useEffect, useState } from "react";
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";

const words = ["Milk", "Butter", "Paneer", "Atta"];

export default function SearchBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={`Search for "${words[index]}"`}
        placeholderTextColor="#999"
      />

      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Feather name="search" size={20} color="#555" />
        </TouchableOpacity>

        <Text style={styles.separator}>|</Text>

        <TouchableOpacity>
          <MaterialIcons name="keyboard-voice" size={20} color='#FFA500' />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    position: "relative",
  },
  input: {
    height: 50,
    borderRadius: 12,
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 16,
    paddingRight: 70, 
    fontSize: 16,
  },
  iconContainer: {
    position: "absolute",
    right: 20,
    top: 14,
    flexDirection: "row",
    alignItems: "center",
  },
  separator: {
    marginHorizontal: 10,
    fontSize: 16,
    color: "#999",
  },
});
