/** @format */

import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

function Task(props) {
  return (
    <View style={styles.item}>
      <View style={styles.itemsLeft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text style={styles.text}>{props.text}</Text>
      </View>
      <View style={styles.circle}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemsLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "lightblue",
    borderRadius: 5,
    marginRight: 10,
  },
  text: {
    maxWidth: "80%",
  },
  circle: {
    width: 12,
    height: 12,
    borderColor: "lightgrey",
    borderRadius: 5,
    borderWidth: 2,
  },
});

export default Task;
