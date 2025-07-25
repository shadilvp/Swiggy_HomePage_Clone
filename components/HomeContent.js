import React from "react";
import { ScrollView, StyleSheet, View, Text, Image } from "react-native";
import LiveItUpBanner from "./ui/LiveItUpBanner";

export default function HomeContent() {
  return (
    <View
      style={styles.container}
    >
      {/* Welcome Header */}
      <View style={styles.headerRow}>
        <Text style={styles.welcomeText}>Welcome to Swiggy!</Text>
        <Text style={styles.emoji}>😃</Text>
      </View>

      {/* Order FOOD Card */}
      <View style={styles.card}>
        <View style={styles.cardLeft}>
          <Text style={styles.cardTitle}>ORDER FOOD</Text>
          <Text style={styles.cardSubtitle}>
            FROM GREAT RESTAURANTS NEAR YOU
          </Text>
          <View style={styles.deliveryTag}>
            <Text style={styles.deliveryTime}>30-40 Mins</Text>
          </View>
        </View>
        <View style={styles.cardRight}>
          <Image
            source={require("../assets/cake.jpeg")}
            style={styles.cardImage}
          />
          <Text style={styles.imageCaption}>Yumm cake!</Text>
        </View>
      </View>

      {/* Order GROCERIES Card */}
      <View style={styles.card}>
        <View style={styles.cardLeft}>
          <Text style={styles.cardTitle}>ORDER GROCERIES</Text>
          <Text style={styles.cardSubtitle}>
            ESSENTIALS DELIVERED TO YOU FASTLY
          </Text>
          <View style={[styles.deliveryTag, { borderColor: "#ff5b5b" }]}>
            <Text style={[styles.deliveryTime, { color: "#ff5b5b" }]}>
              12-15 Mins
            </Text>
          </View>
        </View>
        <View style={styles.cardRight}>
          <Image
            source={require("../assets/groceries.png")}
            style={styles.cardImage}
          />
          <Text style={styles.imageCaption}>Chips</Text>
        </View>
      </View>

      {/* Dineout & Genie Row */}
      <View style={styles.miniCardRow}>
        <View style={styles.miniCard}>
          <Text style={styles.miniTitle}>DINEOUT</Text>
          <Text style={styles.miniSubtitle}>EAT OUT & SAVE</Text>
          <Image
            source={require("../assets/groceries.png")}
            style={styles.miniImage}
          />
          <Text style={styles.imageCaption}>Chips</Text>
        </View>
        <View style={styles.miniCard}>
          <Text style={styles.miniTitle}>GENIE</Text>
          <Text style={styles.miniSubtitle}>PICK-UP & DROP</Text>
          <Image
            source={require("../assets/groceries.png")}
            style={styles.miniImage}
          />
          <Text style={styles.imageCaption}>Chips</Text>
        </View>
      </View>

      <LiveItUpBanner />
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 0,
  },
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 0,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    marginTop: 12,
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ff6600",
    fontFamily: "Cochin",
  },
  emoji: {
    fontSize: 38,
    marginLeft: 10,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  cardLeft: {
    flex: 1,
    justifyContent: "space-between",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cardSubtitle: {
    fontSize: 12,
    color: "#666",
    marginVertical: 4,
  },
  deliveryTag: {
    borderWidth: 1,
    borderColor: "#f97316",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
    alignSelf: "flex-start",
    marginTop: 8,
  },
  deliveryTime: {
    fontSize: 12,
    color: "#f97316",
  },
  cardRight: {
    alignItems: "center",
    marginLeft: 10,
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  imageCaption: {
    fontSize: 10,
    color: "#999",
    marginTop: 4,
  },
  miniCardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  miniCard: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 12,
    marginHorizontal: 4,
    alignItems: "center",
    elevation: 2,
  },
  miniTitle: {
    fontWeight: "bold",
    fontSize: 14,
  },
  miniSubtitle: {
    fontSize: 10,
    color: "#666",
    marginBottom: 8,
  },
  miniImage: {
    width: 60,
    height: 60,
    borderRadius: 0,
  },
});
