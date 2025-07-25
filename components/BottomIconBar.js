import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useRouter, usePathname } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function BottomIconBar() {
  const router = useRouter();
  const pathname = usePathname();
  const getTabItems = () => {
    if (pathname === "/explore") {
      return [
        { name: "Home", icon: "home", route: "/" },
        { name: "Food", icon: "restaurant", route: "/explore" },
        { name: "Bolt", icon: "bolt", route: "/explore/bolt" },
        { name: "99 Store", icon: "store", route: "/explore/99store" },
        { name: "Reorder", icon: "restore", route: "/reorder" },
      ];
    } else if (pathname === "/instamart") {
      return [
        { name: "Home", icon: "home", route: "/" },
        { name: "Instamart", icon: "shopping-basket", route: "/instamart" },
        {
          name: "Categories",
          icon: "category",
          route: "/instamart/categories",
        },
      ];
    } else if (pathname === "/dineout") {
      return [
        { name: "Home", icon: "home", route: "/" },
        { name: "Dineout", icon: "local-dining", route: "/dineout" },
        { name: "New & Hot", icon: "whatshot", route: "/dineout/newhot" },
        { name: "My Corner", icon: "person-pin", route: "/dineout/mycorner" },
      ];
    } else {
      return [
        { name: "Home", icon: "home", route: "/" },
        { name: "Food", icon: "restaurant", route: "/explore" },
        { name: "Instamart", icon: "shopping-basket", route: "/instamart" },
        { name: "Dineout", icon: "local-dining", route: "/dineout" },
        { name: "Reorder", icon: "restore", route: "/reorder" },
      ];
    }
  };
  const items = getTabItems();

  return (
    <View style={styles.container}>
      {items.map((item, index) => {
        const isActive = pathname === item.route;

        const dynamicIcon =
          item.name === "Home" && !isActive ? "arrow-back" : item.icon;

        return (
          <TouchableOpacity
            key={index}
            style={styles.item}
            onPress={() => router.push(item.route)}
          >
            <MaterialIcons
              name={dynamicIcon}
              size={28}
              color={isActive ? "#ff5900ff" : "#555"}
            />
            <Text
              style={[styles.label, { color: isActive ? "#ff5900ff" : "#555" }]}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#fff",
  },
  item: {
    alignItems: "center",
    flex: 1,
  },
  label: {
    fontSize: 12,
    marginTop: 4,
  },
});
