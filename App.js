/** @format */

import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import Task from "./components/Task";

export default function App() {
  const [task, setTask] = useState([]);

  return (
    <View style={styles.container}>
      <View style={styles.taskContainer}>
        <Text style={styles.title}>Today's Tasks</Text>
        <View style={styles.items}>
          <Task text="task1" />
          <Task text="task2" />
        </View>
      </View>
      <KeyboardAvoidingView style={styles.textbox}>
        <TextInput placeholder="write a task" style={styles.inputbox} />
        <TouchableOpacity>
          <View style={styles.addButton}>
            <Text>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gainsboro",
  },
  taskContainer: {
    paddingTop: 80,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  items: {
    marginTop: 15,
  },
  textbox: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  inputbox: {
    width: 300,
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: "white",
    borderRadius: 60,
    borderColor: "grey",
    borderWidth: 1,
  },
  addButton: {
    width: 60,
    height: 60,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 50,
  },
});
