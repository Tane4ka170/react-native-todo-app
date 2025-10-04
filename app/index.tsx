import React from "react";
import { FlatList, Text, View } from "react-native";

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
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FlatList
        data={toDoData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}
