import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Checkbox } from "expo-checkbox";

export default function Index() {
  const toDoData = [
    {
      id: 1,
      title: "Buy groceries",
      completed: false,
    },
    { id: 2, title: "Do laundry", completed: false },
    { id: 3, title: "Call mom", completed: false },
    { id: 4, title: "Finish homework", completed: false },
    { id: 5, title: "Go for a run", completed: false },
    { id: 6, title: "Read a book", completed: false },
    { id: 7, title: "Cook dinner", completed: false },
    { id: 8, title: "Clean the house", completed: false },
    { id: 9, title: "Go to the gym", completed: false },
    { id: 10, title: "Watch a movie", completed: false },
    { id: 11, title: "Go out to dinner", completed: false },
    { id: 12, title: "Buy a gift", completed: false },
    { id: 13, title: "Go to the beach", completed: false },
    { id: 14, title: "Go to the museum", completed: false },
    { id: 15, title: "Go to the park", completed: false },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            alert("Menu");
          }}
        >
          <Ionicons name="menu" size={24} color={"#FFA4A4"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Image
            source={{
              uri: "https://i.ytimg.com/vi/XA_I_MtEhkc/maxresdefault.jpg",
            }}
            style={{ width: 40, height: 40, borderRadius: 20 }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.searchBar}>
        <Ionicons name="search" size={24} color={"#FFA4A4"} />
        <TextInput
          placeholder="Search"
          style={styles.searchInput}
          clearButtonMode="always"
        />
      </View>
      <FlatList
        data={toDoData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.toDoContainer}>
            <View style={styles.toDoInfoContainer}>
              <Checkbox
                value={item.completed}
                color={item.completed ? "#FFA4A4" : "#BADFDB"}
              />
              <Text
                style={
                  (styles.toDoText,
                  item.completed && { textDecorationLine: "line-through" })
                }
              >
                {item.title}
              </Text>
            </View>
            <TouchableOpacity onPress={() => alert("Deleted" + item.id)}>
              <Ionicons name="trash" color={"#FFA4A4"} size={24} />
            </TouchableOpacity>
          </View>
        )}
      />
      <KeyboardAvoidingView
        style={styles.footer}
        behavior="padding"
        keyboardVerticalOffset={10}
      >
        <TextInput placeholder="Create new task" style={styles.addNewToDo} />
        <TouchableOpacity onPress={() => {}} style={styles.addButton}>
          <Ionicons name="add" color={"#FCF9EA"} size={34} />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#BADFDB",
  },
  header: {
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchBar: {
    backgroundColor: "#FCF9EA",
    flexDirection: "row",
    padding: 16,
    borderRadius: 10,
    gap: 10,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  toDoContainer: {
    backgroundColor: "#FCF9EA",
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  toDoInfoContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  toDoText: {
    fontSize: 16,
    color: "#333",
  },
  addNewToDo: {
    backgroundColor: "#FCF9EA",
    flex: 1,
    padding: 16,
    borderRadius: 10,
    fontSize: 16,
    color: "#333",
  },
  addButton: {
    backgroundColor: "#BADFDB",
    padding: 8,
    borderRadius: 10,
    marginLeft: 20,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
