import React, { useRef, useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Animated,
  StatusBar,
  findNodeHandle,
  UIManager,
} from "react-native";

import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import HomeContent from "../../components/HomeContent";

export default function HomeScreen() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const searchBarRef = useRef(null);
  const [searchBarTop, setSearchBarTop] = useState(0);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (searchBarRef.current) {
        UIManager.measure(
          findNodeHandle(searchBarRef.current),
          (x, y, width, height, pageX, pageY) => {
            setSearchBarTop(pageY);
          }
        );
      }
    }, 600);
  }, []);

  const handleScroll = (e) => {
    const currentY = e.nativeEvent.contentOffset.y;
    if (currentY >= searchBarTop - 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={handleScroll}
        contentContainerStyle={{ paddingBottom: 100, flexGrow: 1  }}
        showsVerticalScrollIndicator={false}
      >
        <Header />
        <View ref={searchBarRef} collapsable={false} style={{ zIndex: 1 }}>
          <SearchBar />
        </View>
        <HomeContent />
      </Animated.ScrollView>

      {isSticky && (
        <View style={styles.stickySearch}>
          <SearchBar />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  stickySearch: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    elevation: 4,
    paddingHorizontal: 10,
    zIndex: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
});
