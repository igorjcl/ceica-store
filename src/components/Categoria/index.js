import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ({ categoriaNome }) {
  const navigation = useNavigation();

  return (
    <TouchableHighlight onPress={() => navigation.navigate(categoriaNome)}>
      <View style={styles.categoria}>
        <Text style={styles.categoria__texto}>{categoriaNome}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  categoria: {
    borderWidth: 1,
    width: 300,
    height: 100,
    margin: 10,
    padding: 20,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "flex-end",
  },

  categoria__texto: {
    fontSize: 25,
  },
});
